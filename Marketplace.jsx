import { motion } from 'framer-motion'
import { ShoppingCart, Star, Filter, Search } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const Marketplace = () => {
  const { currentUser } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const [products] = useState([
    {
      id: 1,
      name: 'قميص كشفي',
      price: 150,
      category: 'ملابس',
      ageMin: 10,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      rating: 4.5,
      inStock: true
    },
    {
      id: 2,
      name: 'حقيبة ظهر',
      price: 250,
      category: 'معدات',
      ageMin: 8,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
      rating: 4.8,
      inStock: true
    },
    {
      id: 3,
      name: 'فوراجير مخصص',
      price: 80,
      category: 'إكسسوارات',
      ageMin: 12,
      image: 'https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?w=400',
      rating: 4.3,
      inStock: true,
      customizable: true
    },
    {
      id: 4,
      name: 'بوصلة احترافية',
      price: 120,
      category: 'معدات',
      ageMin: 14,
      image: 'https://images.unsplash.com/photo-1551431009-a802eeec77b1?w=400',
      rating: 4.6,
      inStock: false
    },
    {
      id: 5,
      name: 'دفتر ملاحظات',
      price: 45,
      category: 'قرطاسية',
      ageMin: 7,
      image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400',
      rating: 4.2,
      inStock: true
    },
    {
      id: 6,
      name: 'خيمة كشفية',
      price: 800,
      category: 'معدات',
      ageMin: 16,
      image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400',
      rating: 4.9,
      inStock: true
    }
  ])

  const categories = ['الكل', 'ملابس', 'معدات', 'إكسسوارات', 'قرطاسية']

  const calculateAge = (birthDate) => {
    const today = new Date()
    const birth = new Date(birthDate)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    return age
  }

  const userAge = currentUser ? calculateAge(currentUser.birthDate) : 0

  const canPurchase = (product) => {
    return userAge >= product.ageMin
  }

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || selectedCategory === 'الكل' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">المتجر</h1>
            <p className="text-gray-600">تسوق المنتجات والمعدات الكشفية</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="ابحث عن منتج..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent min-h-[44px]"
                />
              </div>
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent min-h-[44px]"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">غير متوفر</span>
                    </div>
                  )}
                  {product.customizable && (
                    <span className="absolute top-2 left-2 bg-[#6B3FA0] text-white text-xs px-2 py-1 rounded-full">
                      قابل للتخصيص
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400" size={16} fill="currentColor" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">{product.category}</p>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-[#6B3FA0]">{product.price} درهم</span>
                    <span className="text-xs text-gray-500">العمر الأدنى: {product.ageMin} سنة</span>
                  </div>

                  {!canPurchase(product) && (
                    <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-xs text-red-600 text-center">
                        الشراء محظور: العمر الأدنى المطلوب هو {product.ageMin} سنة
                      </p>
                    </div>
                  )}

                  <button
                    disabled={!product.inStock || !canPurchase(product)}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all min-h-[44px] ${
                      !product.inStock || !canPurchase(product)
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-[#6B3FA0] text-white hover:bg-[#5a2f85]'
                    }`}
                  >
                    <ShoppingCart size={20} />
                    <span>{product.inStock ? 'أضف إلى السلة' : 'غير متوفر'}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <ShoppingCart className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600">لم يتم العثور على منتجات</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Marketplace
