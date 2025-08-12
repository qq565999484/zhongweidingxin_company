import { motion } from 'framer-motion';

// Service data
const services = [
  {
    id: 1,
    title: "ISO9001 质量管理体系认证",
    description: "帮助企业建立、实施和维护符合ISO9001标准的质量管理体系，提升产品和服务质量，增强客户满意度和市场竞争力。",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=ISO9001+quality+management+system+certification+documentation&sign=59277dce315160db4724d0e5cfd7f33a",
    features: [
      "质量管理体系建立与优化",
      "内部审核员培训",
      "认证前准备与指导",
      "持续改进方案制定"
    ]
  },
  {
    id: 2,
    title: "职业健康安全管理体系认证",
    description: "协助企业构建符合国家标准的职业健康安全管理体系，识别和控制职业健康安全风险，保障员工健康与安全，降低事故发生率。",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Occupational+health+and+safety+management+system+workplace&sign=b76d52929389885abcb0305c7456bb59",
    features: [
      "危险源辨识与风险评估",
      "安全操作规程制定",
      "应急预案与响应机制",
      "员工安全意识培训"
    ]
  },
  {
    id: 3,
    title: "环境管理体系认证",
    description: "指导企业建立环境管理体系，识别环境因素，控制环境影响，实现可持续发展目标，提升企业环境责任形象。",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Environmental+management+system+green+certification&sign=a1e0b88c284e8ad9c52d696965082195",
    features: [
      "环境因素识别与评价",
      "环境目标与指标设定",
      "节能减排方案实施",
      "环境绩效监测与改进"
    ]
  }
];

// Stats data
const stats = [
  { value: "98%", label: "客户通过率" },
  { value: "1000+", label: "成功案例" },
  { value: "15+", label: "行业经验" },
  { value: "96%", label: "客户满意度" }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">专业认证咨询服务</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            我们提供全方位的管理体系认证咨询服务，帮助企业建立科学、规范的管理体系，提升核心竞争力，实现可持续发展。
          </p>
        </div>
        
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md text-center transform transition-transform hover:scale-105"
            >
              <div className="text-4xl font-bold text-blue-700 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-700 mb-2">服务内容：</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fa-solid fa-check text-blue-600 mt-1 mr-2"></i>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href="#contact" 
                  className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg transition-colors"
                >
                  咨询详情 <i className="fa-solid fa-arrow-right ml-1"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}