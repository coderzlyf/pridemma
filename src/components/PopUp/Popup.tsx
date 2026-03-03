import { forwardRef, type ReactNode } from "react";

type ModalProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  confirmText?: string; // optional for buttons
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

const PopUp = forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      title,
      subtitle,
      children,
      confirmText = "Confirm",
      cancelText = "Cancel",
      onConfirm,
      onCancel,
    },
    ref
  ) => {
    return (
      <dialog
        ref={ref}
        className="backdrop:bg-slate-900/60 backdrop:backdrop-blur-sm m-auto rounded-2xl p-0 w-full max-w-lg bg-transparent shadow-2xl open:animate-fade-in"
      >
        <div className="bg-white rounded-2xl flex flex-col max-h-[90vh] overflow-hidden text-slate-900 shadow-2xl">
          {/* Header */}
          <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
            <div>
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              {subtitle && (
                <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>
              )}
            </div>
            <button
              className="size-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-400 hover:text-primary transition-colors"
              onClick={() =>
                (ref as React.RefObject<HTMLDialogElement>)?.current?.close()
              }
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Body */}
          <div className="p-8 overflow-y-auto custom-scrollbar">{children}</div>

          {/* Footer */}
          <div className="p-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50/50 backdrop-blur-sm">
            <button
              className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 rounded-xl transition-colors"
              type="button"
              onClick={() => {
                onCancel?.();
                (ref as React.RefObject<HTMLDialogElement>)?.current?.close();
              }}
            >
              {cancelText}
            </button>
            {onConfirm && (
              <button
                className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                type="button"
                onClick={() => {
                  onConfirm();
                  (ref as React.RefObject<HTMLDialogElement>)?.current?.close();
                }}
              >
                <span>{confirmText}</span>
                <span className="material-symbols-outlined text-lg">
                  check_circle
                </span>
              </button>
            )}
          </div>
        </div>
      </dialog>
    );
  }
);

export default PopUp;
