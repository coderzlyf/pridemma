import { forwardRef } from "react";

const PopupForm = forwardRef<HTMLDialogElement>((props, ref) => {
  return (
    <dialog
      ref={ref}
      className="backdrop:bg-slate-900/60 backdrop:backdrop-blur-sm m-auto rounded-2xl p-0 w-full max-w-lg bg-transparent shadow-2xl open:animate-fade-in"
      id="registration-modal"
    >
      <form
        className="bg-white rounded-2xl flex flex-col max-h-[90vh] overflow-hidden text-slate-900 shadow-2xl"
        method="dialog"
      >
        <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Event Registration
            </h3>
            <p className="text-sm text-slate-500 mt-0.5">
              Secure your spot today
            </p>
          </div>
          <button className="size-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>
        <div className="p-8 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col gap-6">
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl flex gap-5 items-center shadow-sm">
              <div className="size-14 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-2xl">
                  event_available
                </span>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-0.5">
                  Registering for
                </p>
                <p className="font-bold text-slate-900 text-lg">
                  Intro to BJJ Seminar
                </p>
                <p className="text-sm text-slate-500 font-medium mt-0.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-primary">
                    schedule
                  </span>
                  Sat, Oct 12 • 10:00 AM
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">
                    First Name <span className="text-primary">*</span>
                  </label>
                  <input
                    className="h-11 rounded-lg px-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-blue-500/10 outline-none text-sm transition-all font-medium text-slate-900 placeholder:text-slate-400 invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500/10"
                    placeholder="John"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">
                    Last Name <span className="text-primary">*</span>
                  </label>
                  <input
                    className="h-11 rounded-lg px-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-blue-500/10 outline-none text-sm transition-all font-medium text-slate-900 placeholder:text-slate-400"
                    placeholder="Doe"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    className="h-11 rounded-lg px-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-blue-500/10 outline-none text-sm transition-all font-medium text-slate-900 placeholder:text-slate-400"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <input
                    className="h-11 rounded-lg px-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-blue-500/10 outline-none text-sm transition-all font-medium text-slate-900 placeholder:text-slate-400"
                    placeholder="(555) 123-4567"
                    type="tel"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">
                    Experience Level <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <select className="h-11 w-full appearance-none rounded-lg px-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-blue-500/10 outline-none text-sm transition-all font-medium text-slate-900 cursor-pointer">
                      <option value="">Select your current rank/level</option>
                      <option>Beginner / No Experience</option>
                      <option>White Belt</option>
                      <option>Blue Belt</option>
                      <option>Purple Belt</option>
                      <option>Brown/Black Belt</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-slate-400 text-xl">
                      expand_more
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">
                    Additional Notes
                    <span className="text-slate-400 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <textarea
                    className="h-24 rounded-lg p-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-blue-500/10 outline-none text-sm transition-all font-medium text-slate-900 placeholder:text-slate-400 resize-none"
                    placeholder="Any injuries or medical conditions we should be aware of?"
                  ></textarea>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-2 bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-primary/30 transition-colors group">
                <div className="relative flex items-center mt-0.5">
                  <input
                    className="peer appearance-none rounded border-slate-300 text-primary focus:ring-offset-0 focus:ring-primary bg-white cursor-pointer size-5 checked:bg-primary checked:border-primary transition-all"
                    id="waiver"
                    type="checkbox"
                  />
                  <span className="material-symbols-outlined text-white text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none">
                    check
                  </span>
                </div>
                <label
                  className="text-xs text-slate-600 font-medium leading-relaxed cursor-pointer select-none"
                  htmlFor="waiver"
                >
                  I have read and agree to the
                  <a
                    className="text-primary hover:text-primary-hover font-bold underline decoration-blue-200 hover:decoration-primary transition-all"
                    href="#"
                  >
                    Liability Waiver
                  </a>
                  and terms of service. I understand the risks involved in
                  martial arts training.
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50/50 backdrop-blur-sm">
          <button
            className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 rounded-xl transition-colors"
            onClick={() =>
              (ref as React.RefObject<HTMLDialogElement>)?.current?.close()
            }
            type="button"
          >
            Cancel
          </button>
          <button
            className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            type="submit"
          >
            <span>Confirm Registration</span>
            <span className="material-symbols-outlined text-lg">
              check_circle
            </span>
          </button>
        </div>
      </form>
    </dialog>
  );
});

export default PopupForm;
