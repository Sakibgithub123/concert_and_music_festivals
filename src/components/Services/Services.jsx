import { Link } from "react-router-dom";


const Services = ({event}) => {
    const {id,name,image,price,shortDescription}=event
    console.log(event)
    return (
        // text-[#5e5e5e]
        <div className="my-5">
                <div className="bg-[#2d3e50] text-[#fff] shadow-xl">
                    <figure><img className="w-full h-60" src={image} alt="Shoes" /></figure>
                    <div className="text-justify space-y-4 p-4">
                        <h2 className="text-[#fff] text-lg font-bold">{name}</h2>
                        <p className="text-[#fff]">{shortDescription.length  > 30 ? `${shortDescription.substring(0, 30)}...`: shortDescription}</p>
                        <div className="card-actions justify-start">


                            <Link to={`/serviceDetails/${id}`}>
                            <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Read More</button>
                            </Link>
                       
                        </div>
                        <hr />
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <p>25 Jun 2015</p>
                            </div>
                            <div>
                                <span>59</span>
                                <span>{price}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        
    );
};

export default Services;