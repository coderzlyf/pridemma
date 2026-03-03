const ClassesBtn = () => {
  return (
    <div className="flex gap-3 px-0 flex-wrap">
      <div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-primary pl-4 pr-4 shadow-sm hover:shadow-md transition-shadow">
        <p className="text-white text-sm font-medium leading-normal">All</p>
      </div>
      <div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors pl-4 pr-4">
        <p className="text-slate-900 text-sm font-medium leading-normal">MMA</p>
      </div>
      <div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors pl-4 pr-4">
        <p className="text-slate-900 text-sm font-medium leading-normal">
          Fitness
        </p>
      </div>
      <div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors pl-4 pr-4">
        <p className="text-slate-900 text-sm font-medium leading-normal">
          Youth
        </p>
      </div>
    </div>
  );
};

export default ClassesBtn;
