import { NavLink } from 'react-router-dom'
import { User, Calendar, Music, Tent, Drum, FileText, ShoppingCart, Lightbulb, Code } from 'lucide-react'
import { motion } from 'framer-motion'

const Sidebar = () => {
  const navItems = [
    { icon: User, label: 'Mon Espace Compte', path: '/dashboard/mon-espace' },
    { icon: Calendar, label: 'Programme', path: '/dashboard/programme' },
    { icon: Music, label: 'Anachid', path: '/dashboard/anachid' },
    { icon: Tent, label: 'Founoun Arriyada', path: '/dashboard/frida' },
    { icon: Drum, label: 'Firqa Nohassia', path: '/dashboard/audio-tracks' },
    { icon: FileText, label: 'Rapports de Séance', path: '/dashboard/rapports' },
    { icon: ShoppingCart, label: 'Marketplace', path: '/dashboard/marketplace' },
    { icon: Lightbulb, label: 'Boîte à idées', path: '/dashboard/idees' },
    { icon: Code, label: 'Espace Développeur', path: '/dashboard/espace-developpeur' }
  ]

  return (
    <div className="w-64 bg-[#1E392A] min-h-screen fixed right-0 top-0 text-white" dir="rtl">
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-center">SHM</h1>
          <p className="text-sm text-center text-gray-300 mt-1">الكشفية الحسنية المغربية</p>
        </motion.div>

        <nav className="space-y-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all min-h-[44px] ${
                    isActive
                      ? 'bg-white bg-opacity-20 text-white'
                      : 'text-gray-300 hover:bg-white hover:bg-opacity-10'
                  }`
                }
              >
                <item.icon size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </NavLink>
            </motion.div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
