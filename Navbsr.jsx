import { motion } from 'framer-motion'
import { Home, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useSidebar } from '../context/SidebarContext'

const Navbar = () => {
  const { currentUser } = useAuth()
  const { isOpen, toggleSidebar } = useSidebar()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <Home className="text-white" size={20} />
          </div>
          <span className="text-lg font-bold text-gray-900 hidden md:block">SHM</span>
        </Link>

        <div className="flex items-center gap-4">
          {currentUser ? (
            <>
              <Link
                to="/dashboard"
                className="w-9 h-9 flex items-center justify-center bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                aria-label="Mon espace"
              >
                <Home size={18} />
              </Link>
              <motion.button
                onClick={toggleSidebar}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 flex items-center justify-center bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </>
          ) : (
            <span className="text-sm text-gray-600">Sélectionnez votre catégorie</span>
          )}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
