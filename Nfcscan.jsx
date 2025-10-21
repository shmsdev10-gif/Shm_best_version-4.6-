import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, Wifi } from 'lucide-react'

const NFCScanner = ({ onSuccess, onClose }) => {
  const [scanning, setScanning] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      const mockNFC = `NFC${Math.floor(100000 + Math.random() * 900000)}`
      setScanning(false)
      setTimeout(() => onSuccess(mockNFC), 500)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl p-8 max-w-md w-full"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">Scanner la puce NFC</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="text-center">
          <div className="relative inline-block mb-6">
            <motion.div
              animate={{
                scale: scanning ? [1, 1.2, 1] : 1,
                opacity: scanning ? [1, 0.5, 1] : 1
              }}
              transition={{
                duration: 1.5,
                repeat: scanning ? Infinity : 0
              }}
              className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center"
            >
              <Wifi className="text-purple-600" size={64} />
            </motion.div>
          </div>

          <p className="text-gray-600">
            {scanning
              ? 'Approchez votre puce NFC...'
              : 'Puce détectée !'}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default NFCScanner
