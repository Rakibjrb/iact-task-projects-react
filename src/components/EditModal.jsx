const EditModal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 flex flex-col gap-5 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-800">Edit Task</h2>
            <p className="text-xs text-slate-500">Update task details and status</p>
          </div>
          <button
            type="button"
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Form Inputs */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Task Title
            </label>
            <input
              type="text"
              defaultValue="Design homepage hero section & banners"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Category
            </label>
            <div className="flex gap-2">
              <span className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 cursor-pointer">
                Work
              </span>
              <span className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 cursor-pointer">
                Personal
              </span>
              <span className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 cursor-pointer">
                Study
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Priority
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                className="py-2 text-xs font-semibold rounded-xl border border-slate-200 bg-slate-50 text-slate-600 cursor-pointer hover:bg-slate-100"
              >
                Low
              </button>
              <button
                type="button"
                className="py-2 text-xs font-semibold rounded-xl border border-amber-200 bg-amber-50 text-amber-700 cursor-pointer"
              >
                Medium
              </button>
              <button
                type="button"
                className="py-2 text-xs font-semibold rounded-xl border border-slate-200 bg-slate-50 text-slate-600 cursor-pointer hover:bg-slate-100"
              >
                High
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Status
            </label>
            <div className="flex gap-2">
              <span className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 cursor-pointer">
                In Progress
              </span>
              <span className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-pointer">
                Completed
              </span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
          <button
            type="button"
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-200 transition cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;

