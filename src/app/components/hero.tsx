import { Dumbbell, Zap, Award, Flame, Timer, Target, TrendingUp, Heart } from "lucide-react";
import Image from "next/image";

export default function GymHeroSection() {
  return (
<section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 cursor-pointer md:py-20 md:px-8 relative bg-orange-50 overflow-hidden">
      
      {/* Pattern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
        <div className="absolute top-5 right-0 w-64 h-64 bg-orange-100 rounded-full translate-x-1/2 -translate-y-1/2 opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200 rounded-full -translate-x-1/2 translate-y-1/2 opacity-30"></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-orange-300 rotate-45 opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-orange-400 rounded-full opacity-10"></div>
      </div>

      {/* Icon Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid grid-cols-6 grid-rows-6 gap-12 h-full w-full p-12">
          {[
            Dumbbell, Zap, Award, Flame, Timer, Target,
            Target, TrendingUp, Heart, Dumbbell, Award, Flame,
            Flame, Heart, Zap, Timer, Target, TrendingUp,
            Award, Dumbbell, Flame, Heart, Zap, Timer,
            TrendingUp, Target, Dumbbell, Award, Flame, Heart,
            Zap, Timer, Target, TrendingUp, Dumbbell, Award
          ].map((Icon, idx) => (
            <div
              key={idx}
              className={`text-orange-200 ${idx % 2 === 0 ? "opacity-20" : "opacity-10"}`}
            >
              <Icon size={idx % 2 === 0 ? 32 : 24} />
            </div>
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-right z-10 p-6">
        <div className="mb-2 inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
          <Zap size={16} className="ml-1" />
          صالة رياضية حديثة ومتطورة
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
          انطلق نحو{" "}
          <span className="text-orange-600 relative">
            أقوى
            <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-200 opacity-50 -z-10"></span>
          </span>{" "}
          نسخة منك
        </h1>

        <p className="text-xl max-w-md md:ml-auto md:mr-0 mx-auto text-gray-700">
          Gym Hero هو المكان المثالي لبداية رحلتك الصحية والرياضية. انضم إلينا وابدأ التغيير الحقيقي اليوم!
        </p>

        <div className="mt-6 flex flex-wrap justify-center md:justify-end gap-4">
          <div className="flex items-center text-gray-700">
            <Target size={20} className="text-orange-500 ml-2" />
            <span>برامج مخصصة</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Award size={20} className="text-orange-500 ml-2" />
            <span>مدربين محترفين</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Timer size={20} className="text-orange-500 ml-2" />
            <span>24/7 مفتوح</span>
          </div>
        </div>

        <div className="mt-8 flex justify-center md:justify-end">
  <button className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2">
    احجز تمرين تجريبي مجاني
    <Zap size={18} />
  </button>
</div>
      </div>

      {/* Image */}
      <div className="hidden md:flex md:w-1/2 mt-12 md:mt-0 z-10 justify-center items-center">
      <div className="relative">
          <div className="absolute -z-10 w-full h-full bg-gradient-to-br from-orange-200 to-orange-100 rounded-full filter blur-3xl opacity-40"></div>
          
          <div className="absolute -top-6 -right-6 p-3 bg-white rounded-full shadow-lg">
            <Dumbbell size={24} className="text-orange-500" />
          </div>

          <div className="absolute -bottom-6 -left-6 p-3 bg-white rounded-full shadow-lg">
            <Heart size={24} className="text-orange-500" />
          </div>

          <div className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
            <Image
              src="/assets/images/gym-hero.PNG"
              alt="Gym Hero"
              width={320}
              height={480}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
          </div>

          <div className="absolute -bottom-10 -right-10 bg-white p-3 rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
              <TrendingUp size={20} className="text-orange-500 mb-1" />
              <p className="font-bold text-lg">+85%</p>
              <p className="text-xs text-gray-500">نتائج فعالة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
