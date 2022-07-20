import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Post from './Post'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Blog from './Blog'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post" element={<Post />} />
        <Route path="/blog/:id" element={<Blog/>} />
      </Routes>
    </Router>
  </React.StrictMode>
)
