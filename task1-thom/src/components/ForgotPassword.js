import React, {useRef, useState} from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false) 

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        }catch{
            setError('Failed to Reset Password')
        }
        setLoading(false)
    }
    return (
        <div>
             <section className="App h-screen w-full flex justify-center items-center bg-green-500">
                <div className="w-full max-w-md bg-white" >
                    <h1 className = "px-8 pb-8 block font-bold text-3xl text-center align-middle">Password Reset</h1>
                    {error && <div variant = "danger" className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{error}</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
                    </div>}
                    {message && <div variant = "success" className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Holy smokes! </strong>
                    <span className="block sm:inline">{message}</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
                    </div>}
                    <form action="" onSubmit={handleSubmit} className= "bg-white shadow-md rounded px-8 py-8 pt-8">
                    <div className="px-4 pb-4">
                        <label htmlFor="email" className="text-sm block font-bold  pb-2">EMAIL ADDRESS</label>
                        <input type="email" name="email" ref={emailRef}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Johnbull@example.com" />
                    </div>
                    <div className= "items-center text-center">
                        <button disabled={loading}  type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Reset Password</button>
                    </div>
                    </form>
                    <div className= "items-center px-4 bg-white">
                     <Link to="/login" className="underline">Login</Link>
                    </div>
                    <div className= "items-center px-4 bg-white">
                        Need an account? <Link to="/signup" className="underline">Sign Up</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
