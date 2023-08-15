/**
 * 종목 - 럭비 응원 화면 (연세대학교 강제 응원)
 * @author 현웅
 */
import { useRef, useState } from 'react';
import "./Rugby.css";

export function RugbyKorea({ goNextEvent }) {
  console.log('형진 수정');
  const promptContainerRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isAlternateText, setIsAlternateText] = useState(false);
  
  const handleYonseiButtonClick = () => {
    // Scroll to the "이길 것 같은 팀을" section
    if (promptContainerRef.current) {
      promptContainerRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsZoomed(true);
      setIsAlternateText(prev => !prev);
    }
    
    setTimeout(() => {
      goNextEvent();
    }, 3000);
  };

  return (
    <div className={`page-wrapper ${isZoomed ? 'zoomed' : ''}`}>
      <div className="header-container">
        <h5 className="headertext-round">Round 4</h5>
        <h3 className="headertext-event">럭비</h3>
        <div className="prompt-container" ref={promptContainerRef}>
        

          <h1 className="prompt-text">
            {isAlternateText ? (
              <span className="animated-text" style={{ transitionDelay: "0s" }}>
                이길 것 같지 않은 팀을
              </span>
            ) : (
              <span className="animated-text" style={{ transitionDelay: "0s" }}>
                이길 것 같은 팀을
              </span>
            )}
          </h1>
          <h1 className="prompt-text">선택해주세요</h1>
        </div>
      </div>
      <div className="body-container">
        <img className="character-image tiger-image" src="images/tiger-character.svg" alt="호랑이 캐릭터" />
        <img className="character-image eagle-image" src="images/eagle-character.svg" alt="독수리 캐릭터" />
        <img className="ball-image" src="images/baseball-ball.svg" alt="야구공" />
      </div>
      <div className="buttons-container">
        <div className="button-container korea">
          <div id="korea" className="univ-button" onClick={goNextEvent}>
            <img src="images/korea_logo.svg" alt="고대" />
          </div>
        </div>
        <div className="button-container yonsei">
          <div id="yonsei" className="univ-button" onClick={handleYonseiButtonClick}>
            <img src="images/yonsei_logo.svg" alt="연대" />
          </div>
        </div>
        <img className="lightning-icon" src="images/lightning.png" alt="아이콘" />
      </div>
    </div>
    
  );
}
