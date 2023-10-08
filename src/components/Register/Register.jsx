import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          
          <div className="card  w-full  shadow-2xl bg-[#2d3e50] text-[#fff]">
              <h1 className="text-center">Register Now</h1>
            <form className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Enter name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Enter email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Register</button>
                <p className="py-3">Have you any account? <Link className="underline" to={"/login"}>Login Now</Link> </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;