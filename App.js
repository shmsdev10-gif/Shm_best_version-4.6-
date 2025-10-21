import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Navbar from './components/Navbar'
import CategorySelection from './pages/CategorySelection'
import AuthPage from './pages/AuthPage'
import DashboardLayout from './components/DashboardLayout'
import MonEspace from './pages/MonEspace'
import Programme from './pages/Programme'
import Anachid from './pages/Anachid'
import Rapports from './pages/Rapports'
import Marketplace from './pages/Marketplace'
import Idees from './pages/Idees'
import EspaceDeveloppeur from './pages/EspaceDeveloppeur'

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth()
  return currentUser ? children : <Navigate to="/" />
}

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<CategorySelection />} />
            <Route path="/auth/:category" element={<AuthPage />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Navigate to="mon-espace" replace />} />
              <Route path="mon-espace" element={<MonEspace />} />
              <Route path="programme" element={<Programme />} />
              <Route path="anachid" element={<Anachid />} />
              <Route path="rapports" element={<Rapports />} />
              <Route path="marketplace" element={<Marketplace />} />
              <Route path="idees" element={<Idees />} />
              <Route path="espace-developpeur" element={<EspaceDeveloppeur />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
