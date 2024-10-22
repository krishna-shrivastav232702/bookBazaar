import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import MyFooter from './components/MyFooter'
import { CartProvider } from './components/ContextReducer'
import { FavoritesProvider } from './components/FavoriteContext'

function App() {

  return (
    <FavoritesProvider>
      <CartProvider>
        <Navbar />
        <div className='min-h-screen'>
          <Outlet />
        </div>
        <MyFooter />
      </CartProvider>
    </FavoritesProvider>
  )
}

export default App
