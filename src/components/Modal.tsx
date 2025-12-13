import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode, useEffect, useRef } from "react";

type ModalProps = {
  isVisible: boolean;
  title?: string;
  hideHeader?: boolean;
  showCloseButton?: boolean;
  hasBackdropPadding?: boolean;
  modalClasses?: string;
  bodyClasses?: string;
  header?: ReactNode;
  children: ReactNode;
  onClose: () => void;
};

const Modal = ({
  isVisible,
  title,
  hideHeader = false,
  showCloseButton = true,
  hasBackdropPadding = true,
  header,
  children,
  modalClasses,
  bodyClasses,
  onClose,
}: ModalProps) => {
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isVisible, onClose]);

  if (!isVisible) return <></>;

  return (
    <div
      className={`absolute top-0 left-0 h-full max-h-screen w-full flex justify-center items-center bg-stone-900/40 z-80 ${
        hasBackdropPadding ? "px-3" : ""
      }`}
      onClick={handleBackdropClick}
      ref={backdropRef}
    >
      <div
        className={`w-full bg-stone-800 dark:bg-stone-300 rounded-lg flex flex-col relative overflow-hidden ${modalClasses}`}
      >
        {!hideHeader && (
          <section className="w-full">
            {header ?? (
              <div className="w-full flex justify-between items-center p-5 pb-3">
                <h3 className={`text-2xl dark:text-stone-800 text-stone-300`}>
                  {title}
                </h3>
                {showCloseButton && (
                  <button
                    className={`w-10 h-10 cursor-pointer flex justify-center items-center rounded-full dark:text-stone-800 hover:dark:bg-stone-400 text-stone-300 hover:bg-stone-600 transition-colors duration-200 ease-in-out`}
                    onClick={onClose}
                  >
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                  </button>
                )}
              </div>
            )}
          </section>
        )}

        <section
          className={`grow overflow-y-auto w-full text-stone-300 dark:text-stone-800 ${bodyClasses}`}
        >
          {children}
        </section>
      </div>
    </div>
  );
};

export default Modal;
