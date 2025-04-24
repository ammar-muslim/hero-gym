import { FaDumbbell, FaUserTie, FaFire, FaHeart, FaRunning, FaClock, FaCheckCircle } from "react-icons/fa";
import GymHeroSection from "./components/hero"; // تأكد من المسار الصحيح

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <GymHeroSection />

      {/* Features Section */}
      <section className="py-16 bg-orange-100 text-center">
        <h2 className="text-3xl font-bold mb-8 text-orange-600">مميزاتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
          <div className="bg-white rounded-xl shadow-md p-6">
            <FaDumbbell className="text-orange-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">أجهزة حديثة</h3>
            <p>نستخدم أحدث المعدات الرياضية لمساعدتك في الوصول لأفضل أداء.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <FaUserTie className="text-orange-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">مدربين محترفين</h3>
            <p>فريقنا يتكون من محترفين ذوي خبرة لمساعدتك على تحقيق أهدافك.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <FaFire className="text-orange-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">تحفيز مستمر</h3>
            <p>نحن نضمن لك بيئة محفزة ومليئة بالطاقة والنشاط.</p>
          </div>
        </div>
      </section>



      {/* Section: Training Programs */}
      <section className="py-20 bg-orange-50 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-orange-600">برامجنا التدريبية</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-xl shadow-md p-6">
            <FaRunning className="text-orange-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">تمارين القوة والتحمل</h3>
            <p>برنامج مخصص لبناء الكتلة العضلية وزيادة قوة التحمل باستخدام أحدث الأدوات.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <FaClock className="text-orange-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">تدريبات HIIT المكثفة</h3>
            <p>حرق الدهون بسرعة من خلال جلسات قصيرة وعالية الكثافة تحت إشراف مدربين محترفين.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <FaCheckCircle className="text-orange-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">برامج مخصصة لكل هدف</h3>
            <p>سواء كنت مبتدئ أو محترف، نقدم لك خطة مناسبة لأهدافك الجسدية والصحية.</p>
          </div>
        </div>
      </section>











{/* Section: Testimonials */}
<section className="text-center">
  <div className="relative">
    {/* خلفية مقسمة بين البرتقالي (يمين) والأسود (يسار) */}
    <div className="absolute inset-0 flex">
      <div className="w-1/2 bg-orange-500 h-full"></div>
      <div className="w-1/2 bg-neutral-800 h-full"></div>
    </div>

    {/* المحتوى الذي سيظهر فوق الخلفية */}
    <div className="relative z-10 py-20 px-6 md:px-16">
      <h2 className="text-3xl font-bold mb-10 text-white">آراء عملائنا</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* التعليق الأول */}
        <blockquote className="bg-white p-8 rounded-xl shadow-lg relative">
          <p className="text-lg text-gray-700 italic">
            "من أول يوم حسيت بفرق. الجو مشجع والمدربين ممتازين. فعلاً أفضل قرار أخذته!"
          </p>
          <footer className="mt-4 text-orange-600 font-bold text-xl">
            — محمد علي
          </footer>
        </blockquote>
        {/* التعليق الثاني */}
        <blockquote className="bg-white p-8 rounded-xl shadow-lg relative">
          <p className="text-lg text-gray-700 italic">
            "كنت دايمًا أبحث عن مكان يحفزني، ولقيت هنا المكان المثالي. مدربين متعاونين وأجواء رياضية رائعة."
          </p>
          <footer className="mt-4 text-orange-600 font-bold text-xl">
            — أحمد سعيد
          </footer>
        </blockquote>
        {/* التعليق الثالث */}
        <blockquote className="bg-white p-8 rounded-xl shadow-lg relative">
          <p className="text-lg text-gray-700 italic">
            "أنا متحمس للتدريبات في Gym Hero. المدربين يساعدونك على الوصول لأهدافك بأسلوب احترافي."
          </p>
          <footer className="mt-4 text-orange-600 font-bold text-xl">
            — يوسف العلي
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</section>




    </main>
  );
}
