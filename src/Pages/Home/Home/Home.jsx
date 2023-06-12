
import { useContext } from "react";
import Container from "../../Shared/Container";
import ExtraSection from "../ExtraSection/ExtraSection";
import Popularclasses from "../PopularClasses/Popularclasses";
import HomeBanner from "./HomeBanner";
import Others from "./Others";
import { ThemeContext } from "../../../Provider/ThemeProvider";


const Home = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <div data-theme={theme}>
                <HomeBanner></HomeBanner>
                <Others></Others>
                <Container>
                    <Popularclasses></Popularclasses>
                    <ExtraSection></ExtraSection>
                </Container>
            </div>


        </>
    );
};

export default Home;