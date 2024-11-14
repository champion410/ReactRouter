import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx' 
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator.jsx'
import CurrencyConvertor from './components/CurrencyConvertor/CurrencyConvertor.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'
import User from './components/User/User.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='header' element={<Header />}/>
      <Route path='' element={<Home />}/>
      <Route path='password-generator' element={<PasswordGenerator />}/>
      <Route path='currency-convertor' element={<CurrencyConvertor />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route 
        loader = {githubInfoLoader}
        path='github' 
        element={<Github />}/>
      <Route path='user/' element={<User />}>
        <Route path=':userid' element={<User />}/>
      </Route>
      <Route path='*' element={<div>Not Found</div>}/>
      
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)