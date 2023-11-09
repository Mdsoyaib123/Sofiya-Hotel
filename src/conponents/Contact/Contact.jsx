import { Helmet } from 'react-helmet';
import { AiTwotoneMail,AiFillPhone } from 'react-icons/ai';
import Swal from 'sweetalert2';

const Contact = () => {
  const handleSubmit=()=>{
    Swal.fire({
      title: "You submit successfully",
      icon: "success"
    });
  }
    return (
        <div className=" md:flex  gap-4 py-20 lg:w-[1200px]  mx-auto">
           <Helmet>
            <title>Contact</title>
           </Helmet>
            <div className="w-1/2">
                <h1 className="text-7xl font-bold">We are here <br></br> to help you</h1>
               
                
              <div className='py-10'>
              <p className='flex items-center text-2xl py-4'><AiTwotoneMail></AiTwotoneMail>  <a href=''className='hover:text-red-500'>SofiyaHotel@gmail.com</a></p>
                <p className='flex items-center text-2xl'><AiFillPhone></AiFillPhone>  <a href='' className='hover:text-red-500'>94540-8439 </a></p>
              </div>
                
            </div>
            <div className="w-1/2 bg-base-200 p-10  rounded-2xl">
                <input className=' px-4 py-3 mb-6 rounded-md' type="name"placeholder='Your name' name="name" id="" />
                <input className=' ml-4 px-4 py-3 rounded' type="email" placeholder='Your email' name="name" id="" />
               <textarea className='mx-auto px-4'placeholder='your message' rows={4} cols={50}></textarea><br></br>
               <input onClick={handleSubmit} className='bg-red-500 cursor-pointer mt-4 px-4 py-2 text-white' type="submit" value="Submit Info" />
            </div>
        </div>
    );
};

export default Contact;