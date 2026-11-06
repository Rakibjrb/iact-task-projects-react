import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";
import DeleteModal from "./components/DeleteModal";
import { useEffect, useState } from "react";
import TodoCard from "./components/TodoCard";

export const FilterOptions = ["all", "new", "active", "completed"];

const getSavedTodos = () => JSON.parse(localStorage.getItem("todos")) || [];
const saveTodos = (data) => localStorage.setItem("todos", JSON.stringify(data));
const deleteTodos = () => localStorage.removeItem("todos");

const App = () => {
  const [todos, setTodos] = useState(getSavedTodos());
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState({
    show: false,
    data: null,
  });
  const [showDeleteModal, setShowDeleteModal] = useState({
    show: false,
    data: null,
  });
  const [filter, setFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  const handleCreateNewTodo = (data) => {
    const uniqueId = `todo-id-${new Date().getMilliseconds()}-${Math.floor(Math.random() * 100000) + 100000}`;
    const newTodo = {
      id: uniqueId,
      ...data,
      status: "new",
    };

    saveTodos([...getSavedTodos(), newTodo]);
    setTodos((prev) => [...prev, newTodo]);
    setShowAddModal(false);
  };

  const handleOnEdit = (data) => {
    const savedTodos = getSavedTodos();
    const updateTodo = savedTodos.filter((todo) => todo.id === data.id)[0];
    updateTodo.title = data.title;
    updateTodo.category = data.category;
    updateTodo.priority = data.priority;
    updateTodo.status = data.status;
    deleteTodos();
    saveTodos(savedTodos);
    setTodos(savedTodos);
    setShowEditModal({ show: false, data: null });
  };

  const handleDeleteTodo = () => {
    const deleteId = showDeleteModal.data.id;
    const updatedTodos = todos.filter((todo) => todo.id !== deleteId);
    setTodos(updatedTodos);
    deleteTodos();
    saveTodos(updatedTodos);
    setShowDeleteModal({ show: false, data: null });
  };

  const handleFilter = (status) => {
    setFilter(status);
    const savedTodos = getSavedTodos();

    if (status === FilterOptions[1]) {
      const activeTodos = savedTodos.filter(
        (todo) => todo.status === FilterOptions[1],
      );
      setTodos(activeTodos);
    } else if (status === FilterOptions[2]) {
      const activeTodos = savedTodos.filter(
        (todo) => todo.status === FilterOptions[2],
      );
      setTodos(activeTodos);
    } else if (status === FilterOptions[3]) {
      const activeTodos = savedTodos.filter(
        (todo) => todo.status === FilterOptions[3],
      );
      setTodos(activeTodos);
    } else {
      setTodos(savedTodos);
    }
  };

  const getStats = () => {
    const totalTodos = getSavedTodos().length;
    const activeTodos = getSavedTodos().filter(
      (todo) => todo.status === "active",
    );
    const completedTodos = getSavedTodos().filter(
      (todo) => todo.status === "completed",
    );

    return {
      total: totalTodos,
      active: activeTodos.length,
      completed: completedTodos.length,
    };
  };

  useEffect(() => {
    const searchTerm = searchText.toLowerCase();
    const savedTodos = getSavedTodos();
    const searchedTodos = savedTodos.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm),
    );
    setTodos(searchedTodos);
  }, [searchText]);

  return (
    <main className="min-h-screen w-full bg-linear-to-br from-slate-50 via-slate-100 to-indigo-50/40 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Top Header Card */}
        <header className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Workspace
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
              Task Manager
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Organize, track, and complete your daily goals effortlessly
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              type="button"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-200 active:scale-98 transition cursor-pointer"
            >
              <span className="text-lg leading-none">+</span>
              <span>New Task</span>
            </button>
          </div>
        </header>

        {/* Stats Row */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Total Tasks
              </p>
              <p className="text-2xl font-bold text-slate-800 mt-1">
                {getStats().total}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">
              📋
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                In Progress
              </p>
              <p className="text-2xl font-bold text-amber-600 mt-1">
                {getStats().active}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm">
              ⏳
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Completed
              </p>
              <p className="text-2xl font-bold text-emerald-600 mt-1">
                {getStats().completed}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
              ✓
            </div>
          </div>
        </section>

        {/* Search, Filter & Controls */}
        <section className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search input */}
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 text-sm">
              🔍
            </span>
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search tasks by title..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 overflow-x-auto">
            {FilterOptions.map((status, idx) => (
              <button
                onClick={() => handleFilter(status)}
                key={`filter-by-${status}-${idx}`}
                type="button"
                className={`${filter === status && "bg-indigo-600 text-white"} px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase cursor-pointer shadow-xs border border-slate-200`}
              >
                {status}
              </button>
            ))}
          </div>
        </section>

        {/* Todo List Card */}
        <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h2 className="text-base font-bold text-slate-800">Tasks</h2>
            <span className="text-xs text-slate-500 font-medium">
              Sorted by Recent
            </span>
          </div>

          {/* List todos */}
          <div className="space-y-3">
            {!todos.length ? (
              <div className="w-full h-[200px] flex items-center justify-center">
                <div className="flex flex-col justify-center gap-3 items-center">
                  <div>No Tasks Found</div>
                  <button
                    onClick={() => setShowAddModal(true)}
                    type="button"
                    className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-200 active:scale-98 transition cursor-pointer"
                  >
                    <span className="text-lg leading-none">+</span>
                    <span>Create Now</span>
                  </button>
                </div>
              </div>
            ) : (
              todos.map((todo) => (
                <TodoCard
                  key={todo.id}
                  todo={todo}
                  onEdit={(data) =>
                    setShowEditModal({
                      show: true,
                      data,
                    })
                  }
                  onTodoDelete={(data) =>
                    setShowDeleteModal({ show: true, data })
                  }
                />
              ))
            )}
          </div>
        </section>

        {/* Demo preview: uncomment any modal to preview it */}
        {showAddModal && (
          <AddModal
            onCancel={() => setShowAddModal(false)}
            onCreate={handleCreateNewTodo}
          />
        )}
        {showEditModal.show && (
          <EditModal
            data={showEditModal.data}
            onCancel={() => setShowEditModal({ show: false, data: null })}
            onEdit={handleOnEdit}
          />
        )}
        {showDeleteModal.show && (
          <DeleteModal
            data={showDeleteModal.data}
            onCancel={() => setShowDeleteModal({ show: false, data: null })}
            onDelete={handleDeleteTodo}
          />
        )}
      </div>
    </main>
  );
};

export default App;
