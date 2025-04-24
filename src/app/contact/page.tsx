import React from "react";

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <div className="bg-orange-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">اتصل بنا</h1>
        <p className="max-w-xl mx-auto text-lg">
          هل لديك استفسار أو محتاج مساعدة؟ تواصل معنا الآن وسنرد عليك بأسرع وقت ممكن.
        </p>
      </div>

      {/* Contact Info */}
      <div className="max-w-5xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">معلومات التواصل</h2>
          <p className="mb-4">📍 حي النخيل، طريق الملك فهد، الرياض </p>
          <p className="mb-4">📞 الهاتف: 09012345678</p>
          <p className="mb-4">📧 البريد الإلكتروني: hero.gym@email.com</p>
          <p className="mt-6 text-gray-600">
            نسعد بالتواصل معك من الأحد إلى الخميس – من 9 صباحًا إلى 9 مساءً.
          </p>
        </div>

        {/* Form */}
        <form className="bg-orange-50 p-6 rounded-2xl shadow-md space-y-4">
          <div>
            <label className="block text-sm mb-1 font-bold">الاسم الكامل</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="أدخل اسمك"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 font-bold">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 font-bold">الرسالة</label>
            <textarea
              
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="أكتب رسالتك هنا..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-600 text-white font-bold px-6 py-2 rounded hover:bg-orange-700 transition"
          >
            إرسال
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
