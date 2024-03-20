import axios from "axios";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateReview = () => {
    const loader = useLoaderData()
    const {room_name}=loader
    const navigate =useNavigate()


    const handleReview =(e)=>{
        e.preventDefault()
        const form = e.target
        const userName = form.userName.value;
        const rating = form.rating.value ;
        const comment = form.comment.value ;
        const date = form.date.value 
        const ReviewData ={userName,rating,comment,date}
        console.log(ReviewData);

        axios.put(`https://assainment-11-server.vercel.app/api/v1/rooms?name=${room_name}`,ReviewData)
        .then(res=>{
            console.log(res.data);
            Swal.fire({
                title: "You added a review successfully!",
                icon: "success"
              });
              navigate('/myBooking')
        })
    }
    return (
        <div className="w-full md:w-1/2 mx-auto mt-5 py-10 px-10">
            <Helmet>
                <title>Review</title>
            </Helmet>
            <form onSubmit={handleReview} className="space-y-5">
                <input className="border border-black w-full px-5 py-3 "  type="text" placeholder="Enter your userName" name="userName" id="" /><br></br>
                <input  className="border border-black px-5 w-full py-3" type="text" placeholder="Enter rating" name="rating" id="" /><br></br>
                <textarea  className="border border-black px-5 w-full " name="comment" placeholder="Type your comment " id="" cols="30" rows="8"></textarea><br></br>
                <input  className="border border-black w-full px-2 py-3" type="date" name="date"  id="" />
                <input  className="btn w-full btn-accent" type="submit" value="Add Review"  />

            </form>
        </div>
    );
};

export default UpdateReview;