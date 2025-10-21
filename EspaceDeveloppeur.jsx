import { motion } from 'framer-motion'
import { Code, Key, Activity, Database, Users, BarChart3, Terminal, Shield } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const EspaceDeveloppeur = () => {
  const { currentUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser?.uniqueId?.startsWith('w')) {
      navigate('/dashboard/mon-espace')
    }
  }, [currentUser, navigate])

  const stats = [
    {
      icon: Users,
      label: 'Utilisateurs Actifs',
      value: '156',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Key,
      label: 'API Keys',
      value: '8',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Activity,
      label: 'Requêtes/Jour',
      value: '2.4K',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Database,
      label: 'Stockage Utilisé',
      value: '45%',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]

  const recentLogs = [
    {
      id: 1,
      action: 'user_login',
      user: 'Ahmed L.',
      timestamp: '2024-01-15 14:23:45',
      status: 'success'
    },
    {
      id: 2,
      action: 'report_created',
      user: 'Aya B.',
      timestamp: '2024-01-15 14:18:32',
      status: 'success'
    },
    {
      id: 3,
      action: 'password_reset',
      user: 'Mohamed E.',
      timestamp: '2024-01-15 14:12:18',
      status: 'success'
    },
    {
      id: 4,
      action: 'api_call_failed',
      user: 'System',
      timestamp: '2024-01-15 14:05:09',
      status: 'error'
    }
  ]

  if (!currentUser?.uniqueId?.startsWith('w')) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#121212] p-4 sm:p-6 lg:p-8" dir="ltr">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="text-[#00FF00]" size={32} />
            <div>
              <h1 className="text-3xl font-bold text-[#00FF00]">Developer Space</h1>
              <p className="text-gray-400 mt-1">System Administration & Monitoring</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-[#1E1E1E] rounded-xl p-6 border border-gray-800"
              >
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <stat.icon className={stat.color} size={24} />
                </div>
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#1E1E1E] rounded-xl p-6 border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <Activity className="text-[#00FF00]" size={24} />
                <h2 className="text-xl font-semibold text-white">Recent Activity Logs</h2>
              </div>
              <div className="space-y-3">
                {recentLogs.map((log) => (
                  <div
                    key={log.id}
                    className="bg-[#121212] rounded-lg p-4 border border-gray-800"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          log.status === 'success' ? 'bg-green-500' : 'bg-red-500'
                        }`} />
                        <span className="text-[#00FF00] font-mono text-sm">{log.action}</span>
                      </div>
                      <span className="text-xs text-gray-500">{log.timestamp}</span>
                    </div>
                    <p className="text-gray-400 text-sm">User: {log.user}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#1E1E1E] rounded-xl p-6 border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-[#00FF00]" size={24} />
                <h2 className="text-xl font-semibold text-white">System Status</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-[#121212] rounded-lg p-4 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">API Server</span>
                    <span className="px-2 py-1 bg-green-900 text-green-300 rounded text-xs font-medium">
                      Online
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }} />
                  </div>
                </div>

                <div className="bg-[#121212] rounded-lg p-4 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Database</span>
                    <span className="px-2 py-1 bg-green-900 text-green-300 rounded text-xs font-medium">
                      Healthy
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>

                <div className="bg-[#121212] rounded-lg p-4 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Storage</span>
                    <span className="px-2 py-1 bg-yellow-900 text-yellow-300 rounded text-xs font-medium">
                      Warning
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 bg-[#1E1E1E] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="text-[#00FF00]" size={24} />
              <h2 className="text-xl font-semibold text-white">Quick Actions</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <button className="px-4 py-3 bg-[#121212] border border-gray-800 text-[#00FF00] rounded-lg hover:bg-gray-800 transition-all min-h-[44px]">
                Generate API Key
              </button>
              <button className="px-4 py-3 bg-[#121212] border border-gray-800 text-[#00FF00] rounded-lg hover:bg-gray-800 transition-all min-h-[44px]">
                View Audit Logs
              </button>
              <button className="px-4 py-3 bg-[#121212] border border-gray-800 text-[#00FF00] rounded-lg hover:bg-gray-800 transition-all min-h-[44px]">
                Manage Permissions
              </button>
              <button className="px-4 py-3 bg-[#121212] border border-gray-800 text-[#00FF00] rounded-lg hover:bg-gray-800 transition-all min-h-[44px]">
                System Backup
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default EspaceDeveloppeur
