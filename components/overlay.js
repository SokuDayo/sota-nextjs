import "../styles/overlay.css";

export function Overlay({ isOpen, onClose, children }) {
  return (
    <>
      {isOpen ? (
        <div className="overlay">
          <div className="overlay_background" onClick={onClose} />
          <div className="overlay_container" onClick={(e) => e.stopPropagation()}>
            <div className="overlay_controls">
              <button
                className="overlay_close"
                type="button"
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}
