import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import {Routes,Route} from "react-router-dom"
import Add from './Pages/Add'
import List from './Pages/List'
import Orders from './Pages/Orders'
import { useState } from 'react'
import Login from './Components/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {
  const[token,setToken] = useState('')

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {token === "" ? <Login setToken={setToken} /> :
        <div>
        <Navbar />
        <hr />
        <div className='flex w-full'>
          <Sidebar />
          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
            <Routes>
              <Route path='/add' element={<Add />} />
              <Route path='/list' element={<List />} />
              <Route path='/orders' element={<Orders />} />
            </Routes>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default App