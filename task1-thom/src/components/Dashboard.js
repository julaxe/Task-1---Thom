import React , {useState} from 'react'
import { useAuth} from '../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'

export default function Dashboard() {
    const [error,setError] = useState("")
    const {currentUser, logout} = useAuth()
    const history = useHistory()


    async function handleLogOut() {
        setError('')

        try {

            await logout()
            history.push('./login')
        }catch{
            setError("Failed to log out")
        }
    }

    return (
        <div className="App h-screen w-full flex justify-center items-center bg-green-500">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Holy smokes! </strong>
                    <span className="block sm:inline">{error}</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
                    </div>}
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Profile</div>
                    <p className="text-gray-700 text-base">
                    <strong>Email:</strong> {currentUser.email}
                    </p>
                    <Link to="/update-profile" type="button" className="underline">
                        Update Profile</Link>
                </div>
                <div className="px-6 pt-4 pb-2">
                <button variant="link" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLogOut}>Log Out</button>
                </div>
            </div>
        </div>
        
    )
}
