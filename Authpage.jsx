import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import ForgotPasswordForm from '../components/ForgotPasswordForm'
import { categories } from '../data/mockData'

const AuthPage = () => {
  const { category } = useParams()
  const [activeTab, setActiveTab] = useState('login')
  
  const categoryData = categories.find(c => c.code === category)

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir="rtl">
        <p className="text-gray-600">فئة غير صالحة</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4" dir="rtl">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div
            className="h-32 flex items-center justify-center"
            style={{ backgroundColor: categoryData.color }}
          >
            <h2 className="text-2xl font-bold text-white">
              {categoryData.name}
            </h2>
          </div>

          <div className="p-8">
            <div className="flex gap-2 mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('login')}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'login'
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                تسجيل الدخول
              </button>
              <button
                onClick={() => setActiveTab('register')}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'register'
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                إنشاء حساب
              </button>
              <button
                onClick={() => setActiveTab('forgot')}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'forgot'
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                نسيت كلمة المرور
              </button>
            </div>

            {activeTab === 'login' && <LoginForm category={categoryData} />}
            {activeTab === 'register' && <RegisterForm category={categoryData} />}
            {activeTab === 'forgot' && <ForgotPasswordForm category={categoryData} />}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AuthPage
