import { useParams, useNavigate } from "react-router-dom";
import { iconCategories } from "../iconsData";
import { useState } from "react";
import {FiArrowLeft, FiArrowRight, FiCheck, FiCopy} from "react-icons/fi";

export default function IconDetail() {
    const { categoryId, iconName } = useParams();
    const navigate = useNavigate();
    const [copiedCode, setCopiedCode] = useState(null);

    const category = iconCategories.find(c => c.id === categoryId);
    const Icon = category?.icons[iconName];

    if (!Icon) return <div className="text-center mt-20 text-slate-500 font-medium">Icon Not Found</div>;

    const importCode = `import { ${iconName} } from "react-icons/${categoryId}";`;
    const componentCode = `<${iconName} size={24} />`;

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopiedCode(type);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    return (
        <div className="max-w-4xl mx-auto p-8 md:p-12 min-h-full flex flex-col justify-center">
            <button onClick={() => navigate(-1)} className="flex items-center cursor-pointer gap-2 text-slate-500 hover:text-slate-900 font-medium mb-10 w-fit transition-colors">
                <FiArrowLeft /> Back to Gallery
            </button>

            <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-12 flex flex-col items-center relative overflow-hidden">

                {/* Decorative Background Blob */}
                <div className="absolute top-[-50%] left-[-10%] w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-16 rounded-3xl mb-8 border border-slate-200/60 shadow-inner relative z-10">
                    <Icon className="text-[9rem] text-slate-800 drop-shadow-sm" />
                </div>

                <h2 className="text-4xl font-black text-slate-800 mb-3 tracking-tight z-10">{iconName}</h2>
                <span className="text-xs font-bold uppercase tracking-wider bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full mb-10 border border-indigo-100 z-10">
          {category.name}
        </span>

                <div className="w-full space-y-6 z-10">
                    <CodeSnippet
                        label="Import Statement"
                        code={importCode}
                        isCopied={copiedCode === 'import'}
                        onCopy={() => copyToClipboard(importCode, 'import')}
                    />
                    <CodeSnippet
                        label="React Component"
                        code={componentCode}
                        isCopied={copiedCode === 'component'}
                        onCopy={() => copyToClipboard(componentCode, 'component')}
                    />
                </div>
            </div>
        </div>
    );
}

function CodeSnippet({ label, code, isCopied, onCopy }) {
    return (
        <div className="w-full text-left" dir="ltr">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">{label}</p>
            <div className="bg-[#0f172a] text-slate-300 p-4 pl-5 rounded-2xl flex justify-between items-center shadow-lg shadow-slate-900/10 border border-slate-800">
                <code className="font-mono text-sm tracking-wide break-all mr-4 text-emerald-400">
                    {code}
                </code>
                <button
                    onClick={onCopy}
                    className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                        isCopied ? "bg-emerald-500 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                >
                    {isCopied ? <FiCheck className="text-base" /> : <FiCopy className="text-base" />}
                    {isCopied ? "Copied" : "Copy"}
                </button>
            </div>
        </div>
    );
}
