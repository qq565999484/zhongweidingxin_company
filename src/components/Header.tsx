import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Company Logo/Name */}
           <a href="/" className="flex items-center space-x-3">
            <img 
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/269511742210/attachment/微信图片_20250812171019_45_20250812171223.png" 
              alt="中威鼎信logo" 
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-blue-900 hidden md:inline">
              陕西中威鼎信企业咨询管理有限公司
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-blue-900 hover:text-blue-600 font-medium transition-colors">首页</a>
            <a href="#services" className="text-blue-900 hover:text-blue-600 font-medium transition-colors">服务项目</a>
            <a href="#about" className="text-blue-900 hover:text-blue-600 font-medium transition-colors">关于我们</a>
            <a href="#contact" className="text-blue-900 hover:text-blue-600 font-medium transition-colors">联系我们</a>
            <a 
              href="tel:13669266607" 
              className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg font-medium transition-all transform hover:scale-105"
            >
              <i className="fa-solid fa-phone mr-2"></i>咨询热线
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-blue-900 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-white rounded-b-lg shadow-lg">
            <a href="#" className="block px-4 py-2 text-blue-900 hover:bg-blue-50 rounded">首页</a>
            <a href="#services" className="block px-4 py-2 text-blue-900 hover:bg-blue-50 rounded">服务项目</a>
            <a href="#about" className="block px-4 py-2 text-blue-900 hover:bg-blue-50 rounded">关于我们</a>
            <a href="#contact" className="block px-4 py-2 text-blue-900 hover:bg-blue-50 rounded">联系我们</a>
            <a 
              href="tel:13669266607" 
              className="block text-center bg-blue-700 text-white px-5 py-2 rounded-lg font-medium mt-2"
            >
              <i className="fa-solid fa-phone mr-2"></i>13669266607
            </a>
          </div>
        )}
      </div>
    </header>
  );
}