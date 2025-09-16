import React from 'react'
import { ExternalLink, BookOpen, Users, Globe, Award, ArrowRight } from 'lucide-react'

const Influence: React.FC = () => {
  const philosophicalInfluence = [
    {
      name: '马丁·海德格尔',
      period: '1889-1976',
      country: '德国',
      contribution: '存在与时间',
      description: '海德格尔深受祁克果影响，在《存在与时间》中发展了存在主义哲学，强调此在（Dasein）的存在论分析。',
      keyConcepts: ['此在', '存在论', '时间性', '本真性']
    },
    {
      name: '让-保罗·萨特',
      period: '1905-1980',
      country: '法国',
      contribution: '存在与虚无',
      description: '萨特继承并发展了祁克果的存在主义思想，强调存在先于本质，个体必须为自己的选择负责。',
      keyConcepts: ['存在先于本质', '自由选择', '责任', '荒谬']
    },
    {
      name: '阿尔贝·加缪',
      period: '1913-1960',
      country: '法国',
      contribution: '西西弗神话',
      description: '加缪深受祁克果关于荒谬和绝望思想的影响，在《西西弗神话》中探讨了如何在荒谬中生活。',
      keyConcepts: ['荒谬', '反抗', '西西弗', '自由']
    },
    {
      name: '卡尔·雅斯贝尔斯',
      period: '1883-1969',
      country: '德国',
      contribution: '存在哲学',
      description: '雅斯贝尔斯发展了祁克果的个体性概念，强调存在的超越性和哲学信仰的重要性。',
      keyConcepts: ['存在哲学', '超越', '哲学信仰', '个体性']
    }
  ]

  const theologicalInfluence = [
    {
      name: '卡尔·巴特',
      period: '1886-1968',
      country: '瑞士',
      contribution: '辩证神学',
      description: '巴特深受祁克果神学思想影响，强调上帝与人的绝对差异，发展了辩证神学。',
      keyConcepts: ['辩证神学', '上帝的他性', '启示', '信仰']
    },
    {
      name: '鲁道夫·布尔特曼',
      period: '1884-1976',
      country: '德国',
      contribution: '去神话化',
      description: '布尔特曼运用祁克果的存在主义方法，提出了新约的去神话化解释。',
      keyConcepts: ['去神话化', '存在主义解释', '宣道', '信仰']
    },
    {
      name: '保罗·蒂利希',
      period: '1886-1965',
      country: '美国',
      contribution: '系统神学',
      description: '蒂利希将祁克果的存在主义思想与系统神学结合，探讨了存在的勇气和终极关怀。',
      keyConcepts: ['系统神学', '存在的勇气', '终极关怀', '文化神学']
    }
  ]

  const literaryInfluence = [
    {
      name: '弗朗茨·卡夫卡',
      period: '1883-1924',
      country: '捷克',
      contribution: '现代主义文学',
      description: '卡夫卡深受祁克果关于焦虑、绝望和个体性思想的影响，在作品中探讨了现代人的存在困境。',
      keyWorks: ['《变形记》', '《审判》', '《城堡》']
    },
    {
      name: '费奥多尔·陀思妥耶夫斯基',
      period: '1821-1881',
      country: '俄国',
      contribution: '心理现实主义',
      description: '陀思妥耶夫斯基在祁克果思想影响下，深入探讨了人的内心世界和道德选择。',
      keyWorks: ['《罪与罚》', '《卡拉马佐夫兄弟》', '《地下室手记》']
    },
    {
      name: '塞缪尔·贝克特',
      period: '1906-1989',
      country: '爱尔兰',
      contribution: '荒诞派戏剧',
      description: '贝克特深受祁克果关于荒谬和绝望思想的影响，在戏剧中表现了现代人的存在困境。',
      keyWorks: ['《等待戈多》', '《终局》', '《快乐的日子》']
    }
  ]

  const modernImpact = [
    {
      category: '心理学',
      description: '祁克果对焦虑、绝望和个体性的分析深刻影响了现代心理学，特别是存在主义心理学和心理治疗。',
      keyAreas: ['存在主义心理学', '焦虑理论', '个体治疗', '意义治疗']
    },
    {
      category: '教育学',
      description: '祁克果强调个体性和主观真理的思想影响了现代教育理念，强调学生的个体发展和内在体验。',
      keyAreas: ['个体化教育', '主观学习', '存在主义教育', '批判性思维']
    },
    {
      category: '政治哲学',
      description: '祁克果对个体性和选择的强调影响了现代政治哲学，特别是关于自由、责任和民主的讨论。',
      keyAreas: ['个体自由', '政治责任', '民主理论', '公民参与']
    },
    {
      category: '文化研究',
      description: '祁克果的思想为现代文化研究提供了重要的理论资源，特别是在探讨现代性和后现代性方面。',
      keyAreas: ['现代性批判', '后现代理论', '文化认同', '价值相对主义']
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              祁克果的思想影响
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              哲学先驱 · 神学革新 · 文学灵感 · 现代影响
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              探索祁克果如何深刻影响了现代哲学、神学、文学和思想发展，
              了解他的思想如何在不同的领域和时代中持续产生深远影响。
            </p>
          </div>
        </div>
      </section>

      {/* Philosophical Influence */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                对现代哲学的影响
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                祁克果为存在主义哲学奠定了重要基础
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {philosophicalInfluence.map((philosopher, index) => (
                <div key={index} className="card">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {philosopher.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span>{philosopher.period}</span>
                        <span>•</span>
                        <span>{philosopher.country}</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                    {philosopher.contribution}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {philosopher.description}
                  </p>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      核心概念：
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {philosopher.keyConcepts.map((concept, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Theological Influence */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                对现代神学的影响
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                祁克果的神学思想深刻影响了20世纪神学发展
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {theologicalInfluence.map((theologian, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {theologian.name}
                  </h3>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {theologian.period} · {theologian.country}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                    {theologian.contribution}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {theologian.description}
                  </p>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      核心概念：
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {theologian.keyConcepts.map((concept, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded"
                        >
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Literary Influence */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                对现代文学的影响
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                祁克果的思想为现代文学提供了重要的主题和灵感
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {literaryInfluence.map((writer, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {writer.name}
                  </h3>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {writer.period} · {writer.country}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                    {writer.contribution}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {writer.description}
                  </p>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      代表作品：
                    </h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {writer.keyWorks.map((work, idx) => (
                        <li key={idx} className="flex items-center">
                          <ArrowRight className="w-3 h-3 text-primary-500 mr-2" />
                          {work}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Impact */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                对现代社会的持续影响
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                祁克果的思想在当代各个领域仍然具有重要影响
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modernImpact.map((impact, index) => (
                <div key={index} className="card">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                      <Globe className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {impact.category}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {impact.description}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      主要领域：
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {impact.keyAreas.map((area, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Summary */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              思想遗产的永恒价值
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                祁克果的思想之所以能够产生如此深远和持久的影响，在于他敏锐地捕捉到了现代人面临的根本问题：
                个体性的丧失、存在的焦虑、意义的缺失、信仰的危机。这些问题在今天仍然具有重要的现实意义。
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                他的思想不仅为哲学、神学、文学等学科提供了重要的理论资源，也为现代人理解自身的存在、
                面对生活的挑战、寻找生命的意义提供了深刻的洞察和指导。
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                祁克果的影响远未结束，他的思想将继续在未来的时代中发挥重要作用，
                为人类的精神探索和存在思考提供宝贵的智慧资源。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Influence
