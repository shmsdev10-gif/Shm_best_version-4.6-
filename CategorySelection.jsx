import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { roleTypes } from '../data/mockData'
import { motion } from 'framer-motion'
import CategoryCard from '../components/CategoryCard'

const CategorySelection = () => {
  const [selectedRole, setSelectedRole] = useState(null)
  const [currentCategories, setCurrentCategories] = useState(roleTypes)
  const handleRoleSelect = (role) => {
    setSelectedRole(role)
    setCurrentCategories(role.subcategories)
  }

  const handleBack = () => {
    setSelectedRole(null)
    setCurrentCategories(roleTypes)
  }
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {selectedRole ? selectedRole.name : 'Scout Hassania Maroc'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {selectedRole
              ? 'Sélectionnez votre catégorie pour accéder à votre espace personnel'
              : 'Choisissez votre type de membre pour continuer'
            }
          </p>
        </motion.div>
        {selectedRole && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleBack}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Retour</span>
          </motion.button>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentCategories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
              onSelect={selectedRole ? null : handleRoleSelect}
              isRoleSelection={!selectedRole}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategorySelection
