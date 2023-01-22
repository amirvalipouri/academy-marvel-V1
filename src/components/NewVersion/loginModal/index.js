import { useEffect, useRef } from "react";
import "./index.scss";
export default function LoginModal({
  show = true,
  onHide = () => {},
  children = null,
  size = "md",
  className,
}) {
  const modal = useRef();
  const handleShow = () => {
    modal.current.classList.toggle("show", show);
  };
  useEffect(handleShow, [show]);
  return (
    <div
      ref={modal}
      className={`LoginModall text-center position-fixed overflow-hidden p-2 transition-500  ${className}`}
    >
      <button
        type="button"
        className="hide-btn"
        onClick={() => onHide(false)}
      />
      <div
        className={`dialog modal-dialog bg-white rounded shadow-sm position-relative transition overflow-auto modal-${size}`}
      >
        <div className="body">{children}</div>
      </div>
    </div>
  );
}
