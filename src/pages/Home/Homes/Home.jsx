import Gallery from "../Gellary/Gallery";
import Banner from "../banner/Banner";
import Clients from "../clients/Clients";
import Offsell from "../offSell/Offsell";
import Reacttabs from "../tabs/Reacttabs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Reacttabs></Reacttabs>
            <Clients></Clients>
            <Offsell></Offsell>
        </div>
    );
};

export default Home;