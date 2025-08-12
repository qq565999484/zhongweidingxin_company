import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Business+certification+consulting+service+professional+office+environment&sign=9ab7f462199492cb114991c9f935139a')] bg-cover bg-center opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600 rounded-full filter blur-3xl opacity-30 transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              专业企业管理体系<br />
              <span className="text-blue-300">认证咨询服务</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-8"
          >
            陕西中威鼎信企业咨询管理有限公司<br />
            助力企业提升管理水平，获取国际认可
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
            <a 
              href="#contact" 
              className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <i className="fa-solid fa-handshake mr-2"></i>咨询服务
            </a>
            <a 
              href="#services" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all"
            >
              <i className="fa-solid fa-list-checks mr-2"></i>了解服务项目
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12"
          >
            <div className="flex items-center">
              <i className="fa-solid fa-certificate text-blue-300 text-2xl mr-3"></i>
              <span className="text-lg">专业认证咨询</span>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-award text-blue-300 text-2xl mr-3"></i>
              <span className="text-lg">权威资质认可</span>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-users text-blue-300 text-2xl mr-3"></i>
              <span className="text-lg">专家团队服务</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <i className="fa-solid fa-chevron-down text-white/70"></i>
      </motion.div>
    </section>
  );
}