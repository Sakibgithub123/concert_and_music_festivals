import bannerImg from "../../assets/crowd-1056764_1280.jpg"
import bannerVdo from "../../assets/rotting_christ_-_1275 (360p).mp4"

const Banner = () => {
    return (
        <div className="hero min-h-screen font-montserrat" style={{backgroundImage: `url(${bannerImg})`}}>
     
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Music For Life, Music For Happiness</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
    </div>
  </div>
</div>
    );
};

export default Banner;