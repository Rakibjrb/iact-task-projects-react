const TodoCard = ({ todo, onEdit, onTodoDelete }) => {
  const { title, category, priority, status } = todo;

  return (
    <div
      className={`${status === "completed" ? "bg-green-200" : status === "active" ? "bg-blue-200" : "bg-white"} group flex items-center justify-between p-4 rounded-2xl border border-slate-200/80 hover:border-indigo-200 hover:shadow-xs transition`}
    >
      <div className="flex items-center gap-3.5 flex-1 min-w-0 pr-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-slate-800 truncate">
              {title || "Title not available"}
            </p>
            <span className="shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-50 text-rose-600 border border-rose-100">
              {priority || "Priority"}
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
            <span className="text-indigo-600 font-medium bg-indigo-50 px-2 py-0.5 rounded-md">
              {category || "Category"}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() => onEdit(todo)}
          type="button"
          className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition cursor-pointer"
          title="Edit Task"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
        <button
          onClick={() => onTodoDelete(todo)}
          type="button"
          className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
          title="Delete Task"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
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
        </button>
      </div>
    </div>
  );
};
export default TodoCard;
