import { useImperativeHandle, useRef } from "react";

export default function ResultModel({
  tageTime,
  ref,
  remainingTime,
  onResert,
}) {
  const dialogRef = useRef(null);
  const userLost = remainingTime <= 0;
  const formatRemainingTime = (remainingTime / 1000).toFixed(2);
  const socre = Math.round((1 - remainingTime / (tageTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialogRef} className="result-modal">
      {/* <h2>YOU {result}</h2> */}
      {userLost && <h2>YOU LOST!</h2>}
      {!userLost && <h2>Điểm của bạn là: {socre}</h2>}
      <p>
        Thời gian đích: <strong>{tageTime} Second</strong>
      </p>
      <p>
        Thời gian còn lại <strong>{formatRemainingTime} second</strong>
      </p>
      <form method="dialog" onSubmit={onResert}>
        <button>close</button>
      </form>
    </dialog>
  );
}
