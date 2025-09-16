import React, { useState } from 'react'
import { BookOpen, Calendar, Eye, Download, Star } from 'lucide-react'

const Works: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<string | null>(null)

  const works = [
    {
      id: 'either-or',
      title: '非此即彼',
      originalTitle: 'Enten-Eller',
      year: '1843',
      pseudonym: '维克多·埃雷米塔',
      description: '祁克果的成名作，通过审美者和伦理者的对话，探讨了人生的两种基本态度。',
      summary: '这部作品以对话的形式展现了两种截然不同的人生态度：审美阶段和伦理阶段。审美者追求感官享受和即时满足，而伦理者则强调道德责任和义务。作品通过这两种态度的对比，探讨了个体选择的重要性和人生的意义。',
      keyThemes: ['审美阶段', '伦理阶段', '个体选择', '婚姻与责任', '人生意义'],
      quotes: [
        '生活只能向后理解，但必须向前生活。',
        '选择是自由的，但选择之后就是必然。',
        '婚姻是伦理阶段的最高表达。'
      ]
    },
    {
      id: 'fear-trembling',
      title: '恐惧与战栗',
      originalTitle: 'Frygt og Bæven',
      year: '1843',
      pseudonym: '约翰尼斯·德·西伦西奥',
      description: '以亚伯拉罕献祭以撒的故事为背景，深入探讨了信仰的本质和悖论。',
      summary: '这部作品通过分析《圣经》中亚伯拉罕献祭以撒的故事，深入探讨了信仰的本质。祁克果认为，真正的信仰不是理性的产物，而是"激情的悖论"，是对荒谬的接受。亚伯拉罕的行为超越了伦理的普遍性，进入了个体与上帝的绝对关系。',
      keyThemes: ['信仰的悖论', '个体与普遍性', '宗教阶段', '荒谬与信仰', '亚伯拉罕'],
      quotes: [
        '信仰是激情的悖论。',
        '亚伯拉罕的行为超越了伦理的普遍性。',
        '信仰不是理性的产物，而是激情的产物。'
      ]
    },
    {
      id: 'sickness-unto-death',
      title: '致死的疾病',
      originalTitle: 'Sygdommen til Døden',
      year: '1849',
      pseudonym: '安提-克里马库斯',
      description: '深入分析了绝望的本质，认为绝望是"致死的疾病"，只有信仰才能治愈。',
      summary: '这部作品深入分析了绝望的本质和形式。祁克果认为，绝望不是肉体的疾病，而是精神的疾病，是"致死的疾病"。绝望有三种形式：不知道有自我、不想成为自我、想成为别的自我。只有通过信仰，个体才能克服绝望，获得真正的自我。',
      keyThemes: ['绝望的本质', '自我与绝望', '信仰的治愈', '精神疾病', '自我实现'],
      quotes: [
        '绝望是致死的疾病。',
        '绝望是不知道有自我。',
        '只有通过信仰才能克服绝望。'
      ]
    },
    {
      id: 'philosophical-fragments',
      title: '哲学片段',
      originalTitle: 'Philosophiske Smuler',
      year: '1844',
      pseudonym: '约翰尼斯·克里马库斯',
      description: '探讨了真理与学习的关系，提出了"真理即主观性"的重要命题。',
      summary: '这部作品探讨了真理的本质和获得真理的方式。祁克果区分了苏格拉底式的学习和基督教式的学习，认为真正的真理不是客观的、普遍的，而是主观的、个体的。真理必须通过个体的内在体验和选择才能获得，这就是"真理即主观性"的含义。',
      keyThemes: ['真理的本质', '主观真理', '苏格拉底与基督', '学习与信仰', '个体性'],
      quotes: [
        '真理即主观性。',
        '真正的学习不是获得知识，而是成为真理。',
        '信仰是真理的激情。'
      ]
    },
    {
      id: 'concept-anxiety',
      title: '焦虑的概念',
      originalTitle: 'Begrebet Angest',
      year: '1844',
      pseudonym: '维吉利乌斯·豪夫尼恩西斯',
      description: '深入分析了焦虑的本质，认为焦虑是"自由的眩晕"，是自由意识觉醒的标志。',
      summary: '这部作品深入分析了焦虑的本质和意义。祁克果认为，焦虑不是恐惧，因为恐惧有具体的对象，而焦虑的对象是虚无。焦虑是"自由的眩晕"，是当人面对无限可能性时的感受，是自由意识觉醒的标志。焦虑是通往信仰的必经之路。',
      keyThemes: ['焦虑的本质', '自由与焦虑', '虚无与可能性', '信仰之路', '个体觉醒'],
      quotes: [
        '焦虑是自由的眩晕。',
        '焦虑的对象是虚无。',
        '焦虑是通往信仰的必经之路。'
      ]
    },
    {
      id: 'repetition',
      title: '重复',
      originalTitle: 'Gjentagelsen',
      year: '1843',
      pseudonym: '康斯坦丁·康斯坦丁努斯',
      description: '探讨了重复的概念，认为真正的重复不是简单的重复，而是新的创造。',
      summary: '这部作品探讨了重复的概念和意义。祁克果认为，真正的重复不是简单的重复，而是新的创造。重复是记忆的敌人，是希望的实现。通过重复，个体能够超越时间的限制，获得永恒的意义。重复是信仰的体现，是对未来的肯定。',
      keyThemes: ['重复的概念', '记忆与希望', '时间与永恒', '信仰的体现', '创造与重复'],
      quotes: [
        '重复是记忆的敌人。',
        '重复是希望的实现。',
        '通过重复，个体获得永恒的意义。'
      ]
    }
  ]

  const selectedWorkData = works.find(work => work.id === selectedWork)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              祁克果的主要著作
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              哲学经典 · 存在主义奠基 · 思想宝库
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              探索祁克果的经典哲学著作，了解他如何通过独特的写作风格和深刻的哲学洞察，
              为现代存在主义哲学奠定了坚实基础。
            </p>
          </div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              重要作品概览
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {works.map((work) => (
                <div
                  key={work.id}
                  className="card cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => setSelectedWork(work.id)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{work.year}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {work.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {work.originalTitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {work.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                      {work.pseudonym}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">查看详情</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Detail */}
      {selectedWorkData && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="card">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedWorkData.title}
                  </h2>
                  <button
                    onClick={() => setSelectedWork(null)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      基本信息
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li><strong>原文标题：</strong>{selectedWorkData.originalTitle}</li>
                      <li><strong>出版年份：</strong>{selectedWorkData.year}</li>
                      <li><strong>署名：</strong>{selectedWorkData.pseudonym}</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      核心主题
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedWorkData.keyThemes.map((theme, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    作品概述
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedWorkData.summary}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    经典语录
                  </h4>
                  <div className="space-y-4">
                    {selectedWorkData.quotes.map((quote, index) => (
                      <blockquote
                        key={index}
                        className="border-l-4 border-primary-500 pl-4 italic text-gray-700 dark:text-gray-300"
                      >
                        "{quote}"
                      </blockquote>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4">
                    <button className="btn-primary flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>在线阅读</span>
                    </button>
                    <button className="btn-secondary flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>下载PDF</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Star className="w-4 h-4" />
                    <span>经典作品</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Reading Guide */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              阅读指南
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  初学者推荐
                </h3>
                <ol className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">1</span>
                    <span>《非此即彼》- 了解祁克果的基本思想</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">2</span>
                    <span>《恐惧与战栗》- 深入理解信仰概念</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">3</span>
                    <span>《焦虑的概念》- 掌握焦虑理论</span>
                  </li>
                </ol>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  进阶阅读
                </h3>
                <ol className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">1</span>
                    <span>《致死的疾病》- 理解绝望理论</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">2</span>
                    <span>《哲学片段》- 掌握真理理论</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">3</span>
                    <span>《重复》- 理解时间与永恒</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Works
