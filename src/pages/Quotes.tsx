import React, { useState } from 'react'
import { Search, Filter, Heart, Share2, Copy, Quote as QuoteIcon } from 'lucide-react'

const Quotes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [favorites, setFavorites] = useState<string[]>([])

  const categories = [
    { id: 'all', name: '全部', count: 0 },
    { id: 'existence', name: '存在', count: 0 },
    { id: 'anxiety', name: '焦虑', count: 0 },
    { id: 'faith', name: '信仰', count: 0 },
    { id: 'love', name: '爱情', count: 0 },
    { id: 'despair', name: '绝望', count: 0 },
    { id: 'freedom', name: '自由', count: 0 },
    { id: 'truth', name: '真理', count: 0 },
    { id: 'individuality', name: '个体性', count: 0 }
  ]

  const quotes = [
    {
      id: '1',
      text: '生活只能向后理解，但必须向前生活。',
      source: '《日记》',
      category: 'existence',
      year: '1843'
    },
    {
      id: '2',
      text: '焦虑是自由的眩晕。',
      source: '《恐惧的概念》',
      category: 'anxiety',
      year: '1844'
    },
    {
      id: '3',
      text: '绝望是致死的疾病。',
      source: '《致死的疾病》',
      category: 'despair',
      year: '1849'
    },
    {
      id: '4',
      text: '信仰是激情的悖论。',
      source: '《恐惧与战栗》',
      category: 'faith',
      year: '1843'
    },
    {
      id: '5',
      text: '真理即主观性。',
      source: '《哲学片段》',
      category: 'truth',
      year: '1844'
    },
    {
      id: '6',
      text: '选择是自由的，但选择之后就是必然。',
      source: '《非此即彼》',
      category: 'freedom',
      year: '1843'
    },
    {
      id: '7',
      text: '个体是真理的标准。',
      source: '《哲学片段》',
      category: 'individuality',
      year: '1844'
    },
    {
      id: '8',
      text: '婚姻是伦理阶段的最高表达。',
      source: '《非此即彼》',
      category: 'love',
      year: '1843'
    },
    {
      id: '9',
      text: '重复是记忆的敌人。',
      source: '《重复》',
      category: 'existence',
      year: '1843'
    },
    {
      id: '10',
      text: '只有通过信仰才能克服绝望。',
      source: '《致死的疾病》',
      category: 'faith',
      year: '1849'
    },
    {
      id: '11',
      text: '焦虑的对象是虚无。',
      source: '《恐惧的概念》',
      category: 'anxiety',
      year: '1844'
    },
    {
      id: '12',
      text: '真正的存在不是抽象的，而是具体的。',
      source: '《哲学片段》',
      category: 'existence',
      year: '1844'
    },
    {
      id: '13',
      text: '信仰不是理性的产物，而是激情的产物。',
      source: '《恐惧与战栗》',
      category: 'faith',
      year: '1843'
    },
    {
      id: '14',
      text: '绝望是不知道有自我。',
      source: '《致死的疾病》',
      category: 'despair',
      year: '1849'
    },
    {
      id: '15',
      text: '真正的学习不是获得知识，而是成为真理。',
      source: '《哲学片段》',
      category: 'truth',
      year: '1844'
    },
    {
      id: '16',
      text: '每个个体都必须为自己做出选择。',
      source: '《非此即彼》',
      category: 'individuality',
      year: '1843'
    },
    {
      id: '17',
      text: '焦虑是通往信仰的必经之路。',
      source: '《恐惧的概念》',
      category: 'anxiety',
      year: '1844'
    },
    {
      id: '18',
      text: '真正的重复不是简单的重复，而是新的创造。',
      source: '《重复》',
      category: 'existence',
      year: '1843'
    },
    {
      id: '19',
      text: '信仰是真理的激情。',
      source: '《哲学片段》',
      category: 'faith',
      year: '1844'
    },
    {
      id: '20',
      text: '只有通过接受悖论，个体才能获得真正的自由。',
      source: '《恐惧与战栗》',
      category: 'freedom',
      year: '1843'
    }
  ]

  // 更新分类计数
  categories.forEach(category => {
    if (category.id === 'all') {
      category.count = quotes.length
    } else {
      category.count = quotes.filter(quote => quote.category === category.id).length
    }
  })

  const filteredQuotes = quotes.filter(quote => {
    const matchesSearch = quote.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quote.source.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || quote.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFavorite = (quoteId: string) => {
    setFavorites(prev => 
      prev.includes(quoteId) 
        ? prev.filter(id => id !== quoteId)
        : [...prev, quoteId]
    )
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              祁克果名言警句
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              智慧箴言 · 哲学洞察 · 人生感悟
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              品味祁克果的深刻洞察和智慧箴言，感受这位伟大哲学家对人生、
              存在、信仰和真理的独特思考。
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="搜索名言..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Grid */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                找到 {filteredQuotes.length} 条名言
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {selectedCategory === 'all' ? '所有分类' : categories.find(c => c.id === selectedCategory)?.name}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredQuotes.map((quote) => (
                <div key={quote.id} className="card group hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <QuoteIcon className="w-8 h-8 text-primary-500 flex-shrink-0" />
                    <button
                      onClick={() => toggleFavorite(quote.id)}
                      className={`p-2 rounded-full transition-colors duration-200 ${
                        favorites.includes(quote.id)
                          ? 'text-red-500 bg-red-50 dark:bg-red-900/20'
                          : 'text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(quote.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-4 leading-relaxed">
                    "{quote.text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="font-medium">{quote.source}</span>
                    <span>{quote.year}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full">
                      {categories.find(c => c.id === quote.category)?.name}
                    </span>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => copyToClipboard(quote.text)}
                        className="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        title="复制"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        title="分享"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredQuotes.length === 0 && (
              <div className="text-center py-12">
                <QuoteIcon className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  没有找到相关名言
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  尝试调整搜索条件或选择其他分类
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Favorites Section */}
      {favorites.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                我的收藏 ({favorites.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {favorites.map(quoteId => {
                  const quote = quotes.find(q => q.id === quoteId)
                  if (!quote) return null
                  
                  return (
                    <div key={quote.id} className="card">
                      <div className="flex items-start justify-between mb-4">
                        <QuoteIcon className="w-6 h-6 text-primary-500 flex-shrink-0" />
                        <button
                          onClick={() => toggleFavorite(quote.id)}
                          className="p-1 text-red-500 hover:text-red-600 transition-colors duration-200"
                        >
                          <Heart className="w-4 h-4 fill-current" />
                        </button>
                      </div>
                      
                      <blockquote className="text-gray-700 dark:text-gray-300 italic mb-3">
                        "{quote.text}"
                      </blockquote>
                      
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {quote.source} · {quote.year}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Quotes
