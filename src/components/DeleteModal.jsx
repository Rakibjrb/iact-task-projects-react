const DeleteModal = ({ data, onCancel, onDelete }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
      <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 flex flex-col items-center text-center gap-4 animate-in fade-in zoom-in-95 duration-150">
        {/* Warning Icon */}
        <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-lg font-bold text-slate-800">Delete Task?</h2>
          <p className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">
            Are you sure you want to delete This task? This action cannot be
            undone.
          </p>
        </div>

        {/* Task Preview Card */}
        <div className="w-full p-3 bg-slate-50 rounded-2xl border border-slate-200/70 text-left">
          <span className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider">
            Priority Level : {data.priority || Prioriy}
          </span>
          <p className="text-xs font-medium text-slate-700 truncate mt-0.5">
            Title : {data.title || "Title"}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 w-full pt-1">
          <button
            onClick={() => onCancel()}
            type="button"
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            type="button"
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 shadow-md shadow-rose-200 transition cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
