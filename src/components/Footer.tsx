export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <img 
                src="https://lf-code-agent.coze.cn/obj/x-ai-cn/269511742210/attachment/微信图片_20250812171019_45_20250812171223.png" 
                alt="中威鼎信logo" 
                className="h-8 w-auto mr-2"
              />
             陕西中威鼎信企业管理咨询有限公司
            </h3>
            <p className="text-blue-200 mb-6">
              专业的企业管理体系认证咨询机构，助力企业提升管理水平，获取国际认可。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <i className="fa-brands fa-weixin text-white"></i>
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <i className="fa-brands fa-weibo text-white"></i>
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <i className="fa-solid fa-envelope text-white"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">快速链接</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">首页</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">服务项目</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">服务项目</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">ISO9001质量管理体系</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">职业健康安全管理体系</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">环境管理体系认证</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">企业管理咨询服务</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa-solid fa-phone text-blue-300 mt-1 mr-3"></i>
                 <span className="text-blue-200">蔡女士: 13609166046</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-envelope text-blue-300 mt-1 mr-3"></i>
                <span className="text-blue-200">313054741@qq.com</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-map-marker-alt text-blue-300 mt-1 mr-3"></i>
                <span className="text-blue-200">陕西省西安市高新区唐延南路11号逸翠园i都会3号楼10339号</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-blue-800 pt-8 mt-8 text-center text-blue-300 text-sm">
          <p>© {currentYear} 陕西中威鼎信企业咨询管理有限公司 版权所有</p>
          <p className="mt-2">陕ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  );
}