import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const ForgotPasswordForm = ({ category }) => {
  const [formData, setFormData] = useState({ uniqueId: '', birthDate: '' })
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('')
    setError('')

    // Simulate password recovery
    setTimeout(() => {
      setMessage('تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني')
    }, 1000)
  }

  return (
    <div dir="rtl">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm text-right">
            {error}
          </div>
        )}

        {message && (
          <div className="bg-green-50 text-green-600 px-4 py-3 rounded-lg text-sm text-right">
            {message}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
            المعرف الفريد
          </label>
          <input
            type="text"
            value={formData.uniqueId}
            onChange={(e) => setFormData({ ...formData, uniqueId: e.target.value })}
            placeholder="أدخل المعرف الفريد الخاص بك"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-right"
            required
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-right"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          إعادة تعيين كلمة المرور
        </button>
      </form>
    </div>
  )
}

export default ForgotPasswordForm
