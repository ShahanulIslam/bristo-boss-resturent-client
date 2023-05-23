import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Popular from "../Popular/Popular";
import Recommends from "../Recommends/Recommends";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Popular></Popular>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;