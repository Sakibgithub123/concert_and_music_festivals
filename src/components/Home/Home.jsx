
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";



const Home = () => {
    const [events,setEvent]=useState([])

    useEffect(()=>{
        fetch('Events.json')
        .then(res =>res.json())
        .then(data=>setEvent(data))

    },[])
    return (
        <div>
            <Banner></Banner>
            <h3 className="text-center font-bold text-3xl my-5">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {
                    events.map(event=><Services key={event.id} event={event}></Services>)

                }
            </div>
            
        </div>
    );
};

export default Home;