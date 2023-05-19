/* eslint-disable no-unused-vars */


// import React, { useState, useEffect } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

// const ReactTabs = () => {
//   const [toys, setToys] = useState([]);
//   const [filteredToys, setFilteredToys] = useState({});

//   useEffect(() => {
//     fetch('http://localhost:5000/toys')
//       .then((res) => res.json())
//       .then((data) => {
//         setToys(data);
//       });
//   }, []);

//   const handleTabClick = (selectedCategory) => {
//     if (!filteredToys[selectedCategory]) {
//       const filteredData = toys.filter((toy) => toy.Subcategory === selectedCategory);
//       setFilteredToys((prevFilteredToys) => ({
//         ...prevFilteredToys,
//         [selectedCategory]: filteredData,
//       }));
//     }
//   };

//   return (
//     <div className="my-14">
//       <Tabs>
//         <TabList>
//           <Tab onClick={() => handleTabClick('science kits')}>Science Kits</Tab>
//           <Tab onClick={() => handleTabClick('engineering kits')}>Engineering Kits</Tab>
//           <Tab onClick={() => handleTabClick('math learning toys')}>Math Learning Toys</Tab>
//         </TabList>

//         {Object.keys(filteredToys).map((category) => (
//           <TabPanel key={category}>
//             {filteredToys[category]?.slice(0, 2).map((toy) => (
//               <div key={toy._id}>
//                 <img src={toy.img} alt={toy.name} />
//                 <p>{toy.price}</p>
//               </div>
//             ))}
//           </TabPanel>
//         ))}
//       </Tabs>
//     </div>
//   );
// };

// export default ReactTabs;

import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Toys from './Toys';

const ReactTabs = () => {
  const [toys, setToys] = useState([]);

  const [category, setCategory] = useState('science kits');

  useEffect(() => {
    fetch(`http://localhost:5000/toys/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setToys(data);
        
      });
  }, [category]);

  

  return (
    <div className="my-14">
      <Tabs>
        <TabList>
          <Tab onClick={() => setCategory('science kits')}>Science Kits</Tab>
          <Tab onClick={() => setCategory('engineering kits')}>Engineering Kits</Tab>
          <Tab onClick={() => setCategory('math learning toys')}>Math Learning Toys</Tab>
        </TabList>
        <div className='grid md:grid-cols-3 lg:grid-cols-4'>
       {
        toys.map(toy=>{
           return <> <Toys toy={toy} key={toy._id}></Toys></>
        })
       }
       </div>
      </Tabs>
    </div>
  );
};

export default ReactTabs;






