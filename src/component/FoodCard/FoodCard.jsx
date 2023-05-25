import React from 'react';

const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} /></figure>
            <p className='absolute bg-slate-900 text-white px-2 mt-4 mr-4 right-0'>{price}</p>
            <div className="card-body flex flex-col justify-center items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline border-0 border-b-4 text-yellow-600 bg-slate-100 border-orange-400">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;