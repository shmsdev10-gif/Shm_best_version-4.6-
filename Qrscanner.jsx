import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, QrCode } from 'lucide-react'

const QRScanner = ({ onSuccess, onClose }) => {
  const [scanning, setScanning] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      const mockQR = `QR${Math.floor(100000 + Math.random() * 900000)}`
      setScanning(false)
      setTimeout(() => onSuccess(mockQR), 500)
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
          <h3 className="text-xl font-bold text-gray-900">Scanner le code QR</h3>
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
                scale: scanning ? [1, 1.1, 1] : 1,
                rotate: scanning ? [0, 5, -5, 0] : 0
              }}
              transition={{
                duration: 2,
                repeat: scanning ? Infinity : 0
              }}
              className="w-32 h-32 bg-purple-100 rounded-xl flex items-center justify-center"
            >
              <QrCode className="text-purple-600" size={64} />
            </motion.div>
          </div>

          <p className="text-gray-600">
            {scanning
              ? 'Positionnez le code QR devant la caméra...'
              : 'Code QR détecté !'}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default QRScanner
