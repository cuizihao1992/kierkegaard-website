import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Lightbulb, Heart, Brain, Eye, Shield, Zap } from 'lucide-react'

const Philosophy: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const concepts = [
    {
      id: 'existence',
      title: '存在主义基础',
      icon: Lightbulb,
      description: '祁克果被认为是存在主义哲学的奠基人之一，他强调个体存在的独特性和不可替代性。',
      content: `
        <p>祁克果的存在主义思想核心在于强调个体存在的独特性和不可替代性。他认为，真正的存在不是抽象的、普遍的概念，而是具体的、个体的、活生生的存在。</p>
        <p>对于祁克果来说，存在意味着成为自己，意味着在每一个瞬间都要做出选择，承担选择的责任。这种存在不是被动的、既定的，而是主动的、创造的。</p>
        <p>他强调"主观真理"的重要性，认为真理不是客观的、普遍的，而是与个体的存在紧密相连的。真理必须通过个体的内在体验和选择才能获得。</p>
      `
    },
    {
      id: 'anxiety',
      title: '焦虑与绝望',
      icon: Heart,
      description: '焦虑是自由的眩晕，绝望是致死的疾病。祁克果深入分析了人类存在的根本困境。',
      content: `
        <p>祁克果将焦虑定义为"自由的眩晕"。他认为焦虑是当人面对无限可能性时的感受，是自由意识觉醒的标志。焦虑不是恐惧，因为恐惧有具体的对象，而焦虑的对象是虚无。</p>
        <p>绝望是"致死的疾病"，但这里的"致死"不是指肉体的死亡，而是指精神的死亡。绝望有三种形式：不知道有自我、不想成为自我、想成为别的自我。</p>
        <p>祁克果认为，只有通过信仰才能克服绝望。信仰不是理性的产物，而是"激情的悖论"，是对荒谬的接受。</p>
      `
    },
    {
      id: 'stages',
      title: '人生三阶段',
      icon: Brain,
      description: '审美阶段、伦理阶段、宗教阶段，这是祁克果提出的人的精神发展的三个层次。',
      content: `
        <p><strong>审美阶段：</strong>以感官享受和即时满足为特征。这个阶段的人追求快乐、美感和刺激，但往往陷入无聊和绝望。代表人物是《非此即彼》中的"审美者"。</p>
        <p><strong>伦理阶段：</strong>以道德责任和义务为特征。这个阶段的人认识到自己的道德责任，选择过一种有原则的生活。代表人物是《非此即彼》中的"伦理者"。</p>
        <p><strong>宗教阶段：</strong>以信仰和与上帝的关系为特征。这个阶段超越了伦理的普遍性，进入了个体与上帝的绝对关系。代表人物是《恐惧与战栗》中的亚伯拉罕。</p>
        <p>需要注意的是，这三个阶段不是线性的发展过程，而是可能同时存在的不同维度。</p>
      `
    },
    {
      id: 'faith',
      title: '信仰与理性',
      icon: Eye,
      description: '信仰是激情的悖论，是对荒谬的接受。祁克果重新定义了信仰的本质。',
      content: `
        <p>祁克果认为，真正的信仰不是理性的产物，而是"激情的悖论"。信仰不是对理性论证的接受，而是对荒谬的接受，是对不可能的可能性的相信。</p>
        <p>他区分了"客观真理"和"主观真理"。客观真理是关于事实的真理，可以通过理性获得；主观真理是关于存在的真理，必须通过信仰获得。</p>
        <p>信仰不是知识的替代品，而是知识的基础。没有信仰，就没有真正的知识；没有知识，信仰就变成了盲信。</p>
        <p>祁克果强调，信仰不是一次性的决定，而是持续的选择和重新选择。每一次选择都是"信仰的跳跃"。</p>
      `
    },
    {
      id: 'individuality',
      title: '个体性概念',
      icon: Shield,
      description: '个体是真理的标准，每个个体都必须为自己做出选择，承担选择的责任。',
      content: `
        <p>祁克果强调个体性的绝对重要性。他认为，每个个体都是独特的、不可替代的，都有自己的真理和责任。</p>
        <p>个体性不是自私或自我中心，而是对自身独特性的认识和承担。每个个体都必须为自己做出选择，不能依赖他人或社会来为自己做决定。</p>
        <p>祁克果反对黑格尔的普遍主义，认为真理不是普遍的、客观的，而是个体的、主观的。真理必须通过个体的内在体验才能获得。</p>
        <p>他强调"孤独"的重要性，认为真正的个体性只有在孤独中才能实现。只有在孤独中，个体才能面对自己，做出真正的选择。</p>
      `
    },
    {
      id: 'paradox',
      title: '悖论与荒谬',
      icon: Zap,
      description: '祁克果认为，真正的真理往往以悖论的形式出现，荒谬是信仰的必经之路。',
      content: `
        <p>祁克果认为，真正的真理往往以悖论的形式出现。悖论不是逻辑错误，而是真理的本质特征。当理性遇到其极限时，悖论就会出现。</p>
        <p>荒谬是信仰的必经之路。当理性无法理解时，信仰就开始了。荒谬不是要解决的问题，而是要接受的现实。</p>
        <p>祁克果最著名的悖论是"上帝成为人"的悖论。这个悖论超越了理性的理解，只能通过信仰来接受。</p>
        <p>他认为，只有通过接受悖论，个体才能获得真正的自由和真理。悖论不是障碍，而是通往真理的桥梁。</p>
      `
    }
  ]

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              祁克果的哲学思想
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              存在主义 · 个体性 · 信仰 · 焦虑 · 绝望
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              深入探索祁克果的核心哲学概念，了解他如何通过独特的思想体系
              为现代存在主义哲学奠定基础，并深刻影响了后世的思想发展。
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                哲学思想概述
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                索伦·祁克果的哲学思想以其对个体存在、焦虑、绝望和信仰的深刻分析而著称。
                作为存在主义哲学的先驱，他挑战了传统的理性主义哲学，强调个体经验、
                主观真理和存在选择的重要性。
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                祁克果的哲学不是抽象的理论体系，而是对具体存在问题的深入思考。
                他通过独特的写作风格和哲学方法，探讨了人类存在的根本问题：
                如何成为真正的自己，如何面对焦虑和绝望，如何获得真正的信仰。
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                他的思想对后来的存在主义哲学家如海德格尔、萨特、加缪等产生了深远影响，
                也为现代心理学、神学和文学提供了重要的思想资源。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concepts */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              核心哲学概念
            </h2>
            <div className="space-y-6">
              {concepts.map((concept) => {
                const Icon = concept.icon
                const isExpanded = expandedSection === concept.id
                return (
                  <div key={concept.id} className="card">
                    <button
                      onClick={() => toggleSection(concept.id)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {concept.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {concept.description}
                          </p>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    
                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div 
                          className="prose prose-lg dark:prose-invert max-w-none"
                          dangerouslySetInnerHTML={{ __html: concept.content }}
                        />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Works */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              重要哲学著作
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  《非此即彼》
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  祁克果的成名作，通过审美者和伦理者的对话，探讨了人生的两种基本态度。
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• 审美阶段与伦理阶段的对比</li>
                  <li>• 个体选择的重要性</li>
                  <li>• 婚姻与责任的哲学思考</li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  《恐惧与战栗》
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  以亚伯拉罕献祭以撒的故事为背景，深入探讨了信仰的本质和悖论。
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• 信仰的悖论性</li>
                  <li>• 个体与普遍性的冲突</li>
                  <li>• 宗教阶段的超越性</li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  《致死的疾病》
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  深入分析了绝望的本质，认为绝望是"致死的疾病"，只有信仰才能治愈。
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• 绝望的三种形式</li>
                  <li>• 自我与绝望的关系</li>
                  <li>• 信仰作为绝望的解决方案</li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  《哲学片段》
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  探讨了真理与学习的关系，提出了"真理即主观性"的重要命题。
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• 苏格拉底与基督的对比</li>
                  <li>• 真理的主观性</li>
                  <li>• 信仰与知识的关系</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Influence */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              思想影响
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                祁克果的哲学思想对后世产生了深远影响。他的存在主义思想为海德格尔、
                萨特、加缪等哲学家提供了重要的思想基础，他的个体性概念影响了现代心理学，
                他的神学思想影响了20世纪的神学发展。
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                祁克果的写作风格和哲学方法也影响了现代文学和艺术创作，
                他的"间接沟通"方法为现代文学理论提供了重要启示。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Philosophy
