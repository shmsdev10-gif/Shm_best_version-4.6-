import { createContext, useContext, useState } from 'react'

const SidebarContext = createContext()

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within SidebarProvider')
  }
  return context
}

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => setIsOpen(prev => !prev)
  const closeSidebar = () => setIsOpen(false)
  const openSidebar = () => setIsOpen(true)

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar, closeSidebar, openSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContext
