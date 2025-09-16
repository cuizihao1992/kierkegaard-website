import React from 'react'
import { Calendar, GraduationCap, Heart, BookOpen } from 'lucide-react'

const Biography: React.FC = () => {
  const timeline = [
    {
      year: '1813',
      title: '出生',
      description: '5月5日出生于哥本哈根，父亲是富商迈克尔·彼得森·祁克果',
      icon: Calendar
    },
    {
      year: '1821-1830',
      title: '早期教育',
      description: '在哥本哈根接受私人教育，展现出卓越的文学和哲学天赋',
      icon: GraduationCap
    },
    {
      year: '1830',
      title: '大学入学',
      description: '进入哥本哈根大学学习神学，但主要兴趣转向哲学和文学',
      icon: BookOpen
    },
    {
      year: '1837-1841',
      title: '与蕾吉娜的恋情',
      description: '与蕾吉娜·奥尔森订婚，但最终解除婚约，这段经历深刻影响了他的思想',
      icon: Heart
    },
    {
      year: '1841',
      title: '博士论文',
      description: '完成博士论文《论反讽概念》，获得神学博士学位',
      icon: GraduationCap
    },
    {
      year: '1843-1846',
      title: '创作高峰期',
      description: '出版《非此即彼》、《恐惧与战栗》、《重复》等重要作品',
      icon: BookOpen
    },
    {
      year: '1855',
      title: '逝世',
      description: '11月11日在哥本哈根逝世，年仅42岁',
      icon: Calendar
    }
  ]

  const family = [
    {
      name: '迈克尔·彼得森·祁克果',
      relation: '父亲',
      description: '富商，虔诚的基督徒，对祁克果的宗教思想有重要影响'
    },
    {
      name: '安妮·索菲·隆德',
      relation: '母亲',
      description: '家庭主妇，在祁克果幼年时去世'
    },
    {
      name: '彼得·克里斯蒂安·祁克果',
      relation: '哥哥',
      description: '神学家，后来成为主教'
    },
    {
      name: '蕾吉娜·奥尔森',
      relation: '未婚妻',
      description: '与祁克果订婚但最终分手，成为他作品中重要的灵感来源'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              索伦·祁克果生平
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              1813-1855 · 丹麦哲学家 · 存在主义之父
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              探索这位伟大哲学家的成长历程，了解他的家庭背景、教育经历、
              情感生活和创作历程，以及这些经历如何塑造了他的哲学思想。
            </p>
          </div>
        </div>
      </section>

      {/* Early Life */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              早期生活
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                索伦·奥比·祁克果于1813年5月5日出生于丹麦哥本哈根的一个富裕家庭。
                他的父亲迈克尔·彼得森·祁克果是一位成功的商人，也是一位虔诚的基督徒，
                这种宗教背景对祁克果后来的神学思想产生了深远影响。
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                祁克果在家中排行第七，也是最小的孩子。他的童年并不快乐，
                父亲严厉的宗教教育给他留下了深刻的心理创伤。尽管如此，
                祁克果从小就展现出卓越的文学和哲学天赋，对语言和思想有着敏锐的洞察力。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              人生时间线
            </h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-primary-200 dark:bg-primary-700"></div>
              {timeline.map((event, index) => {
                const Icon = event.icon
                return (
                  <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center z-10 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                      <div className="card">
                        <div className="flex items-center mb-2">
                          <span className="text-2xl font-bold text-primary-600 dark:text-primary-400 mr-4">
                            {event.year}
                          </span>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {event.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Family */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              家庭背景
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {family.map((member, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {member.relation}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              思想遗产
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                尽管祁克果的生命只有短短的42年，但他留下的思想财富却影响深远。
                他的存在主义哲学为后来的哲学家如海德格尔、萨特、加缪等提供了重要的思想基础。
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                祁克果的写作风格独特，常常使用假名发表作品，通过不同的"作者"身份
                来探讨不同的哲学观点。这种写作方式不仅体现了他对个体性的重视，
                也为现代文学创作提供了新的可能性。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Biography
