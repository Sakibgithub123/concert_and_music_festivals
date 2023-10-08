import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
  const { createUser } = useContext(AuthContext)
  const [registerSuccess, setRegisterSuccess] = useState('')
  const [errors, setErrors] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    setErrors('')
    setNameError('')
    setEmailError('')
    setPasswordError('')
    if (name.valueOf() === "") {
      setNameError('Name field is required')
    }
    if (email.valueOf() === "") {
      setEmailError('Email field is required')
    }
    if (password.valueOf() === "") {
      setPasswordError('Password field is required!')
      return;
    }
    else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters!')
      return;

    }
    else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).+$/.test(password)) {
      setPasswordError(
        'Password must contain one uppercase,lowercase & special chracter!')
      return;

    }

    //create user
    createUser(email, password)
      .then(result => {
        console.log(result.user)
        setRegisterSuccess('User created Success')
      })
      .catch(error => {
        console.error(error)
        setErrors(error.message)

      })



    console.log(name, email, password)
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full">

        <div className="card  w-96  shadow-2xl bg-[#2d3e50]">


          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-center text-[#fff] text-3xl font-semibold">Register Now</h1>
            {
              registerSuccess && <p className="text-lg text-red-900 font-medium">{registerSuccess}</p>
            }
            {
              errors && <p className="text-lg text-red-900 font-medium">{errors}</p>
            }
            <div className="form-control">
              <label className="label">
                <span className="text-[#fff]">Name</span>
              </label>
              <input type="text" name="name" placeholder="Enter name" className="input input-bordered" />
            </div>
            {
              nameError && <p className="text-lg text-red-900 font-medium">{nameError}</p>
            }
            <div className="form-control">
              <label className="label">
                <span className="text-[#fff]">Email</span>
              </label>
              <input type="email" name="email" placeholder="Enter email" className="input input-bordered" required />
            </div>
            {
              emailError && <p className="text-lg text-red-900 font-medium">{emailError}</p>
            }
            <div className="form-control">
              <label className="label">
                <span className="text-[#fff]">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" />

            </div>

            {
              passwordError && <p className="text-lg text-red-900 font-medium">{passwordError}</p>
            }

            <div className="form-control mt-6">
              <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Register</button>
              <p className="py-3 text-[#fff] text-center font-medium">Have you any account? <Link className="underline text-green-300" to={"/login"}>Login Now</Link> </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;