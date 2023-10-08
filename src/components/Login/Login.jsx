import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">

                <div className="card  w-full  shadow-2xl bg-[#2d3e50] text-[#fff]">
                    <h1 className="text-center">Login</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Login</button>
                            <p className="py-3">Create account? <Link className="underline" to={"/register"}>Register Now</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;