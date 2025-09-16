import React, { useState } from 'react'
import { BookOpen, ExternalLink, Download, Star, Calendar, User, Globe, FileText, Video, Headphones } from 'lucide-react'

const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: '全部', icon: BookOpen },
    { id: 'books', name: '推荐书籍', icon: BookOpen },
    { id: 'papers', name: '学术论文', icon: FileText },
    { id: 'videos', name: '视频讲座', icon: Video },
    { id: 'audio', name: '音频资源', icon: Headphones },
    { id: 'websites', name: '相关网站', icon: Globe }
  ]

  const resources = [
    {
      id: '1',
      title: '《祁克果传》',
      author: '沃尔特·劳瑞',
      type: 'books',
      category: '传记',
      description: '最权威的祁克果传记之一，详细记录了祁克果的生平和思想发展历程。',
      rating: 5,
      year: '2018',
      publisher: '商务印书馆',
      isbn: '9787100156789',
      language: '中文',
      format: '纸质书/电子书',
      availability: '可购买',
      link: 'https://example.com',
      tags: ['传记', '生平', '思想发展']
    },
    {
      id: '2',
      title: '《存在主义简史》',
      author: '托马斯·R·弗林',
      type: 'books',
      category: '哲学史',
      description: '全面介绍存在主义哲学的发展历程，包括祁克果的重要地位和影响。',
      rating: 4,
      year: '2019',
      publisher: '译林出版社',
      isbn: '9787544771234',
      language: '中文',
      format: '纸质书/电子书',
      availability: '可购买',
      link: 'https://example.com',
      tags: ['哲学史', '存在主义', '思想史']
    },
    {
      id: '3',
      title: '祁克果的焦虑理论及其现代意义',
      author: '张教授',
      type: 'papers',
      category: '学术论文',
      description: '深入分析祁克果的焦虑理论，探讨其在现代心理学和哲学中的意义。',
      rating: 4,
      year: '2020',
      publisher: '《哲学研究》',
      language: '中文',
      format: 'PDF',
      availability: '免费下载',
      link: 'https://example.com',
      tags: ['焦虑理论', '现代意义', '心理学']
    },
    {
      id: '4',
      title: '祁克果与存在主义哲学',
      author: '李教授',
      type: 'papers',
      category: '学术论文',
      description: '探讨祁克果对存在主义哲学的重要贡献和影响。',
      rating: 5,
      year: '2021',
      publisher: '《世界哲学》',
      language: '中文',
      format: 'PDF',
      availability: '免费下载',
      link: 'https://example.com',
      tags: ['存在主义', '哲学贡献', '思想影响']
    },
    {
      id: '5',
      title: '祁克果哲学思想讲座',
      author: '王教授',
      type: 'videos',
      category: '视频讲座',
      description: '系统介绍祁克果的哲学思想，适合初学者和进阶学习者。',
      rating: 4,
      duration: '120分钟',
      year: '2022',
      language: '中文',
      format: '在线视频',
      availability: '免费观看',
      link: 'https://example.com',
      tags: ['哲学思想', '讲座', '教学']
    },
    {
      id: '6',
      title: '《恐惧与战栗》解读',
      author: '陈教授',
      type: 'videos',
      category: '视频讲座',
      description: '深入解读祁克果的经典著作《恐惧与战栗》，分析其核心思想。',
      rating: 5,
      duration: '90分钟',
      year: '2021',
      language: '中文',
      format: '在线视频',
      availability: '免费观看',
      link: 'https://example.com',
      tags: ['恐惧与战栗', '经典解读', '核心思想']
    },
    {
      id: '7',
      title: '祁克果哲学音频课程',
      author: '刘教授',
      type: 'audio',
      category: '音频课程',
      description: '完整的祁克果哲学音频课程，适合通勤时学习。',
      rating: 4,
      duration: '10小时',
      year: '2023',
      language: '中文',
      format: 'MP3',
      availability: '付费下载',
      link: 'https://example.com',
      tags: ['音频课程', '完整学习', '通勤学习']
    },
    {
      id: '8',
      title: '祁克果名言集',
      author: '编辑组',
      type: 'audio',
      category: '音频资源',
      description: '精选祁克果经典名言的音频朗读，配有背景音乐。',
      rating: 4,
      duration: '60分钟',
      year: '2022',
      language: '中文',
      format: 'MP3',
      availability: '免费下载',
      link: 'https://example.com',
      tags: ['名言集', '音频朗读', '经典语录']
    },
    {
      id: '9',
      title: '祁克果研究中心',
      author: '哥本哈根大学',
      type: 'websites',
      category: '学术网站',
      description: '哥本哈根大学祁克果研究中心官方网站，提供最新研究成果和学术资源。',
      rating: 5,
      year: '持续更新',
      language: '英文/丹麦文',
      format: '网站',
      availability: '免费访问',
      link: 'https://example.com',
      tags: ['研究中心', '学术资源', '最新研究']
    },
    {
      id: '10',
      title: '祁克果数字档案馆',
      author: '丹麦皇家图书馆',
      type: 'websites',
      category: '数字档案',
      description: '祁克果手稿、信件和原始文献的数字化档案，支持在线浏览和下载。',
      rating: 5,
      year: '持续更新',
      language: '丹麦文/英文',
      format: '网站',
      availability: '免费访问',
      link: 'https://example.com',
      tags: ['数字档案', '原始文献', '手稿']
    }
  ]

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === selectedCategory)

  const getCategoryIcon = (type: string) => {
    const category = categories.find(cat => cat.id === type)
    return category ? category.icon : BookOpen
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              研究资源
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              学术资料 · 推荐阅读 · 学习资源 · 研究工具
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              收集整理关于祁克果的各类研究资源，包括推荐书籍、学术论文、
              视频讲座、音频资源和相关网站，为您的学习和研究提供全面支持。
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              资源分类
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon
                const isSelected = selectedCategory === category.id
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isSelected
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{category.name}</span>
                    <span className="text-sm opacity-75">
                      ({selectedCategory === 'all' ? resources.length : resources.filter(r => r.type === category.id).length})
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedCategory === 'all' ? '所有资源' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                找到 {filteredResources.length} 个相关资源
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => {
                const Icon = getCategoryIcon(resource.type)
                return (
                  <div key={resource.id} className="card group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="flex items-center space-x-1">
                        {renderStars(resource.rating)}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {resource.title}
                    </h3>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <User className="w-4 h-4" />
                      <span>{resource.author}</span>
                      <span>•</span>
                      <Calendar className="w-4 h-4" />
                      <span>{resource.year}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {resource.availability}
                      </div>
                      <div className="flex items-center space-x-2">
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm px-4 py-2 flex items-center space-x-1"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>访问</span>
                        </a>
                        {resource.format === 'PDF' && (
                          <button className="btn-secondary text-sm px-4 py-2 flex items-center space-x-1">
                            <Download className="w-4 h-4" />
                            <span>下载</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  暂无相关资源
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  请尝试选择其他分类或稍后再来查看
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Study Guide */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              学习指南
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  初学者路径
                </h3>
                <ol className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">1</span>
                    <span>阅读祁克果传记，了解其生平背景</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">2</span>
                    <span>观看哲学思想讲座视频</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">3</span>
                    <span>阅读《非此即彼》等入门著作</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">4</span>
                    <span>参考学术论文深化理解</span>
                  </li>
                </ol>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  进阶研究路径
                </h3>
                <ol className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">1</span>
                    <span>研读祁克果全集和手稿</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">2</span>
                    <span>阅读相关学术专著和论文集</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">3</span>
                    <span>关注国际学术会议和最新研究</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-medium">4</span>
                    <span>参与学术讨论和论文写作</span>
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

export default Resources
