import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const DashboardLayout = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50" dir="rtl">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
