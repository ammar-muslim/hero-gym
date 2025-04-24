import React from "react";
import { FaDumbbell, FaHeartbeat, FaCrown, FaCheck, FaArrowRight } from "react-icons/fa";

const plansData = [
  {
    icon: <FaDumbbell size={36} />,
    title: "الخطة الشهرية",
    popular: false,
    price: "150",
    currency: "ر.س",
    period: "شهرياً",
    features: [
      "دخول غير محدود للصالة",
      "خطة تمارين أساسية",
      "متابعة دورية للتقدم",
      "استخدام جميع المعدات"
    ],
    notIncluded: [
      "جلسات تدريب خاصة",
      "خطة تغذية شخصية"
    ]
  },
  {
    icon: <FaHeartbeat size={36} />,
    title: "الخطة الربع سنوية",
    popular: true,
    price: "400",
    currency: "ر.س",
    period: "لمدة 3 شهور",
    features: [
      "كل مميزات الخطة الشهرية",
      "خطة تمارين وتغذية شخصية",
      "تقييم شهري للجسم",
      "استشارات صحية",
      "حصة سباحة أسبوعية"
    ],
    notIncluded: [
      "جلسات تدريب خاصة"
    ]
  },
  {
    icon: <FaCrown size={36} />,
    title: "الخطة السنوية",
    popular: false,
    price: "1400",
    currency: "ر.س",
    period: "سنوياً",
    features: [
      "كل مميزات الخطط السابقة",
      "جلسات تدريب خاصة",
      "تقييم شهري شامل",
      "هدايا وخصومات حصرية",
      "مرافق VIP",
      "مدرب شخصي مرتين شهرياً"
    ],
    notIncluded: []
  }
];

const Plans = () => {
  return (
    <div className="bg-white text-gray-800 font-[system-ui]" dir="rtl">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-700 text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Background pattern */}
          <div className="absolute left-0 top-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="absolute" 
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fontSize: `${Math.random() * 2 + 1}rem`,
                  opacity: Math.random() * 0.5 + 0.1,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              >
                
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">خطط الاشتراك في Hero Gym</h1>
          <p className="max-w-xl mx-auto text-lg">
            اختر الخطة المناسبة لك وابدأ رحلتك الرياضية نحو اللياقة والقوة مع أفضل صالة رياضية في السعودية 🇸🇦
          </p>
        </div>
      </div>

      {/* Plans */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plansData.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular 
                  ? "bg-white border-2 border-orange-500 shadow-xl" 
                  : "bg-white border border-gray-100 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 bg-orange-500 text-white py-1 px-4 text-sm font-bold rounded-br-lg z-10">
                  الأكثر شعبية
                </div>
              )}
              
              <div className={`p-2 ${plan.popular ? "bg-gradient-to-r from-orange-500 to-orange-600" : "bg-gray-50"}`}>
                <div className="flex justify-center items-center py-6">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                    plan.popular ? "bg-white text-orange-500" : "bg-orange-100 text-orange-500"
                  }`}>
                    {plan.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-2xl font-bold ${plan.popular ? "text-orange-600" : "text-gray-800"} mb-4 text-center`}>
                  {plan.title}
                </h3>
                
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-xl text-gray-600 mr-1">{plan.currency}</span>
                  </div>
                  <p className="text-gray-500 mt-1">{plan.period}</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <span className="text-green-500 ml-2"><FaCheck /></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-400">
                      <span className="text-gray-300 ml-2"><FaCheck /></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-xl font-bold transition-all ${
                    plan.popular 
                      ? "bg-orange-500 hover:bg-orange-600 text-white" 
                      : "bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-800"
                  }`}
                >
                  <span>اشترك الآن</span>
                  <FaArrowRight className="mr-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">هل لديك استفسارات حول خططنا أو تحتاج إلى مساعدة؟</p>
          <button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-8 rounded-lg transition-colors">
            تواصل معنا
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;