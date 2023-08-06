import img1 from './1-1.webp'
import img2 from './teams.png'
import img3 from './2-1.webp'

const OurBabys = () => {
    return (
        <div className='grid md:grid-cols-3 mt-10 gap-5 max-w-[980px] mx-auto mb-10'>
             <div className='cursor-pointer relative'>
                <img className='absolute' src={img1} alt="image-boy" />
             <div className='absolute z-20 hover:bg-purple-700 hover:bg-opacity-60 duration-700 h-full w-full
             text-white text-5xl '></div>
             </div>
             <img className='' src={img2} alt="" />
             <div className='cursor-pointer relative'>
                <img className='absolute' src={img3} alt="image-boy" />
             <div className='absolute z-20 hover:bg-purple-700 hover:bg-opacity-60 duration-700 h-full w-full
             text-white text-5xl '></div>
             </div>
             
        </div>
    );
};

export default OurBabys;