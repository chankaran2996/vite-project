import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Input from 'costuminputg'

const Register = () => {

       const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name,setName] = useState("")
    const [confirmPasssword , setConfirmPasssword] = useState("")
    const[num, setNum] = useState("")

    const navigate = useNavigate()

    const handileSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(password)
        console.log(confirmPasssword)
        console.log(num)
        setName("")
        setEmail("")
        setPassword("")
        setConfirmPasssword("")
        setNum("")
        navigate("/")

    }


    return(
        <div>
            <center>
            <div className="items-center justify-center w-150 h-full mt-50 bg-gray-100">
                <form onSubmit={handileSubmit}>
                    <Input
                        type='text'
                        label='User name'
                        placeholder='Enter your name'
                        className='w-[80%] h-10 border border-gray-300 rounded-md px-4'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        type='email'
                        label='Email address'
                        placeholder='Email address'
                        className='w-[80%] h-10 border border-gray-300 rounded-md px-4'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type='number'
                        label='Phone number'
                        placeholder='Enter your number'
                        className='w-[80%] h-10 border border-gray-300 rounded-md px-4'
                        value={num}
                        onChange={(e) => setNum(e.target.value)}
                    />
                    <Input
                        type='password'
                        label='Password'
                        placeholder='Enter your password'
                        className='w-[80%] h-10 border border-gray-300 rounded-md px-4'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        type='password'
                        label='Confirm Password'
                        placeholder='Enter your password'
                        className='w-[80%] h-10 border border-gray-300 rounded-md px-4'
                        value={confirmPasssword}
                        onChange={(e) => setConfirmPasssword(e.target.value)}
                    />
                    <button className='bg-blue-600 w-full mt-4' type='submit'>Register</button>
                </form>
                <p>Eisxting user? <Link className=' underline text-blue-700' to="/">Login</Link> </p>
            </div>
        </center>
        </div>
    )
}

export default Register