import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../Redux/Features/Auth/authApi";
import { setUser } from "../../Redux/Features/Auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const Navigate = useNavigate();
  const [login] = useLoginMutation();
  // const {loginUser,signInGoogle,signInGithub} = useContext(AuthContext)
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const res = await login({ email, password });
    if (res?.data?.success) {
      const user = verifyToken(res.data.data.accessToken);
      dispatch(setUser({ user: user, token: res.data.data.accessToken }));
      Swal.fire({
        title: "You logged in successfully!",
        icon: "success",
      });
      Navigate(location?.state ? location?.state : "/");
    }
  };
  // const googleSignIn=()=>{
  //   signInGoogle()
  //   .then(res=>{
  //     console.log(res.user);
  //     Swal.fire({
  //       title: "You logged in successfully!",
  //       icon: "success"
  //     });
  //     Navigate(location?.state ? location?.state : '/')
  //   })
  //   .catch(err=>{
  //     setError(err.message)
  //     console.log(err);
  //   })
  // }
  // const githubSignUp = ()=>{
  //   signInGithub()
  //   .then(res=>{
  //     console.log(res.user);
  //     Swal.fire({
  //       title: "You logged in successfully!",
  //       icon: "success"
  //     });
  //     Navigate(location?.state ? location?.state : '/')

  //   })
  //   .catch(err=>{
  //     setError(err.message)
  //     console.log(err);
  //   })
  // }
  return (
    <div className="hero min-h-screen ">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row w-full">
        <div
          className="text-center space-y-10 lg:text-left lg:w-1/2"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h1 className="text-xl md:text-2xl lg:text-5xl  text-black font-bold">
            <span className="text-blue-700">Welcome Back!</span> Login to Book
            Your Stay
          </h1>
          <p className="md:text-lg lg:text-xl  font-bold text-black">
            If you Do not have account <br></br>you can{" "}
            <Link
              to={"/signUp"}
              className="text-blue-700 text-lg md:text-xl lg:text-2xl underline"
            >
              Register here
            </Link>
          </p>
        </div>
        <div className="card flex-shrink-0 lg:w-1/2 max-w-lg  bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              {/* <label className="label">
                  <span className="label-text">Email</span>
                </label> */}
              <h1 className="text-center text-xl md:text-3xl lg:text-5xl mb-8 text-black font-bold">
                Login Now
              </h1>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="input bg-base-200 py-4 rounded-2xl"
                required
              />
              <br></br>
            </div>
            <div className="form-control">
              {/* <label className="label">
                  <span className="label-text">Password</span>
                </label> */}
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="input bg-base-200 rounded-2xl"
                required
              />

              <label className="label flex justify-end">
                <a href="#" className=" link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <p className="text-red-500 text-lg py-2">{error}</p>
              <input
                className="btn bg-blue-700 text-white rounded-2xl"
                type="submit"
                value="Login"
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              />
            </div>
            <div className="text-center">
              <h3 className="py-3 md:text-lg lg:text-xl font-bold">
                --- Or Login with ---
              </h3>
              <div className="flex gap-4 w-1/3 mx-auto">
                <button>
                  <img
                    className="w-[80px] hidden lg:inline  px-4 py-2 rounded-xl border"
                    src="https://i.ibb.co/DYwpj91/github.png"
                    alt=""
                  />
                </button>
                <button>
                  {" "}
                  <img
                    className="lg:w-[80px]  px-4 py-2 rounded-xl border"
                    src="https://i.ibb.co/zr80yxz/google.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
