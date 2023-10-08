import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
const {signIn}=useContext(AuthContext)
const [errors, setErrors] = useState('')
const [emailError, setEmailError] = useState('')
const [passwordError, setPasswordError] = useState('')

const location=useLocation()
const navigate=useNavigate()
    const handleLogin=e=>{
        e.preventDefault()
        const form=new FormData(e.currentTarget)
        const email=form.get('email')
        const password=form.get('password')
        console.log(email,password)
        setEmailError('')
        setPasswordError('')

        if (email.valueOf() === "") {
            setEmailError('Email field is required')
          }
          if (password.valueOf() === "") {
            setPasswordError('Password field is required!')
            return;
          }

        signIn(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(location?.state? location.state : '/')
        })
        .catch(error=>{
            // console.error(error)
            setErrors('Check password or email dont match!',error)
           
        })
        


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full">

                <div className="card w-96  shadow-2xl bg-[#2d3e50] ">
                    
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-center text-[#fff] text-3xl font-semibold">Login</h1>
                        {
                           errors && <p className="text-lg text-red-900 font-medium">{errors}</p> 
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="text-[#fff]">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered"  />
                        </div>
                        {
                            emailError && <p className="text-lg text-red-900 font-medium">{emailError}</p>
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="text-[#fff]">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered"  />
                          <div>
                          {
                            passwordError && <p className="text-lg text-red-900 font-medium">{passwordError}</p>
                        }
                          </div>
                            <label className="label">
                                <a href="#" className="text-[#fff] link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Login</button>
                            <p className="py-3 text-[#fff] text-center font-medium">Dont have account? <Link className="underline text-green-300" to={"/register"}>Register Now</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;