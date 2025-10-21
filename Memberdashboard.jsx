import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { LogOut, User, Calendar, IdCard } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const MemberDashboard = () => {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  if (!currentUser) return null

  const formatDate = (dateString) => {
    const months = [
      'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
      'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ]
    const date = new Date(dateString)
    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div
              className="h-32 sm:h-40 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-8 py-4 gap-4"
              style={{ backgroundColor: currentUser.categoryColor }}
            >
              <div className="text-center sm:text-right">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  مرحباً، {currentUser.firstName} {currentUser.lastName}
                </h1>
                <p className="text-white text-opacity-90 text-sm sm:text-base">
                  {currentUser.categoryName}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2.5 sm:py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg transition-all min-h-[44px] sm:min-h-0 touch-manipulation"
              >
                <LogOut size={20} />
                <span className="text-sm sm:text-base">تسجيل الخروج</span>
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-gray-50 rounded-xl p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <User className="text-purple-600" size={24} />
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">المعلومات الشخصية</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">الاسم الكامل</p>
                      <p className="text-gray-900 font-medium text-sm sm:text-base">
                        {currentUser.firstName} {currentUser.lastName}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">تاريخ الميلاد</p>
                      <p className="text-gray-900 font-medium text-sm sm:text-base">
                        {formatDate(currentUser.birthDate)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <IdCard className="text-purple-600" size={24} />
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">معلومات الحساب</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">المعرف الفريد</p>
                      <p className="text-gray-900 font-medium font-mono text-lg sm:text-xl">
                        {currentUser.uniqueId}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">الفئة</p>
                      <p className="text-gray-900 font-medium text-sm sm:text-base">
                        {currentUser.categoryName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-purple-600" size={24} />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">تاريخ الانضمام</h3>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-900 font-medium text-sm sm:text-base">
                    {formatDate(currentUser.createdAt)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MemberDashboard
