import { motion } from 'framer-motion'
import { Music, Search, Play, Download, Heart } from 'lucide-react'
import { useState } from 'react'

const Anachid = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [songs] = useState([
    {
      id: 1,
      title: 'نشيد الكشافة',
      artist: 'الفرقة النحاسية',
      category: 'أناشيد وطنية',
      duration: '3:45',
      liked: false
    },
    {
      id: 2,
      title: 'يا بلادي',
      artist: 'الفرقة النحاسية',
      category: 'أناشيد وطنية',
      duration: '4:20',
      liked: true
    },
    {
      id: 3,
      title: 'نحن الكشافة',
      artist: 'الفرقة النحاسية',
      category: 'أناشيد كشفية',
      duration: '3:15',
      liked: false
    },
    {
      id: 4,
      title: 'في الطبيعة',
      artist: 'الفرقة النحاسية',
      category: 'أناشيد كشفية',
      duration: '4:00',
      liked: false
    }
  ])

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">الأناشيد</h1>
            <p className="text-gray-600">مجموعة من الأناشيد الكشفية والوطنية</p>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="ابحث عن نشيد..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent min-h-[44px]"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200">
              {filteredSongs.map((song, index) => (
                <motion.div
                  key={song.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <button className="flex-shrink-0 w-12 h-12 bg-[#6B3FA0] rounded-full flex items-center justify-center text-white hover:bg-[#5a2f85] transition-all">
                        <Play size={20} />
                      </button>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">
                          {song.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>{song.artist}</span>
                          <span>•</span>
                          <span>{song.category}</span>
                          <span>•</span>
                          <span>{song.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-600 hover:text-red-500 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                        <Heart size={20} fill={song.liked ? 'currentColor' : 'none'} className={song.liked ? 'text-red-500' : ''} />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-[#6B3FA0] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                        <Download size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {filteredSongs.length === 0 && (
            <div className="text-center py-12">
              <Music className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600">لم يتم العثور على أناشيد</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Anachid
