import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
    const { name, recipe, image, price,_id } = item
    const { user } = useContext(AuthContext)
    const [,refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = item => {
        console.log(item)
        if (user && user.email) {
            const cartItem = {menuItemId : _id , name,  image , price, email: user.email}
            fetch("http://localhost:5000/carts",{
                method:"POST",
                headers:{
                    "content-type" : "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your order  has been success',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order food?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", {state: {from:location}}) 
                }
            })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} /></figure>
            <p className='absolute bg-slate-900 text-white px-2 mt-4 mr-4 right-0'>{price}</p>
            <div className="card-body flex flex-col justify-center items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 text-yellow-600 bg-slate-100 border-orange-400">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;