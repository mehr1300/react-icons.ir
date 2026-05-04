import { useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { iconCategories, allIconsFlat } from "../iconsData";
import { FiSearch } from "react-icons/fi";

export default function Gallery() {
    const { categoryId } = useParams();
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setSearchTerm("");
    }, [categoryId]);

    const currentCategory = categoryId ? iconCategories.find(c => c.id === categoryId) : null;
    const title = currentCategory ? currentCategory.name : "Global Search";
    const placeholder = currentCategory ? `Search in ${currentCategory.name}...` : "Search across all icons...";

    const filteredIcons = useMemo(() => {
        let sourceList = currentCategory
            ? Object.entries(currentCategory.icons).map(([name, Icon]) => ({ name, Icon, categoryId: currentCategory.id }))
            : allIconsFlat;

        if (!searchTerm) return sourceList.slice(0, 200);
        return sourceList.filter((icon) => icon.name.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 200);
    }, [searchTerm, currentCategory]);

    return (
        <div className="p-8 md:p-12 max-w-screen-2xl mx-auto min-h-full">
            <header className="mb-14 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-black text-slate-800 mb-8 tracking-tight">
                    {title}
                </h1>

                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <FiSearch className="text-slate-400 text-xl group-focus-within:text-indigo-500 transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder={placeholder}
                        className="w-full bg-white block pl-12 pr-6 py-4 rounded-2xl border border-slate-200 shadow-sm text-left focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-slate-700 font-medium placeholder:font-normal placeholder:text-slate-400"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        dir="ltr"
                    />
                </div>
            </header>

            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5">
                {filteredIcons.map(({ name, Icon, categoryId }) => (
                    <Link
                        key={name}
                        to={`/icon/${categoryId}/${name}`}
                        className="flex flex-col items-center justify-center py-6 md:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1.5 transition-all duration-300 group"
                    >
                        <div className="h-16 flex items-center justify-center">
                            <Icon className="text-5xl text-slate-600 group-hover:text-indigo-600 transition-colors group-hover:scale-110 duration-300" />
                        </div>
                        <span className="text-[11px] font-semibold text-slate-400 group-hover:text-slate-700 truncate w-full text-center mt-2 transition-colors">
              {name}
            </span>
                    </Link>
                ))}
            </div>

            {filteredIcons.length === 0 && (
                <div className="text-center text-slate-400 font-medium mt-20">
                    No icons found matching your criteria.
                </div>
            )}
        </div>
    );
}
