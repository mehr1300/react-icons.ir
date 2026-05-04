import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { iconList } from "../iconsData";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");

    // فیلتر کردن و محدودسازی تعداد رندر برای پرفورمنس
    const filteredIcons = useMemo(() => {
        if (!searchTerm) return iconList.slice(0, 200); // در حالت عادی فقط 200 تای اول
        return iconList
            .filter(([name]) => name.toLowerCase().includes(searchTerm.toLowerCase()))
            .slice(0, 200);
    }, [searchTerm]);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <header className="mb-10 text-center">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                    کتابخانه آیکون‌های من
                </h1>
                <p className="text-gray-500 mb-8">جستجو در بین هزاران آیکون مدرن</p>

                <input
                    type="text"
                    placeholder="جستجوی آیکون (مثلا: home)..."
                    className="w-full max-w-xl mx-auto block px-6 py-4 rounded-2xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </header>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {filteredIcons.map(([name, Icon]) => (
                    <Link
                        key={name}
                        to={`/icon/${name}`}
                        className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
                    >
                        <Icon className="text-4xl text-gray-600 group-hover:text-blue-600 transition-colors mb-3" />
                        <span className="text-xs font-medium text-gray-500 truncate w-full text-center">
              {name}
            </span>
                    </Link>
                ))}
            </div>

            {filteredIcons.length === 0 && (
                <div className="text-center text-gray-500 mt-10">
                    آیکونی پیدا نشد!
                </div>
            )}
        </div>
    );
}
