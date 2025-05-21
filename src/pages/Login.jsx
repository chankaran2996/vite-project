import Input from 'costuminputg'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handileSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        setEmail("")
        setPassword("")
        navigate("/dashboard")
    }
    return (
        <center>
            <div className="items-center justify-center w-150 h-full mt-50 bg-gray-100">
                <form onSubmit={handileSubmit}>
                    <Input
                        type='email'
                        label='Email address'
                        placeholder='Email address'
                        className='w-[80%] h-10 border border-gray-300 rounded-md px-4'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type='password'
                        label='Password'
                        placeholder='Enter your password'
                        className='w-[80%] h-10 border border-gray-300 rounded-md px-4'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='bg-blue-600 w-full mt-4' type='submit'>Login</button>
                </form>
                <p>New user? <Link className=' underline text-blue-700' to="/register">Register</Link> </p>
            </div>
        </center>
    )
}

export default Login



