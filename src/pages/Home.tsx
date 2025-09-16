import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, User, Lightbulb, Library, Quote, ExternalLink } from 'lucide-react'

const Home: React.FC = () => {
  const features = [
    {
      title: '生平传记',
      description: '深入了解祁克果的成长经历、教育背景和重要人生事件',
      icon: User,
      href: '/biography',
      color: 'bg-blue-500'
    },
    {
      title: '哲学思想',
      description: '探索存在主义、焦虑、绝望和信仰等核心哲学概念',
      icon: Lightbulb,
      href: '/philosophy',
      color: 'bg-green-500'
    },
    {
      title: '主要著作',
      description: '研读《非此即彼》、《恐惧与战栗》等经典作品',
      icon: Library,
      href: '/works',
      color: 'bg-purple-500'
    },
    {
      title: '名言警句',
      description: '品味祁克果的深刻洞察和智慧箴言',
      icon: Quote,
      href: '/quotes',
      color: 'bg-orange-500'
    },
    {
      title: '思想影响',
      description: '了解祁克果对现代哲学、神学和文学的深远影响',
      icon: ExternalLink,
      href: '/influence',
      color: 'bg-red-500'
    },
    {
      title: '研究资源',
      description: '获取学术论文、推荐阅读和相关研究资料',
      icon: BookOpen,
      href: '/resources',
      color: 'bg-indigo-500'
    }
  ]

  const quotes = [
    {
      text: "生活只能向后理解，但必须向前生活。",
      source: "《日记》"
    },
    {
      text: "焦虑是自由的眩晕。",
      source: "《恐惧的概念》"
    },
    {
      text: "绝望是致死的疾病。",
      source: "《致死的疾病》"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              索伦·祁克果
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              丹麦哲学家 · 存在主义之父 · 现代神学先驱
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              探索这位19世纪丹麦哲学家的深刻思想，了解他如何通过独特的写作风格和哲学洞察，
              为现代存在主义哲学奠定了坚实基础，并深刻影响了后世的思想家、神学家和文学家。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/philosophy"
                className="btn-primary text-lg px-8 py-3 inline-flex items-center justify-center"
              >
                探索哲学思想
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/biography"
                className="btn-secondary text-lg px-8 py-3 inline-flex items-center justify-center"
              >
                了解生平
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              探索祁克果的世界
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              通过多个维度深入了解这位伟大哲学家的思想世界
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link
                  key={index}
                  to={feature.href}
                  className="group card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              经典名言
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              品味祁克果的深刻洞察
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <div key={index} className="card text-center">
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                  "{quote.text}"
                </blockquote>
                <cite className="text-sm text-gray-500 dark:text-gray-400">
                  — {quote.source}
                </cite>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/quotes"
              className="btn-primary inline-flex items-center"
            >
              查看更多名言
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 dark:bg-primary-700">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            开始您的哲学之旅
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            深入了解祁克果的思想，探索存在主义哲学的深刻内涵，
            让这位伟大哲学家的智慧指引您的人生思考。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/philosophy"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              探索哲学思想
            </Link>
            <Link
              to="/works"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              阅读主要著作
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
