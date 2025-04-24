import React from "react";

const Services = () => {
  const services = [
    {
      title: "💪 تدريب شخصي",
      desc: "خطط تدريب مخصصة حسب جسمك وهدفك مع متابعة دقيقة من المدرب.",
    },
    {
      title: "🏋️‍♀️ تدريب جماعي",
      desc: "أجواء حماسية في مجموعات بإشراف مدرب محترف تشجعك على الاستمرار.",
    },
    {
      title: "🍽️ استشارات تغذية",
      desc: "خطط غذائية مصممة حسب احتياجاتك سواء كنت تريد خسارة دهون أو زيادة عضلية.",
    },
    {
      title: "🔥 تمارين HIIT",
      desc: "جلسات حرق دهون مكثفة لتحسين لياقتك في وقت قصير.",
    },
    {
      title: "🧘‍♂️ جلسات مرونة واسترخاء",
      desc: "تمارين تساعدك على تحسين مرونتك والتخلص من التوتر بعد التمرين.",
    },
    {
      title: "🧬 تحاليل وتقييم جسماني",
      desc: "قياس نسبة الدهون والعضلات وتحديد حالة الجسم بدقة كل شهر.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <div className="bg-orange-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">خدماتنا</h1>
        <p className="max-w-xl mx-auto text-lg">
          نحن في hero gym نقدم مجموعة متنوعة من الخدمات المصممة لمساعدتك على تحقيق أفضل نسخة من نفسك!
        </p>
      </div>

      {/* Services Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-orange-50 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold text-orange-500 mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <div className="bg-orange-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">أي خدمة تناسبك؟</h2>
        <p className="mb-6">احجز الآن جلستك المجانية مع أحد مدربينا وخد أول خطوة!</p>
        <button className="bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-orange-100 transition">
          احجز استشارتك
        </button>
      </div>
    </div>
  );
};

export default Services;
