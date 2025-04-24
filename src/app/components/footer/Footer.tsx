import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Twitter, Dumbbell } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10 relative">
      {/* خلفية بسيطة */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-orange-500 opacity-10 blur-xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* معلومات الجيم */}
          <div>
            <div className="flex items-center mb-4">
              <Dumbbell className="text-orange-500 mr-2" size={24} />
              <h3 className="text-xl font-bold">جيم هيرو</h3>
            </div>
            <p className="text-gray-300 mb-4">
              صالة رياضية حديثة ومتكاملة في قلب الرياض، نقدم خدمات متميزة لتحقيق أهدافك الرياضية والصحية.
            </p>
          </div>

          {/* معلومات الاتصال */}
          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 text-orange-500 flex-shrink-0" size={18} />
                <span className="text-gray-300">حي النخيل، طريق الملك فهد، الرياض</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-orange-500" size={18} />
                <span className="text-gray-300">+966 56 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-orange-500" size={18} />
                <span className="text-gray-300">info@gymhero.sa</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 text-orange-500" size={18} />
                <span className="text-gray-300">مفتوح يوميًا من 6 ص - 11 م</span>
              </li>
            </ul>
          </div>

          {/* التواصل الاجتماعي */}
          <div>
            <h3 className="text-lg font-bold mb-4">تابعنا</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="bg-gray-800 hover:bg-orange-600 transition-colors p-2 rounded-full">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-600 transition-colors p-2 rounded-full">
                <Twitter size={18} />
              </a>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 transition-colors px-5 py-2 rounded-md w-full">
              احجز تمرين تجريبي مجاني
            </button>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="text-center pt-4 border-t border-gray-800 text-sm text-gray-400">
          © {new Date().getFullYear()} جيم هيرو. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;