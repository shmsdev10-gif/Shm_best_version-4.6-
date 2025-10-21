import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { User, Calendar, IdCard, Mail, Phone, MapPin, Heart, Users } from 'lucide-react'

const MonEspace = () => {
  const { currentUser } = useAuth()

  if (!currentUser) return null

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.toLocaleDateString('fr-FR', { month: 'long' })
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
  }

  const sections = [
    {
      title: 'المعلومات الشخصية',
      icon: User,
      fields: [
        { label: 'الاسم الكامل', value: `${currentUser.firstName} ${currentUser.lastName}` },
        { label: 'تاريخ الميلاد', value: formatDate(currentUser.birthDate) },
        { label: 'المعرف الفريد', value: currentUser.uniqueId }
      ]
    },
    {
      title: 'معلومات الاتصال',
      icon: Phone,
      fields: [
        { label: 'البريد الإلكتروني', value: 'example@shm.ma' },
        { label: 'رقم الهاتف', value: '+212 6XX XXX XXX' },
        { label: 'العنوان', value: 'المغرب' }
      ]
    },
    {
      title: 'البيانات الطبية',
      icon: Heart,
      fields: [
        { label: 'فصيلة الدم', value: 'غير محدد' },
        { label: 'الحساسية', value: 'لا يوجد' },
        { label: 'الأدوية', value: 'لا يوجد' }
      ]
    },
    {
      title: 'معلومات الوصي',
      icon: Users,
      fields: [
        { label: 'اسم الوصي', value: 'غير محدد' },
        { label: 'رقم هاتف الوصي', value: 'غير محدد' },
        { label: 'صلة القرابة', value: 'غير محدد' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
            <div
              className="h-32 flex items-center justify-between px-6 py-4"
              style={{ backgroundColor: currentUser.categoryColor }}
            >
              <div>
                <h1 className="text-3xl font-bold text-white">
                  مرحباً، {currentUser.firstName}
                </h1>
                <p className="text-white text-opacity-90 mt-1">
                  {currentUser.categoryName}
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                <p className="text-white text-sm">النقاط الشهرية</p>
                <p className="text-white text-2xl font-bold">100</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <section.icon className="text-[#6B3FA0]" size={24} />
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                </div>
                <div className="space-y-3">
                  {section.fields.map((field) => (
                    <div key={field.label}>
                      <p className="text-sm text-gray-500">{field.label}</p>
                      <p className="text-gray-900 font-medium">{field.value}</p>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-[#6B3FA0] text-white rounded-lg hover:bg-[#5a2f85] transition-all min-h-[44px]">
                  تعديل المعلومات
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MonEspace
