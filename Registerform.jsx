import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const RegisterForm = ({ category }) => {
  const navigate = useNavigate()
  const { register } = useAuth()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [generatedId, setGeneratedId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setGeneratedId('')

    if (formData.password !== formData.confirmPassword) {
      setError('كلمات المرور غير متطابقة')
      return
    }

    if (formData.password.length < 6) {
      setError('يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل')
      return
    }

    const result = register({
      firstName: formData.firstName,
      lastName: formData.lastName,
      birthDate: formData.birthDate,
      password: formData.password,
      categoryCode: category.code,
      categoryName: category.name,
      categoryColor: category.color
    })

    if (result.success) {
      setGeneratedId(result.uniqueId)
      setTimeout(() => {
        navigate('/dashboard')
      }, 3000)
    } else {
      setError(result.message || 'حدث خطأ أثناء التسجيل')
    }
  }

  return (
    <div dir="rtl">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm text-right">
            {error}
          </div>
        )}

        {generatedId && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-4 rounded-lg text-sm text-right">
            <p className="font-semibold mb-2">تم إنشاء حسابك بنجاح!</p>
            <p className="mb-2">المعرف الفريد الخاص بك:</p>
            <p className="font-mono text-xl sm:text-2xl font-bold text-green-900 bg-white px-4 py-3 rounded text-center">
              {generatedId}
            </p>
            <p className="mt-3 text-xs">يرجى حفظ هذا المعرف لتسجيل الدخول</p>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
            الاسم الأول
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            placeholder="أدخل الاسم الأول"
            className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-right text-base min-h-[44px] touch-manipulation"
            required
            disabled={!!generatedId}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
            اللقب
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            placeholder="أدخل اللقب"
            className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-right text-base min-h-[44px] touch-manipulation"
            required
            disabled={!!generatedId}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
            تاريخ الميلاد
          </label>
          <input
            type="date"
            value={formData.birthDate}
            onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
            className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-right text-base min-h-[44px] touch-manipulation"
            required
            disabled={!!generatedId}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
            كلمة المرور
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="أدخل كلمة المرور (6 أحرف على الأقل)"
            className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-right text-base min-h-[44px] touch-manipulation"
            required
            disabled={!!generatedId}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
            تأكيد كلمة المرور
          </label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            placeholder="أعد إدخال كلمة المرور"
            className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-right text-base min-h-[44px] touch-manipulation"
            required
            disabled={!!generatedId}
          />
        </div>

        {!generatedId && (
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 sm:py-3.5 rounded-lg font-medium hover:bg-purple-700 transition-colors text-base min-h-[44px] touch-manipulation"
          >
            إنشاء الحساب
          </button>
        )}
      </form>
    </div>
  )
}

export default RegisterForm
