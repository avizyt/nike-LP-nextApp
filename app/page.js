import {
    Hero,
    PopularProduct,
    SuperQuality,
    Services,
    SpecialOffer,
    CustomerReviews,
    Subscribe,
    Footer,
} from "@/components";

const Home = () => {
    return (
        <div className='relative'>
            <Hero />
            <PopularProduct />
            <SuperQuality />
            <Services />
            <SpecialOffer />
            <CustomerReviews />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default Home;
