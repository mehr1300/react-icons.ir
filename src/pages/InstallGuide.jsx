

export default function InstallGuide() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-10">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/60">
                <h1 className="text-3xl font-black text-slate-800 mb-6">How to Install</h1>
                <p className="text-slate-600 mb-4 text-lg">Follow these steps to install and run the project locally:</p>

                <div className="space-y-4">

                    <div>
                        <h3 className="font-bold text-slate-700 mb-2">1. Install dependencies via NPM:</h3>
                        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl font-mono text-sm">
                            npm i react-icons
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-700 mb-2">2. Start the development server:</h3>
                        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl font-mono text-sm">
                            npm start
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-700 mb-2">GitHub</h3>
                        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl font-mono text-sm">
                            https://github.com/react-icons
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-700 mb-2">Npm Js</h3>
                        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl font-mono text-sm">
                            https://www.npmjs.com/package/react-icons
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/60" dir="rtl">
                <h1 className="text-3xl font-black text-slate-800 mb-6 font-[Vazirmatn]">راهنمای نصب</h1>
                <p className="text-slate-600 mb-4 text-lg font-[Vazirmatn]">برای نصب و اجرای پروژه روی سیستم خود مراحل زیر را دنبال کنید:</p>

                <div className="space-y-4">

                    <div>
                        <h3 className="font-bold text-slate-700 mb-2 font-[Vazirmatn]">1. نصب پیش‌نیازها از طریق NPM:</h3>
                        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl font-mono text-sm text-left" dir="ltr">
                            npm i react-icons
                        </div>
                    </div>
                    <div>
                        <h3 className="flex flex-row gap-2 font-bold text-slate-700 mb-2 font-[Vazirmatn]">
                            1.1. نصب از طریق میرور:
                            <span className="text-gray-600 text-sm">(در شرایط قعطی اینترنت)</span>
                        </h3>
                        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl font-mono text-sm text-left" dir="ltr">
                            npm i react-icons --registry="https://hub.megan.ir/npm"<br/>
                            npm i react-icons --registry="https://mirror-npm.runflare.com" <br/>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-700 mb-2 font-[Vazirmatn]">2. اجرای سرور توسعه:</h3>
                        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl font-mono text-sm text-left" dir="ltr">
                            npm start
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-700 mb-2 font-[Vazirmatn]">گیت هاب</h3>
                        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl font-mono text-sm" dir="ltr">
                            https://github.com/react-icons
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-700 mb-2 font-[Vazirmatn]">پکیج منیجر</h3>
                        <div className="bg-slate-900 text-slate-50 p-4 rounded-xl font-mono text-sm" dir="ltr">
                            https://www.npmjs.com/package/react-icons
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

