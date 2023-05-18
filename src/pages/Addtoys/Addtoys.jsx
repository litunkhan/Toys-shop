
import { FaImage, FaUser, FaEnvelope, FaList, FaDollarSign, FaStar, FaPlus, FaInfo } from 'react-icons/fa';
const Addtoys = () => {
    return (
        <div className="  my-10 max-w-[1000px] mx-auto">
        <form className="w-full max-w-[800px] mx-auto">
        <div className=' md:gap-4 md:flex'>
          <div className="mb-4 md:w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pictureUrl">
              <FaImage className="inline-block mr-2 mb-1" /> Picture URL of the toy
            </label>
            <input
              type="url"
              id="pictureUrl"
              name="pictureUrl"
              placeholder="Enter picture URL"
              required
              className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 md:w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              <FaUser className="inline-block mr-2 mb-1" /> Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              required
              className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          </div>
          <div className=' md:gap-4 md:flex'>
          <div className="mb-4 md:w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sellerName">
              <FaUser className="inline-block mr-2 mb-1" /> Seller Name
            </label>
            <input
              type="text"
              id="sellerName"
              name="sellerName"
               required
            placeholder="Enter seller name"
              className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 md:w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sellerEmail">
              <FaEnvelope className="inline-block mr-2 mb-1" /> Seller Email
            </label>
            <input
              type="text"
              id="sellerEmail"
              name="sellerEmail"
              required
              placeholder="Enter seller email"
              className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          </div>
        
          <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mr-2" htmlFor="subCategory">
            <FaList className="inline-block mr-1 mb-1" /> Sub-category
          </label>
          <select
            id="subCategory"
            name="subCategory"
            required
            className="py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
          >
            <option value="" disabled>Select a sub-category</option>
            <option value="science kits">Science Kits</option>
            <option value="math learning toys">Math Learning Toys</option>
            <option value="engineering kits">Engineering Kits</option>
            <option value="engineering tools">Engineering Tools</option>
          </select>
        </div>
        
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              <FaDollarSign className="inline-block mr-2 mb-1" /> Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              required
              placeholder="Enter price"
              className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
              <FaStar className="inline-block mr-2 mb-1" /> Rating
            </label>
            <input
              type="text"
              id="rating"
              name="rating"
              placeholder="Enter rating"
              className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
              <FaPlus className="inline-block mr-2 mb-1" /> Available Quantity
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              placeholder="Enter available quantity"
              className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              <FaInfo className="inline-block mr-2 mb-1" /> Detail Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter detail description"
              rows="4"
              className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Add Toy
            </button>
          </div>
        </form>
      </div>
        
    );
};

export default Addtoys;