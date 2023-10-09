import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { BiDollar } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";


const Services = ({event}) => {
    const {id,name,image,price,date,view,shortDescription}=event
    console.log(event)
    return (
        // text-[#5e5e5e]
        <div className="my-5">
                <div className="bg-[#2d3e50] text-[#fff] shadow-xl">
                    <figure><img className="w-full h-60" src={image} alt="Shoes" /></figure>
                    <div className="text-justify space-y-4 p-4">
                        <h2 className="text-[#fff] text-lg font-bold">{name}</h2>
                        <p className="text-[#fff]">{shortDescription.length  > 200 ? `${shortDescription.substring(0, 200)}...`: shortDescription}</p>
                        <div className="card-actions justify-start">


                            <Link to={`/serviceDetails/${id}`}>
                            <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Read More</button>
                            </Link>
                       
                        </div>
                        <hr />
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <p className="flex flex-row text-lg justify-center items-center px-3 font-semibold text-[#fff]"> <CiCalendarDate className="pr-1"></CiCalendarDate><span>{date}</span></p>
                            </div>
                            <div className="flex flex-row">
                                <span className="flex flex-row text-lg justify-center items-center px-3 font-semibold text-[#fff]">  <BsEye className="pr-1"></BsEye><span>{view}</span></span>
                                <span className="flex flex-row text-lg justify-center items-center font-semibold text-[#fff]"><BsCurrencyDollar className="pr-1" ></BsCurrencyDollar><span>{price}</span></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        
    );
};

export default Services;