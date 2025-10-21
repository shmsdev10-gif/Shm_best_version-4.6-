import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem('scoot_users')
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem('scoot_users', JSON.stringify(users))
  }, [users])

  useEffect(() => {
    const stored = localStorage.getItem('scoot_current_user')
    if (stored) {
      setCurrentUser(JSON.parse(stored))
    }
  }, [])

  const generateUniqueId = (categoryCode) => {
    const randomNum = Math.floor(1000 + Math.random() * 9000)
    return `${categoryCode}${randomNum}`
  }

  const register = (userData) => {
    const uniqueId = generateUniqueId(userData.categoryCode)

    const existingUser = users.find(u => u.uniqueId === uniqueId)
    if (existingUser) {
      return { success: false, message: 'المستخدم موجود بالفعل' }
    }

    const newUser = {
      ...userData,
      uniqueId,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    }

    setUsers([...users, newUser])
    setCurrentUser(newUser)
    localStorage.setItem('scoot_current_user', JSON.stringify(newUser))
    return { success: true, uniqueId }
  }

  const login = (uniqueId, password, categoryCode) => {
    const user = users.find(
      u => u.uniqueId === uniqueId && 
      u.password === password && 
      u.categoryCode === categoryCode
    )

    if (user) {
      setCurrentUser(user)
      localStorage.setItem('scoot_current_user', JSON.stringify(user))
      return { success: true }
    }

    return { success: false, message: 'بيانات الاعتماد غير صحيحة' }
  }

  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem('scoot_current_user')
  }

  const value = {
    currentUser,
    register,
    login,
    logout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext
