import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const LoginForm = ({ category }) => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [formData, setFormData] = useState({ uniqueId: '', password: '' })
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const result = login(formData.uniqueId, formData.password, category.code)
    
    if (result.success) {
      navigate('/dashboard')
    } else {
      setError(result.message || 'بيانات الاعتماد غير صحيحة')
    }
  }

  return (
    <div dir="rtl">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm text-right">
            {error}
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
            كلمة المرور
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="أدخل كلمة المرور"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-right"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          تسجيل الدخول
        </button>
      </form>
    </div>
  )
}

export default LoginForm
