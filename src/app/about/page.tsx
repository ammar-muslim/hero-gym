import React from "react";
import { FaDumbbell, FaUserFriends, FaAppleAlt, FaClock, FaHeartbeat, FaClipboardList } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-orange-600 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">من نحن</h1>
        <p className="text-lg max-w-2xl mx-auto">
          في Hero Gym، نمنحك أكثر من مجرد مكان للتمرين. نحن مجتمع من الطموحين، نسعى معًا لبناء أجسام قوية وحياة صحية.
        </p>
      </div>

      {/* Vision & Mission */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">رؤيتنا</h2>
          <p className="text-lg text-gray-700">
            أن نكون الوجهة الأولى لعشاق اللياقة البدنية في الوطن العربي، ونصنع بيئة محفّزة تمكِّن كل شخص من الوصول لأقصى طاقته.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">رسالتنا</h2>
          <p className="text-lg text-gray-700">
            تقديم خدمات رياضية شاملة، تجمع بين التدريب الاحترافي والتغذية الصحية والدعم النفسي، لمساعدتك على تحقيق أهدافك.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-orange-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-10">لماذا تختارنا؟</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-6 hover:scale-105 transition">
              <FaDumbbell className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-orange-600 mb-2">أجهزة حديثة</h3>
              <p>أحدث تقنيات التدريب لتجربة تمرين فعالة وآمنة.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:scale-105 transition">
              <FaUserFriends className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-orange-600 mb-2">مدربون محترفون</h3>
              <p>فريق متخصص يقدم لك الدعم خطوة بخطوة.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:scale-105 transition">
              <FaAppleAlt className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-orange-600 mb-2">خطط غذائية</h3>
              <p>برامج تغذية مخصصة حسب هدفك سواء بناء عضلات أو حرق دهون.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:scale-105 transition">
              <FaClock className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-orange-600 mb-2">مرونة الاشتراك</h3>
              <p>خطط اشتراك يومية، شهرية، وسنوية تناسب الجميع.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:scale-105 transition">
              <FaHeartbeat className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-orange-600 mb-2">أجواء محفّزة</h3>
              <p>بيئة مليئة بالحماس والمنافسة الإيجابية.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:scale-105 transition">
              <FaClipboardList className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-orange-600 mb-2">متابعة مستمرة</h3>
              <p>تحليل أداء شهري وتقييم التقدم أولًا بأول.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-orange-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">جاهز تبدأ التحدي؟</h2>
        <p className="mb-6">انضم إلينا اليوم وابدأ رحلة التغيير الحقيقي!</p>
        <button className="bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-orange-100 transition">
          اشترك الآن
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
