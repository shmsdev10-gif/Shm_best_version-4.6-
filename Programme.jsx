import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, Plus } from 'lucide-react'
import { useState } from 'react'

const Programme = () => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: 'اجتماع أسبوعي',
      date: '2024-01-15',
      time: '14:00',
      location: 'المقر الرئيسي',
      participants: 25,
      category: 'اجتماع'
    },
    {
      id: 2,
      title: 'نشاط رياضي',
      date: '2024-01-18',
      time: '16:00',
      location: 'الملعب البلدي',
      participants: 30,
      category: 'رياضة'
    },
    {
      id: 3,
      title: 'ورشة فنية',
      date: '2024-01-20',
      time: '15:00',
      location: 'قاعة الفنون',
      participants: 20,
      category: 'فن'
    }
  ])

  const getCategoryColor = (category) => {
    const colors = {
      'اجتماع': 'bg-blue-100 text-blue-800',
      'رياضة': 'bg-green-100 text-green-800',
      'فن': 'bg-purple-100 text-purple-800',
      'تدريب': 'bg-orange-100 text-orange-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
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
              <h1 className="text-3xl font-bold text-gray-900">برنامج الأنشطة</h1>
              <p className="text-gray-600 mt-1">جدول الفعاليات والأنشطة القادمة</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#6B3FA0] text-white rounded-lg hover:bg-[#5a2f85] transition-all min-h-[44px] w-full sm:w-auto justify-center">
              <Plus size={20} />
              <span>إضافة نشاط</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <Calendar className="text-[#6B3FA0] mt-1" size={20} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {activity.title}
                        </h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(activity.category)}`}>
                          {activity.category}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 mr-8">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span className="text-sm">{new Date(activity.date).toLocaleDateString('ar-MA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock size={16} />
                        <span className="text-sm">{activity.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span className="text-sm">{activity.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users size={16} />
                        <span className="text-sm">{activity.participants} مشارك</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none px-4 py-2 border border-[#6B3FA0] text-[#6B3FA0] rounded-lg hover:bg-[#6B3FA0] hover:text-white transition-all min-h-[44px]">
                      تعديل
                    </button>
                    <button className="flex-1 sm:flex-none px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all min-h-[44px]">
                      حذف
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Programme
