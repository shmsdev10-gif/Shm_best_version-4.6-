import { motion } from 'framer-motion'
import { FileText, Plus, Filter, Calendar, User, CheckCircle, Clock } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const Rapports = () => {
  const { currentUser } = useAuth()
  const [reports] = useState([
    {
      id: 1,
      niche: 'المشاريع',
      title: 'تقرير الاجتماع الأسبوعي',
      author: 'عدنان بلخضير',
      date: '2024-01-10',
      status: 'validated',
      content: 'تم مناقشة المشاريع الجديدة والتخطيط للفعاليات القادمة'
    },
    {
      id: 2,
      niche: 'تقارير الجلسات',
      title: 'تقرير الجلسة التدريبية',
      author: 'آية بوشا',
      date: '2024-01-08',
      status: 'pending',
      content: 'جلسة تدريبية حول المهارات القيادية'
    },
    {
      id: 3,
      niche: 'الإعلام',
      title: 'تقرير النشاط الإعلامي',
      author: 'ملاك سقاقيني',
      date: '2024-01-05',
      status: 'validated',
      content: 'تغطية إعلامية للفعاليات الأخيرة'
    }
  ])

  const [selectedNiche, setSelectedNiche] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  const niches = ['الكل', 'المشاريع', 'تقارير الجلسات', 'تنظيم الأنشطة', 'القوانين والتطبيقات', 'الإعلام']
  const statuses = ['الكل', 'معتمد', 'قيد المراجعة']

  const getStatusColor = (status) => {
    return status === 'validated'
      ? 'bg-green-100 text-green-800'
      : 'bg-yellow-100 text-yellow-800'
  }

  const getStatusIcon = (status) => {
    return status === 'validated' ? CheckCircle : Clock
  }

  const getStatusText = (status) => {
    return status === 'validated' ? 'معتمد' : 'قيد المراجعة'
  }

  const canCreateReport = currentUser?.uniqueId?.startsWith('e')

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
              <h1 className="text-3xl font-bold text-gray-900">تقارير الجلسات</h1>
              <p className="text-gray-600 mt-1">إدارة ومتابعة تقارير الأنشطة</p>
            </div>
            {canCreateReport && (
              <button className="flex items-center gap-2 px-6 py-3 bg-[#6B3FA0] text-white rounded-lg hover:bg-[#5a2f85] transition-all min-h-[44px] w-full sm:w-auto justify-center">
                <Plus size={20} />
                <span>إنشاء تقرير</span>
              </button>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="text-[#6B3FA0]" size={20} />
              <h3 className="font-semibold text-gray-900">تصفية التقارير</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  المجال
                </label>
                <select
                  value={selectedNiche}
                  onChange={(e) => setSelectedNiche(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent min-h-[44px]"
                >
                  {niches.map((niche) => (
                    <option key={niche} value={niche}>
                      {niche}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الحالة
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent min-h-[44px]"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {reports.map((report, index) => {
              const StatusIcon = getStatusIcon(report.status)
              return (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <FileText className="text-[#6B3FA0] mt-1" size={20} />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {report.title}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                            {report.niche}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 mr-8">{report.content}</p>

                      <div className="flex flex-wrap gap-4 mr-8 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <User size={16} />
                          <span>{report.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{new Date(report.date).toLocaleDateString('ar-MA')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <StatusIcon size={16} />
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                            {getStatusText(report.status)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button className="px-4 py-2 border border-[#6B3FA0] text-[#6B3FA0] rounded-lg hover:bg-[#6B3FA0] hover:text-white transition-all min-h-[44px] w-full sm:w-auto">
                      عرض التفاصيل
                    </button>
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

export default Rapports
