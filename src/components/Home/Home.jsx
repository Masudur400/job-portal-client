import About from "./About";
import Banner from "./Banner";
import Employees from "./Employees";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
             <About></About>
             <Services></Services>
             <Employees></Employees>
        </div>
    );
};

export default Home;