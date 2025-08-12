import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('咨询信息提交成功，我们将尽快与您联系！');
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">联系我们</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            无论您有任何疑问或需求，欢迎随时联系我们，我们的专业顾问将为您提供一对一的咨询服务
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">提交咨询</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">姓名</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">公司名称</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">联系电话</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">电子邮箱</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">感兴趣的服务</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">请选择服务类型</option>
                    <option value="iso9001">ISO9001 质量管理体系认证</option>
                    <option value="ohsms">职业健康安全管理体系认证</option>
                    <option value="ems">环境管理体系认证</option>
                    <option value="multiple">多项认证服务</option>
                    <option value="other">其他咨询服务</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">咨询内容</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:bg-blue-500 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin mr-2"></i> 提交中...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane mr-2"></i> 提交咨询
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">联系方式</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <i className="fa-solid fa-phone text-blue-700 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">联系电话</h4>
                    <p className="text-gray-600">蔡女士</p>
                     <a href="tel:13609166046" className="text-blue-700 hover:underline font-medium">13609166046</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <i className="fa-solid fa-envelope text-blue-700 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">电子邮箱</h4>
                     <a href="mailto:313054741@qq.com" className="text-blue-700 hover:underline">313054741@qq.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <i className="fa-solid fa-map-marker-alt text-blue-700 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">公司地址</h4>
                    <p className="text-gray-600">陕西省西安市高新区唐延南路11号逸翠园i都会3号楼10339号</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <i className="fa-solid fa-clock text-blue-700 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">工作时间</h4>
                    <p className="text-gray-600">周一至周五: 9:00 - 18:00</p>
                     <p className="text-gray-600">周六周日: 全天在线</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Office Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Modern+office+reception+area+for+business+consulting+company&sign=585b6dcb17ca8a7fa80f6478baa27714" 
                alt="中威鼎信办公环境" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}