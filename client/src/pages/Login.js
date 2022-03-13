import React,{ useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../redux/userSlice'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const[error,setError] = useState(false)
  const user= useSelector(state=>state.users.value.others)
  const status = useSelector(state=>state.users.status)

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    const data={
      password,
      username
    }
    
    
    if(password && username){
      dispatch(login(data))
      if(status==='error'){
        
            setError(true)
      } 
      else{
        setError(false)
        sessionStorage.setItem("id",user._id)
      sessionStorage.setItem("username",user.username)
      }
      
      
      if(user!==undefined){
        navigate("/")
      }
      
      
      
    }
    
    
    
  }

  useEffect(()=>{
    console.log(username)
    console.log(user)
  },[])
  return (
    
       
          <div className="flex flex-row w-screen">
          <div className="w-[30rem]">
          <img src="https://img.freepik.com/free-vector/customer-woman-shopping-with-barrow-concept_40876-2550.jpg?w=740" className="object-fit  pt-4 ml-12" />
          </div>
         

              
       <div className="pt-[8rem] ml-[10rem] w-[40rem]">
         <form className="pt-[2rem]" onSubmit={handleSubmit}>
           {error?<p className="font-semibold text-sm text-rose-600">Wrong Credentails</p>:""} 
           <div className="mb-8">
           <label className="text-lg  font-semibold ">USERNAME</label>
           <br/>
           <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="USERNAME" className="input input-bordered w-full mt-2 max-w-xs"/>
           </div>
           <div className="mb-8">
           <label className="text-lg  font-semibold ">PASSWORD</label>
           <br/>
           <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="PASSWORD" className="input input-bordered w-full mt-2 max-w-xs"/>
            </div>
            <p className="font-medium text-slate-500 ">Do not have an account? <Link to="/" className="text-blue-600 hover:underline">Register</Link></p>
            <br/>
            <button type="submit" className={`btn btn-active btn-wide bg-teal-700 hover:bg-teal-900 ${password && username?"":"btn-disabled text-white opacity-40"} `}>LOGIN</button>
         </form>
         </div>
         </div>
     
  
  )
}

export default Login