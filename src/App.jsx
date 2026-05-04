import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Gallery from "./pages/Gallery";
import IconDetail from "./pages/IconDetail";
import { iconCategories } from "./iconsData";
import {FiSearch, FiGrid, FiX, FiTerminal, FiInfo} from "react-icons/fi";
import { useState } from "react";
import InstallGuide from "./pages/InstallGuide.jsx";
import Guide from "./pages/Guide.jsx";

function Layout({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-[#f8fafc] font-sans selection:bg-indigo-100 selection:text-indigo-900" dir="ltr">

            {/* Overlay for mobile sidebar */}
            {open && (
                <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden transition-opacity" onClick={() => setOpen(false)}/>
            )}

            {/* Sidebar */}
            <aside className={`fixed md:relative top-0 left-0 h-full z-50 bg-white/80 backdrop-blur-xl border-r border-slate-200/60 shadow-[rgba(0,0,0,0.02)_0px_0px_20px] flex flex-col w-64 lg:w-72 transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
                <div className="flex flex-col px-8 pt-8 pb-4 border-b border-slate-100 justify-between gap-2">
                    <h2 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 tracking-tight">
                        React Icons
                    </h2>
                    <span>V 5.6.0</span>
                </div>

                <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1.5">
                    <NavLink end to="/" onClick={() => setOpen(false)} className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                            isActive
                                ? "bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-100"
                                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                        }`
                    }>
                        <FiSearch className="text-lg opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span className="font-semibold text-xl">Global Search</span>
                    </NavLink>

                    <NavLink to="/install" onClick={() => setOpen(false)} className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                            isActive
                                ? "bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-100"
                                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                        }`
                    }>
                        <FiTerminal className="text-lg opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span className="font-semibold text-xl">How to Install</span>
                    </NavLink>

                    <NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                            isActive
                                ? "bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-100"
                                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                        }`
                    }>
                        <FiInfo className="text-lg opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span className="font-semibold text-xl">About</span>
                    </NavLink>

                    <div className="py-4">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                        <p className="px-4 mt-4 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Libraries
                        </p>
                    </div>

                    {iconCategories.map((cat) => (
                        <NavLink
                            key={cat.id}
                            to={`/category/${cat.id}`}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                                    isActive
                                        ? "bg-white text-violet-700 shadow-sm ring-1 ring-slate-200/60 font-bold"
                                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-800 font-medium"
                                }`
                            }
                        >
                            <span className="w-full text-lg">{cat.name}</span>
                        </NavLink>
                    ))}
                </nav>
            </aside>

            <main className="flex-1 overflow-y-auto relative bg-[#f8fafc]">
                <div onClick={() => setOpen(!open)} className="absolute md:hidden left-5 top-5 w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br cursor-pointer from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 z-30">
                    <FiGrid className="text-white text-xl" />
                </div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] pointer-events-none"></div>
                <div className="p-4 md:p-8">{children}</div>
            </main>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Gallery />} />
                    <Route path="/install" element={<InstallGuide />} /> {/* New Route */}
                    <Route path="/about" element={<Guide />} /> {/* New Route */}
                    <Route path="/category/:categoryId" element={<Gallery />} />
                    <Route path="/icon/:categoryId/:iconName" element={<IconDetail />} />
                </Routes>
            </Layout>
        </Router>
    );
}
