import React from 'react'
import { Heart, Users, Globe, Mail, Github, BookOpen, Lightbulb, Target, Award } from 'lucide-react'

const About: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: '全面内容',
      description: '涵盖祁克果的生平、思想、著作、影响等各个方面，提供全面而深入的知识内容。'
    },
    {
      icon: Lightbulb,
      title: '深度解析',
      description: '深入解析祁克果的核心哲学概念，帮助读者理解其思想的深刻内涵。'
    },
    {
      icon: Users,
      title: '学术严谨',
      description: '基于权威学术资料，确保内容的准确性和学术价值，适合不同层次的学习者。'
    },
    {
      icon: Globe,
      title: '现代设计',
      description: '采用现代网页设计理念，提供优秀的用户体验和响应式设计。'
    }
  ]

  const team = [
    {
      name: '哲学研究团队',
      role: '内容策划',
      description: '由哲学专业学者组成，负责内容的学术性和准确性。',
      avatar: '👨‍🎓'
    },
    {
      name: '技术开发团队',
      role: '网站开发',
      description: '专业的前端开发团队，负责网站的技术实现和用户体验。',
      avatar: '👨‍💻'
    },
    {
      name: '设计团队',
      role: '视觉设计',
      description: '优秀的设计师团队，负责网站的视觉设计和交互体验。',
      avatar: '👨‍🎨'
    }
  ]

  const milestones = [
    {
      year: '2024',
      title: '项目启动',
      description: '开始策划和设计祁克果网站项目，确定整体架构和内容方向。'
    },
    {
      year: '2024',
      title: '内容收集',
      description: '收集整理祁克果相关的学术资料、图片、文献等资源。'
    },
    {
      year: '2024',
      title: '网站开发',
      description: '完成网站的前端开发，实现响应式设计和现代用户体验。'
    },
    {
      year: '2024',
      title: '内容填充',
      description: '填充网站内容，包括生平、思想、著作、名言等各个模块。'
    },
    {
      year: '2024',
      title: '测试优化',
      description: '进行全面的测试和优化，确保网站的稳定性和用户体验。'
    },
    {
      year: '2024',
      title: '正式上线',
      description: '网站正式上线，为哲学爱好者和研究者提供优质的学习资源。'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              关于祁克果网站
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              哲学学习平台 · 学术资源中心 · 思想交流社区
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              我们致力于为哲学爱好者、学生和研究者提供一个全面、深入、易用的祁克果学习平台，
              让更多人能够了解和欣赏这位伟大哲学家的思想智慧。
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                我们的使命
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  祁克果网站诞生于对哲学教育的热情和对知识传播的使命感。
                  我们相信，哲学不仅仅是学者的专利，更是每个人都可以学习和思考的智慧。
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  通过现代技术手段，我们希望能够让祁克果的深刻思想变得更加易于理解和接近，
                  让更多的人能够从中获得启发和智慧，在人生的道路上找到自己的方向。
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  我们致力于打造一个开放、包容、深度的哲学学习平台，
                  为哲学爱好者和研究者提供最优质的学习资源和交流环境。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                网站特色
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                我们为学习者提供全方位的支持和服务
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="card text-center">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                团队介绍
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                由专业团队精心打造
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="card text-center">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {member.role}
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

      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                发展历程
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                我们的成长足迹
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-primary-200 dark:bg-primary-700"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center z-10 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                    <div className="card">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl font-bold text-primary-600 dark:text-primary-400 mr-4">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                我们的价值观
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  学术严谨
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  我们坚持学术严谨性，确保所有内容的准确性和权威性，
                  为学习者提供可靠的知识资源。
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  开放包容
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  我们欢迎不同背景的学习者，致力于创造一个开放、
                  包容的学习环境，让每个人都能参与哲学思考。
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  创新思维
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  我们不断创新，运用现代技术手段让哲学学习变得更加生动有趣，
                  让抽象的思想变得具体可感。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              联系我们
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
              我们欢迎您的反馈、建议和合作意向
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <Mail className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  邮箱联系
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  contact@kierkegaard.com
                </p>
              </div>
              
              <div className="card text-center">
                <Github className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  GitHub
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  github.com/kierkegaard-website
                </p>
              </div>
              
              <div className="card text-center">
                <Globe className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  官方网站
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  www.kierkegaard.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                感谢您访问祁克果网站。我们希望通过这个平台，
                让更多的人能够了解和欣赏祁克果的深刻思想，
                在哲学的道路上找到属于自己的智慧之光。
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                正如祁克果所说："生活只能向后理解，但必须向前生活。"
                愿我们都能在理解过去的基础上，勇敢地面对未来。
              </p>
              <div className="flex items-center justify-center space-x-2 text-primary-600 dark:text-primary-400">
                <Heart className="w-5 h-5" />
                <span className="text-lg font-medium">Made with love for philosophy lovers</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
