import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
// import 'antd/dist/antd.css';
import { AppProvider } from './context'
import Home from './pages/Home/Home.jsx'
import BookDetails from './components/BookDetails/BookDetails'
import SearchResult from './components/SearchResult/SearchResult'
import BookList from './pages/BookList/BookList'
import { CartProvider } from './cartContext'
import AddCart from './pages/Cart/AddCart'
import Navbar from './components/Navbar/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <CartProvider>
    <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='book' element={<SearchResult />}/>
          <Route path='/book/:id' element={<BookDetails />}/>
          <Route path="/booklist/:category" element={<BookList />} />
          <Route path='cart' element={<AddCart/>}/>
      </Routes>
    </BrowserRouter>
    </React.StrictMode>,
    </CartProvider>
  </AppProvider>
 
)
