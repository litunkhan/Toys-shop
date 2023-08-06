import { useEffect } from "react";
import Gallery from "../Gellary/Gallery";
import Banner from "../banner/Banner";
import Clients from "../clients/Clients";
import Offsell from "../offSell/Offsell";
import Reacttabs from "../tabs/Reacttabs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from "../../../Title/useTitle";
import OurBabys from "../our-customers/OurBabys";
import Category from "../category/Category";
import Wedo from "../Whatwedo/Wedo";


const Home = () => {
    useEffect(() => {
        AOS.init({duration:2000});
      }, [])
      useTitle(`Toys-Shop | | ${'Home'}`)
    return (
        <div>
            <div data-aos="zoom-in-right" ><Banner></Banner></div> 
           <div data-aos="zoom-in"><Gallery></Gallery></div> 
           <Category></Category>
            <Reacttabs></Reacttabs>
            <Clients></Clients>
           <Offsell></Offsell>
           <Wedo></Wedo>
           <OurBabys></OurBabys>
        </div>
    );
};

export default Home;