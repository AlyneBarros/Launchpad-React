import './App.css'
import AppRoutes from './Router'
import { AuthProvider } from './contexts/auth'


function App() {
 
  return (
    <AuthProvider>
    <AppRoutes />
    </AuthProvider>
  )
}

export default App
