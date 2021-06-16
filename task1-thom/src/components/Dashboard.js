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
