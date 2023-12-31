import img1 from "../../assets/band-4671748_1280.jpg"
import img2 from "../../assets/band-4823341_1280.jpg"
import img3 from "../../assets/concert-2527495_1280.jpg"
import img4 from "../../assets/crowd-1056764_1280.jpg"
import img5 from "../../assets/hands-4212584_1280.jpg"
import img6 from "../../assets/img9.jpg"
import { CiCalendarDate } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const NearYou = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5 font-montserrat">
                <div className="bg-[#2d3e50] text-[#fff] shadow-xl flex flex-col lg:flex-row">
                    <figure><img className="w-full h-60 lg:h-full" src={img1} alt="Shoes" /></figure>
                    <div className="text-justify space-y-4 p-4 lg:w-96">
                        <h2 className="text-[#fff] text-lg font-bold">Latin Salsa Fiesta</h2>
                        <p className="text-[#fff]"> Music is a universal language that transcends boundaries and cultures. It has the power to evoke emotions, from joy and nostalgia to melancholy and introspection. Through melody and rhythm, music can tell stories and convey words alone cannot. Whether it's the
                            music has a profound impact on our lives.</p>
                        <div className="card-actions justify-start">

                            {/* <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Read More</button> */}

                        </div>
                        <hr />
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <p className="flex flex-row text-lg justify-center items-center px-3 font-semibold text-[#fff]"> <CiCalendarDate className="pr-1"></CiCalendarDate><span>15 Nov 2023</span></p>
                            </div>
                            <div className="flex flex-row">
                                <span className="flex flex-row text-lg justify-center items-center px-3 font-semibold text-[#fff]">  <IoLocationOutline className="pr-1"></IoLocationOutline><span>Dhaka</span></span>
                                <span className="flex flex-row text-lg justify-center items-center font-semibold text-[#fff]"><BsCurrencyDollar className="pr-1" ></BsCurrencyDollar><span>23.34</span></span>
                            </div>
                        </div>
                         <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Buy Ticket</button>
                    </div>
                </div>
           
          
                <div className="bg-[#2d3e50] text-[#fff] shadow-xl flex flex-col lg:flex-row">
                    <figure><img className="w-full h-60 lg:h-full" src={img2} alt="Shoes" /></figure>
                    <div className="text-justify space-y-4 p-4 lg:w-96">
                        <h2 className="text-[#fff] text-lg font-bold">Latin Salsa Fiesta</h2>
                        <p className="text-[#fff]"> Music is a universal language that transcends boundaries and cultures. It has the power to evoke emotions, from joy and nostalgia to melancholy and introspection. Through melody and rhythm, music can tell stories and convey words alone cannot. Whether it's the
                            music has a profound impact on our lives.</p>
                        <div className="card-actions justify-start">

                            {/* <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Read More</button> */}

                        </div>
                        <hr />
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <p className="flex flex-row text-lg justify-center items-center px-3 font-semibold text-[#fff]"> <CiCalendarDate className="pr-1"></CiCalendarDate><span>15 Nov 2023</span></p>
                            </div>
                            <div className="flex flex-row">
                                <span className="flex flex-row text-lg justify-center items-center px-3 font-semibold text-[#fff]">  <IoLocationOutline className="pr-1"></IoLocationOutline><span>Sylhet</span></span>
                                <span className="flex flex-row text-lg justify-center items-center font-semibold text-[#fff]"><BsCurrencyDollar className="pr-1" ></BsCurrencyDollar><span>23.34</span></span>
                            </div>
                        </div>
                        <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Buy Ticket</button>
                    </div>
                </div>
         
     
                <div className="bg-[#2d3e50] text-[#fff] shadow-xl flex flex-col lg:flex-row">
                    <figure><img className="w-full h-60 lg:h-full" src={img3} alt="Shoes" /></figure>
                    <div className="text-justify space-y-4 p-4 lg:w-96">
                        <h2 className="text-[#fff] text-lg font-bold">Latin Salsa Fiesta</h2>
                        <p className="text-[#fff]"> Music is a universal language that transcends boundaries and cultures. It has the power to evoke emotions, from joy and nostalgia to melancholy and introspection. Through melody and rhythm, music can tell stories and convey words alone cannot. Whether it's the
                            music has a profound impact on our lives.</p>
                        <div className="card-actions justify-start">

                            {/* <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Read More</button> */}

                        </div>
                        <hr />
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <p className="flex flex-row text-lg justify-center items-center px-3 font-semibold text-[#fff]"> <CiCalendarDate className="pr-1"></CiCalendarDate><span>15 Nov 2023</span></p>
                            </div>
                            <div className="flex flex-row">
                                <span className="flex flex-row text-lg justify-center items-center px-3 font-semibold text-[#fff]">  <IoLocationOutline className="pr-1"></IoLocationOutline><span>Khulna</span></span>
                                <span className="flex flex-row text-lg justify-center items-center font-semibold text-[#fff]"><BsCurrencyDollar className="pr-1" ></BsCurrencyDollar><span>23.34</span></span>
                            </div>
                        </div>
                        <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Buy Ticket</button>
                    </div>
                </div>
           
       
                <div className="bg-[#2d3e50] text-[#fff] shadow-xl flex flex-col lg:flex-row">
                    <figure><img className="w-full h-60 lg:h-full" src={img4} alt="Shoes" /></figure>
                    <div className="text-justify space-y-4 p-4 lg:w-96">
                        <h2 className="text-[#fff] text-lg font-bold">Latin Salsa Fiesta</h2>
                        <p className="text-[#fff]"> Music is a universal language that transcends boundaries and cultures. It has the power to evoke emotions, from joy and nostalgia to melancholy and introspection. Through melody and rhythm, music can tell stories and convey words alone cannot. Whether it's the
                            music has a profound impact on our lives.</p>
                        <div className="card-actions justify-start">

                            {/* <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Read More</button> */}

                        </div>
                        <hr />
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <p className="flex flex-row text-lg justify-center items-center px-3 font-semibold text-[#fff]"> <CiCalendarDate className="pr-1"></CiCalendarDate><span>15 Nov 2023</span></p>
                            </div>
                            <div className="flex flex-row">
                                <span className="flex flex-row text-lg justify-center items-center px-3 font-semibold text-[#fff]">  <IoLocationOutline className="pr-1"></IoLocationOutline><span>Barisal</span></span>
                                <span className="flex flex-row text-lg justify-center items-center font-semibold text-[#fff]"><BsCurrencyDollar className="pr-1" ></BsCurrencyDollar><span>23.34</span></span>
                            </div>
                        </div>
                        <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Buy Ticket</button>
                    </div>
                </div>
          
          
                <div className="bg-[#2d3e50] text-[#fff] shadow-xl flex flex-col lg:flex-row">
                    <figure><img className="w-fullh-60 lg:h-full" src={img5} alt="Shoes" /></figure>
                    <div className="text-justify space-y-4 p-4 lg:w-96">
                        <h2 className="text-[#fff] text-lg font-bold">Latin Salsa Fiesta</h2>
                        <p className="text-[#fff]"> Music is a universal language that transcends boundaries and cultures. It has the power to evoke emotions, from joy and nostalgia to melancholy and introspection. Through melody and rhythm, music can tell stories and convey words alone cannot. Whether it's the
                            music has a profound impact on our lives.</p>
                        <div className="card-actions justify-start">

                            {/* <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Read More</button> */}

                        </div>
                        <hr />
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <p className="flex flex-row text-lg justify-center items-center px-3 font-semibold text-[#fff]"> <CiCalendarDate className="pr-1"></CiCalendarDate><span>15 Nov 2023</span></p>
                            </div>
                            <div className="flex flex-row">
                                <span className="flex flex-row text-lg justify-center items-center px-3 font-semibold text-[#fff]">  <IoLocationOutline className="pr-1"></IoLocationOutline><span>Chittagong</span></span>
                                <span className="flex flex-row text-lg justify-center items-center font-semibold text-[#fff]"><BsCurrencyDollar className="pr-1" ></BsCurrencyDollar><span>23.34</span></span>
                            </div>
                        </div>
                        <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Buy Ticket</button>
                    </div>
                </div>
        
          
                <div className="bg-[#2d3e50] text-[#fff] shadow-xl flex flex-col lg:flex-row">
                    <figure><img className="w-full h-60 md:h-full" src={img6} alt="Shoes" /></figure>
                    <div className="text-justify space-y-4 p-4 lg:w-96">
                        <h2 className="text-[#fff] text-lg font-bold">Latin Salsa Fiesta</h2>
                        <p className="text-[#fff]"> Music is a universal language that transcends boundaries and cultures. It has the power to evoke emotions, from joy and nostalgia to melancholy and introspection. Through melody and rhythm, music can tell stories and convey words alone cannot. Whether it's the
                            music has a profound impact on our lives.</p>
                        <div className="card-actions justify-start">

                            {/* <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Read More</button> */}

                        </div>
                        <hr />
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <p className="flex flex-row text-lg justify-center items-center px-3 font-semibold text-[#fff]"> <CiCalendarDate className="pr-1"></CiCalendarDate><span>15 Nov 2023</span></p>
                            </div>
                            <div className="flex flex-row">
                                <span className="flex flex-row text-lg justify-center items-center px-3 font-semibold text-[#fff]">  <IoLocationOutline className="pr-1"></IoLocationOutline><span>Rangpur</span></span>
                                <span className="flex flex-row text-lg justify-center items-center font-semibold text-[#fff]"><BsCurrencyDollar className="pr-1" ></BsCurrencyDollar><span>23.34</span></span>
                            </div>
                        </div>
                        <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Buy Ticket</button>
                    </div>
                </div>
            </div>
    );
};

export default NearYou;