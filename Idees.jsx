import { motion } from 'framer-motion'
import { Lightbulb, Plus, ThumbsUp, MessageCircle, Clock, CheckCircle, XCircle } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const Idees = () => {
  const { currentUser } = useAuth()
  const [ideas] = useState([
    {
      id: 1,
      title: 'إنشاء تطبيق موبايل للكشافة',
      description: 'تطوير تطبيق موبايل يسهل التواصل بين الأعضاء ويوفر معلومات عن الأنشطة والفعاليات',
      author: 'أحمد الليشير',
      date: '2024-01-12',
      status: 'pending',
      likes: 15,
      comments: 8,
      category: 'تكنولوجيا'
    },
    {
      id: 2,
      title: 'برنامج تدريبي للقيادة',
      description: 'تنظيم برنامج تدريبي شامل لتطوير المهارات القيادية للأعضاء',
      author: 'فاطمة الزهراء',
      date: '2024-01-10',
      status: 'approved',
      likes: 28,
      comments: 12,
      category: 'تدريب'
    },
    {
      id: 3,
      title: 'مخيم صيفي للبراعم',
      description: 'تنظيم مخيم صيفي خاص بفئة البراعم مع أنشطة ترفيهية وتعليمية',
      author: 'محمد العلوي',
      date: '2024-01-08',
      status: 'rejected',
      likes: 10,
      comments: 5,
      category: 'أنشطة'
    },
    {
      id: 4,
      title: 'مسابقة فنية للأناشيد',
      description: 'إقامة مسابقة سنوية للأناشيد الكشفية لتشجيع الإبداع الفني',
      author: 'سارة بنعلي',
      date: '2024-01-05',
      status: 'pending',
      likes: 22,
      comments: 15,
      category: 'فن وثقافة'
    }
  ])

  const [showNewIdeaForm, setShowNewIdeaForm] = useState(false)
  const [newIdea, setNewIdea] = useState({
    title: '',
    description: '',
    category: ''
  })

  const categories = ['تكنولوجيا', 'تدريب', 'أنشطة', 'فن وثقافة', 'بيئة', 'خدمة مجتمعية']

  const getStatusInfo = (status) => {
    const statusMap = {
      pending: {
        icon: Clock,
        color: 'bg-yellow-100 text-yellow-800',
        text: 'قيد المراجعة'
      },
      approved: {
        icon: CheckCircle,
        color: 'bg-green-100 text-green-800',
        text: 'معتمدة'
      },
      rejected: {
        icon: XCircle,
        color: 'bg-red-100 text-red-800',
        text: 'مرفوضة'
      }
    }
    return statusMap[status] || statusMap.pending
  }

  const handleSubmitIdea = (e) => {
    e.preventDefault()
    console.log('فكرة جديدة:', newIdea)
    setShowNewIdeaForm(false)
    setNewIdea({ title: '', description: '', category: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">صندوق الأفكار</h1>
              <p className="text-gray-600 mt-1">شارك أفكارك الإبداعية لتطوير الكشافة</p>
            </div>
            <button
              onClick={() => setShowNewIdeaForm(!showNewIdeaForm)}
              className="flex items-center gap-2 px-6 py-3 bg-[#6B3FA0] text-white rounded-lg hover:bg-[#5a2f85] transition-all min-h-[44px] w-full sm:w-auto justify-center"
            >
              <Plus size={20} />
              <span>أضف فكرة جديدة</span>
            </button>
          </div>

          {showNewIdeaForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white rounded-xl shadow-md p-6 mb-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">فكرة جديدة</h2>
              <form onSubmit={handleSubmitIdea} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    عنوان الفكرة
                  </label>
                  <input
                    type="text"
                    value={newIdea.title}
                    onChange={(e) => setNewIdea({ ...newIdea, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent min-h-[44px]"
                    placeholder="أدخل عنواناً واضحاً للفكرة"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الفئة
                  </label>
                  <select
                    value={newIdea.category}
                    onChange={(e) => setNewIdea({ ...newIdea, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent min-h-[44px]"
                    required
                  >
                    <option value="">اختر الفئة</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    وصف الفكرة
                  </label>
                  <textarea
                    value={newIdea.description}
                    onChange={(e) => setNewIdea({ ...newIdea, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent resize-none"
                    placeholder="اشرح فكرتك بالتفصيل"
                    required
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-[#6B3FA0] text-white rounded-lg hover:bg-[#5a2f85] transition-all min-h-[44px]"
                  >
                    إرسال الفكرة
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowNewIdeaForm(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all min-h-[44px]"
                  >
                    إلغاء
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          <div className="grid grid-cols-1 gap-4">
            {ideas.map((idea, index) => {
              const statusInfo = getStatusInfo(idea.status)
              const StatusIcon = statusInfo.icon

              return (
                <motion.div
                  key={idea.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Lightbulb className="text-[#6B3FA0]" size={24} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{idea.title}</h3>
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}>
                          <StatusIcon size={14} />
                          {statusInfo.text}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-3">{idea.description}</p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 rounded-full font-medium">
                          {idea.category}
                        </span>
                        <span>بواسطة: {idea.author}</span>
                        <span>{new Date(idea.date).toLocaleDateString('ar-MA')}</span>
                      </div>

                      <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-200">
                        <button className="flex items-center gap-2 text-gray-600 hover:text-[#6B3FA0] transition-colors min-h-[44px]">
                          <ThumbsUp size={18} />
                          <span>{idea.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-600 hover:text-[#6B3FA0] transition-colors min-h-[44px]">
                          <MessageCircle size={18} />
                          <span>{idea.comments}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Idees
