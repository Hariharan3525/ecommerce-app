import { useState } from "react"

const Login = () => {
  const[state,setState] = useState('Sign Up')
  const onSubmitHandler = async (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-8 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{state}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {state === 'Login' ? '': <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="Name" required/>}
      <input type="email" className="w-full px-3 py-2 border border-gray-800" placeholder="Email" required/>
      <input type="password" className="w-full px-3 py-2 border border-gray-800" placeholder="Password" required/>
      <div className="w-full flex justify-between text-md mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {state === 'Login' ? <p onClick={()=>setState('Sign Up')} className="cursor-pointer">Create Account</p> : <p onClick={()=>setState('Login')} className="cursor-pointer">Login Here</p>}
      </div>
      <button className="border border-black font-light px-8 py-2 mt-4 text-md hover:bg-black hover:text-white transition-all duration-500">{state === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login