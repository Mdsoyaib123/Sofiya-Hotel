import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="py-10">
            <img className="w-1/2 h-[600px] mx-auto" src="https://i.ibb.co/ct0Mzp0/3819552.jpg" alt="" />
            <Link className="flex justify-center" to={'/'}>
                <button className="btn btn-accent">Go Back Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;