import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">关于中威鼎信</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              陕西中威鼎信企业咨询管理有限公司是一家专业的企业管理体系认证咨询机构，专注于为各类企业提供全方位的管理体系认证解决方案。
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              公司拥有一支经验丰富、专业素质高的咨询师团队，具备深厚的行业知识和丰富的实践经验。我们始终坚持以客户需求为导向，为企业提供定制化的咨询服务，帮助企业提升管理水平，增强市场竞争力。
            </p>
            
            {/* Core Advantages */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">我们的核心优势</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <i className="fa-solid fa-user-tie text-blue-700"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">专业团队</h4>
                    <p className="text-gray-600">拥有多名资深咨询师，平均行业经验10年以上</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <i className="fa-solid fa-check-circle text-blue-700"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">高通过率</h4>
                    <p className="text-gray-600">认证通过率达98%以上，远超行业平均水平</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <i className="fa-solid fa-clock text-blue-700"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">高效服务</h4>
                    <p className="text-gray-600">一对一专属顾问，快速响应客户需求</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <i className="fa-solid fa-hand-holding-heart text-blue-700"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">持续支持</h4>
                    <p className="text-gray-600">认证后提供持续的跟踪服务和体系优化建议</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* About Image & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Professional+business+consulting+team+meeting+in+office&sign=f65d4985a42b5c1798e04791f9682083" 
                alt="中威鼎信专业咨询团队" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Certification Badges */}
            <div className="grid grid-cols-2 gap-4 -mt-12 ml-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <div className="text-center p-3 border border-gray-200 rounded-lg">
                <i className="fa-solid fa-certificate text-3xl text-blue-600 mb-2"></i>
                <p className="text-sm font-medium text-gray-700">权威认证机构</p>
              </div>
              <div className="text-center p-3 border border-gray-200 rounded-lg">
                <i className="fa-solid fa-shield text-3xl text-blue-600 mb-2"></i>
                <p className="text-sm font-medium text-gray-700">专业资质保障</p>
              </div>
              <div className="text-center p-3 border border-gray-200 rounded-lg">
                <i className="fa-solid fa-users text-3xl text-blue-600 mb-2"></i>
                <p className="text-sm font-medium text-gray-700">资深顾问团队</p>
              </div>
              <div className="text-center p-3 border border-gray-200 rounded-lg">
                <i className="fa-solid fa-award text-3xl text-blue-600 mb-2"></i>
                <p className="text-sm font-medium text-gray-700">行业标杆企业</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}