import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'

const Category = () => {
    return (
        <div className='mb-72 '>
           <p className="text-center my-4">CATEGORIES</p> 
           <h2 className="text-5xl text-center text-[#181D4E] font-bold">We design toys not just for <br></br>kids but with kids</h2>

           <div className='grid grid-cols-2   md:grid-cols-4 mt-10 gap-5 mb-10'>
             <div className='cursor-pointer relative mb-48 md:mb-0 '>
                <img className='absolute rounded-md' src={img1} alt="image-boy" />
             <div className='absolute z-20 pl-3 pt-[13.2rem] hover:pt-44 duration-700 h-full w-full
             text-white text-2xl font-bold'><p>Science Kits</p>
             <p className='font-bold'>Shop-Now--- </p>
             </div>
             </div>
             <div className='cursor-pointer relative '>
                <img className='absolute rounded-md' src={img2} alt="image-boy" />
             <div className='absolute z-20 pl-3 pt-[13.2rem] hover:pt-44 duration-700 h-full w-full
             text-white text-2xl font-bold'><p>Engineering Kits</p>
             <p className='font-bold'>Shop-Now--- </p>
             </div>
             </div>
             <div className='cursor-pointer relative '>
                <img className='absolute rounded-md' src={img3} alt="image-boy" />
             <div className='absolute z-20 pl-3 pt-[13.2rem] hover:pt-44 duration-700 h-full w-full
             text-white text-2xl font-bold'><p>Math Learning Toys</p>
             <p className='font-bold'>Shop-Now--- </p>
             </div>
             </div>

             <div className='cursor-pointer relative '>
                <img className='absolute rounded-md' src={img4} alt="image-boy" />
             <div className='absolute z-20 pl-3 pt-[13.2rem] hover:pt-44 duration-700 h-full w-full
             text-white text-2xl font-bold'><p>Musical toys</p>
             <p className='font-bold'>Shop-Now--- </p>
             </div>
             </div>
             
        </div>
        </div>
    );
};

export default Category;