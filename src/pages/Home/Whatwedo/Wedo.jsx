
import img from './creative-image-1-copyright.webp'
const Wedo = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center my-10'>
            <div>
                <img src={img} alt="children" />
            </div>
            <div className='flex flex-col items-start'>
                <p>WHAT WE DO</p>
                <h2 className='text-[#181D4E] font-bold text-5xl my-5'>We help organize events for kids</h2>
                <p>Fun, educational activities for every occasion with premium toys and snacks. Learn more about our services!</p>
                <button className="mt-4 bg-[#2BB24C] hover:bg-green-400  text-white font-bold py-2 px-4 rounded-xl">
  Discover Now
</button>
            </div>
           
        </div>
    );
};

export default Wedo;