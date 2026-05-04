import React from 'react';

const Guide = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-10">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/60" dir="rtl">
                <h1 className="text-3xl font-black text-slate-800 mb-6 font-[Vazirmatn]">درباره ما</h1>

                <div className="text-slate-600 space-y-5 text-lg font-[Vazirmatn] leading-relaxed">
                    <p>
                        این وب‌سایت توسط تیم توسعه{' '}
                        <a
                            href="https://nilfamtech.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors"
                        >
                            نیلفام تک (Nilfam Tech)
                        </a>{' '}
                        و با هدف ایجاد دسترسی آسان و پایدار برای برنامه‌نویسان و توسعه‌دهندگان ایرانی راه‌اندازی شده است.
                    </p>

                    <p>
                        با توجه به شرایط پیش‌آمده برای شبکه کشور و قطعی‌ها یا اختلالات مکرر اینترنت بین‌المللی، تصمیم گرفتیم تا یک نسخه همیشه در دسترس از کتابخانه مرجع و محبوب{' '}
                        <a
                            href="https://react-icons.github.io/react-icons/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors"
                            dir="ltr"
                        >
                            React Icons
                        </a>{' '}
                        را فراهم کنیم تا روند توسعه پروژه‌های شما در هر شرایطی بدون وقفه ادامه یابد.
                    </p>

                    <p>
                        این سرویس کاملاً رایگان بوده و تمام تلاش ما بر این است که تحت هر شرایطی در دسترس عموم قرار داشته باشد.
                    </p>

                    <p className="font-medium text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                        تیم نیلفام تک امیدوار است هرچه زودتر تمامی محدودیت‌ها رفع شده و همه توسعه‌دهندگان بدون هیچ دغدغه‌ای به اینترنت جهانی و ابزارهای توسعه دسترسی آزاد داشته باشند.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Guide;