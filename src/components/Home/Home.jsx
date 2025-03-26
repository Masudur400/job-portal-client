import { Helmet } from "react-helmet";
import About from "./About";
import Banner from "./Banner";
import Services from "./Services";
import useAdmin from "../Hooks/useAdmin";
import useModerator from "../Hooks/useModerator";
import Loading from "../Loading/Loading";
import AdminHome from "./AdminHome";
import { div } from "framer-motion/client";

const Home = () => {

    const [isAdmin, isAdminLoading] = useAdmin()
    const [isModerator, isModeratorLoading] = useModerator()

    if (isModeratorLoading || isAdminLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            {
                isAdmin || isModerator ? <div>
                    <AdminHome></AdminHome>
                </div> :
                    <div>
                        <Banner></Banner>
                        <About></About>
                        <Services></Services>
                    </div>
            }
        </div>
    );
};

export default Home;