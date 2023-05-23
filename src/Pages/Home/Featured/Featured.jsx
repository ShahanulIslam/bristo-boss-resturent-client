import img from '../../../assets/home/featured.jpg';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import "./featured.css"

const Featured = () => {
    return (
        <div className='featured-item bg-fixed  text-white pt-8 my-20'>
            <SectionTitle
            heading={"From Our Menu"}
            subHeading={"---Check it out---"}
            ></SectionTitle>
            <div className='md:flex pb-20 pt-12 justify-center bg-slate-400 bg-opacity-30 items-center px-36'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>March 20,2023</p>
                    <h2 className='uppercase'>Where can i get some?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aspernatur porro, eos excepturi doloribus hic commodi, qui mollitia voluptate molestiae laboriosam distinctio necessitatibus dignissimos voluptatibus reiciendis eaque blanditiis animi deleniti saepe voluptates illum! Eaque, recusandae cum, ex quos repudiandae iste vel excepturi suscipit sunt quaerat quo explicabo pariatur, molestiae corporis.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;