import { Helmet } from "react-helmet";
import About from "./About";
import Banner from "./Banner";
import Employees from "./Employees";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
             <About></About>
             <Services></Services> 
        </div>
    );
};

export default Home;