import React from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import img from "../../../assets/home/slide1.jpg"

const Recommends = () => {
    return (
        <section>
            <SectionTitle
                heading={"Chef Recommends"}
                subHeading={"Should Try"}
            ></SectionTitle>
            <div className='grid md:grid-cols-3 gap-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img  src={img} alt=''  className="rounded-xl h-[220px] w-[424px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Casser Salad</h2>
                        <p className='py-3'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 text-yellow-700">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="" className="rounded-xl h-[220px] w-[424px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Casser Salad</h2>
                        <p className='py-3'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 text-yellow-700">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl h-[220px] w-[424px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Casser Salad</h2>
                        <p className='py-3'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 text-yellow-700">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommends;