import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext, auth } from "../../Provider/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, signInGoogle, signInGithub } = useContext(AuthContext);

  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|[\]\\:;<>,.?/~]).{6,}$/.test(password)
    ) {
      setError(
        "password must be 6 characters and one  capital letter and  a special character"
      );
    } else {
      setError("");
      createUser(email, password)
        .then((res) => {
          console.log(res.user);
          form.reset();
          Swal.fire({
            title: "You successfully created account!",
            icon: "success",
          });

          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then()
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((err) => {
          setError(err.message);
          console.log(err);
        });
    }
  };
  const googleSignUp = () => {
    signInGoogle()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: "You successfully created account!",
          icon: "success",
        });
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  };
  const githubSignUp = () => {
    signInGithub()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: "You successfully created account!",
          icon: "success",
        });
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  };
  return (
    <div className="hero min-h-screen ">
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row w-full">
        <div
          className="text-center space-y-10 lg:text-left lg:w-1/2"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h1 className="text-2xl md:text-3xl lg:text-5xl  text-black font-bold">
            Create Your Account for{" "}
            <span className="text-blue-700 ">Special Deals</span>
          </h1>
          <p className="md:text-lg lg:text-xl  font-bold text-black">
            If you have already an account <br></br>you can{" "}
            <Link to={"/login"} className="underline text-blue-700 text-lg md:text-xl  lg:text-2xl">
              login here
            </Link>
          </p>
        </div>

        <div className="card  lg:w-1/2 max-w-lg  bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
            
              <h1 className="text-center text-xl md:text-3xl lg:text-5xl mb-8 text-black font-bold">
                Sign Up Now
              </h1>
              <div>
                <div
                  onClick={googleSignUp}
                  className="text-center cursor-pointer flex items-center justify-center gap-2 rounded-2xl font-bold bg-base-200 py-3 shadow-md "
                >
                  <img
                    className="w-[30px]"
                    src="https://i.ibb.co/KyscN1q/icons8-google-48.png"
                  />{" "}
                  Sign up with Google{" "}
                </div>
                <div
                  onClick={githubSignUp}
                  className="text-center cursor-pointer flex items-center justify-center gap-2 rounded-2xl font-bold bg-base-200 py-3 shadow-md my-5"
                >
                  <img
                    className="w-[30px]"
                    src="https://i.ibb.co/LQN0HBt/icons8-github-30.png"
                  />{" "}
                  Sign up with GitHube{" "}
                </div>
                <p className="text-center md:text-lg lg:text-xl py-7 font-bold">--Or--</p>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className="input bg-base-200 py-4 rounded-2xl"
                required
              />
              <br></br>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="input bg-base-200 py-4 rounded-2xl"
                required
              />{" "}
              <br></br>
            </div>
            <div className="form-control">
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
              <p className="text-red-500 py-2">{error}</p>
              <input
                className="btn bg-blue-700 text-white rounded-2xl"
                type="submit"
                value="Sign UP"
              />
            </div>
        
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
