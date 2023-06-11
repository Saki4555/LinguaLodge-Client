
import Container from "../../Shared/Container";
import Popularclasses from "../PopularClasses/Popularclasses";
import HomeBanner from "./HomeBanner";
import Others from "./Others";


const Home = () => {
    return (
        <>
            <HomeBanner></HomeBanner>
            <Others></Others>
            <Container>
                <Popularclasses></Popularclasses>
            </Container>


        </>
    );
};

export default Home;