/**
 * 종목 - 축구 응원 화면 (고려대학교 강제 응원)
 * @author 현웅
 */
export function SoccerKorea({ goNextEvent }) {
  console.log("지은 initial commit");
  return (
    <>
      <h1 className="event__title">축구</h1>

      <div className="event__btnRow">
        <button id="korea" onClick={goNextEvent}>
          고대
        </button>
        <button id="yonsei">연대</button>
      </div>
    </>
  );
}
