
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Artist from "../Artist/Artist";
import TopSeller from "../TopSeller/TopSeller";



const Home = () => {
    const [events,setEvent]=useState([])
   

    useEffect(()=>{
        fetch('Events.json')
        .then(res =>res.json())
        .then(data=>setEvent(data))
       

    },[])
    return (
        <div className="font-montserrat">
            <Banner></Banner>
            <h3 className="text-center font-bold text-3xl my-5">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {
                    events.map(event=><Services key={event.id} event={event}></Services>)

                }
            </div>
            <h3 className="text-center font-bold text-3xl my-5">Trending Artists</h3>
            <Artist></Artist>

            <TopSeller></TopSeller>

            
        </div>
    );
};

export default Home;