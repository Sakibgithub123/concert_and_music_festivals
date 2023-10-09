import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img7.jpg"
import img4 from "../../assets/img4.jpg"
import img5 from "../../assets/img8.jpg"
import img6 from "../../assets/img9.jpg"

const Artist = () => {
    return (
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 my-5 font-montserrat">
          <div className="flex flex-row justify-center items-center gap-10">
            <div>
                <img className="rounded-full w-24 h-24 md:w-60 md:h-60"  src={img1} alt="" /> 
            </div>
            <div className="space-y-1 md:space-y-4">
                <h3 className="text-lg font-medium">Carton Caroot</h3>
                <h5 className="text-base font-medium">3.4k followers</h5>
                <button className="text-xs rounded bg-secondary  px-2 py-1 md:btn md:btn-active md:btn-secondary">Follow</button>
            </div>
        </div>
          <div className="flex flex-row justify-center items-center gap-10">
            <div>
                <img className="rounded-full w-24 h-24 md:w-60 md:h-60"  src={img2} alt="" /> 
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Gatsen Gate</h3>
                <h5 className="text-base font-medium">3.4k followers</h5>
                <button className="text-xs rounded bg-secondary  px-2 py-1 md:btn md:btn-active md:btn-secondary">Follow</button>
            </div>
        </div>
          <div className="flex flex-row justify-center items-center gap-10">
            <div>
                <img className="rounded-full w-24 h-24 md:w-60 md:h-60"  src={img3} alt="" /> 
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Bil Clumb</h3>
                <h5 className="text-base font-medium">3.4k followers</h5>
                <button className="text-xs rounded bg-secondary  px-2 py-1 md:btn md:btn-active md:btn-secondary">Follow</button>
            </div>
        </div>
          <div className="flex flex-row justify-center items-center gap-10">
            <div>
                <img className="rounded-full w-24 h-24 md:w-60 md:h-60"  src={img4} alt="" /> 
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Js Baiber</h3>
                <h5 className="text-base font-medium">3.4k followers</h5>
                <button className="text-xs rounded bg-secondary  px-2 py-1 md:btn md:btn-active md:btn-secondary">Follow</button>
            </div>
        </div>
          <div className="flex flex-row justify-center items-center gap-10">
            <div>
                <img className="rounded-full w-24 h-24 md:w-60 md:h-60"  src={img5} alt="" /> 
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Carry hartson</h3>
                <h5 className="text-base font-medium">3.4k followers</h5>
                <button className="text-xs rounded bg-secondary  px-2 py-1 md:btn md:btn-active md:btn-secondary">Follow</button>
            </div>
        </div>
          <div className="flex flex-row justify-center items-center gap-10">
            <div>
                <img className="rounded-full w-24 h-24 md:w-60 md:h-60"  src={img6} alt="" /> 
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Lisa Loon</h3>
                <h5 className="text-base font-medium">3.4k followers</h5>
                <button className="text-xs rounded bg-secondary  px-2 py-1 md:btn md:btn-active md:btn-secondary">Follow</button>
            </div>
        </div>
      </div>
    );
};

export default Artist;