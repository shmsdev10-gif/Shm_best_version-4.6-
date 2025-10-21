import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const CategoryCard = ({ category, index, onSelect, isRoleSelection }) => {
  const navigate = useNavigate()
  
    const handleClick = () => {
      if (isRoleSelection && onSelect) {
        onSelect(category)
    } else {
      navigate(`/auth/${category.code}`)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={handleClick}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
    >
      <div
        className="h-32 flex items-center justify-center"
        style={{ backgroundColor: category.color || '#6B3FA0' }}
      >
        <h3 className="text-xl font-bold text-white text-center px-4">
          {category.name || 'Catégorie'}
        </h3>
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">Catégorie {category.code || 'N/A'}</p>
          <p className="text-xs text-gray-500 mt-1">{category.description || ''}</p>
        </div>
        <ChevronRight className="text-purple-600" size={24} />
      </div>
    </motion.div>
  )
}

export default CategoryCard
