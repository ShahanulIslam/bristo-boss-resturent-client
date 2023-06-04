import React from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
const imgHostingToken = import.meta.env.VITE_Image_Upload_Token;

const AddItems = () => {
    const [axiosSecure] = useAxiosSecure()
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`
    console.log(imgHostingToken);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const formData = new FormData();
        formData.append("image", data.image[0])
        fetch(imageHostingUrl, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(img => {
                if (img.success) {
                    const imgUrl = img.data.display_url;
                    console.log(imgUrl);
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgUrl }
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            // console.log('After Axios', data.data);
                            if (data.data.insertedId) {
                                Swal.fire({
                                    position: 'Center',
                                    icon: 'success',
                                    title: 'Item Added',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    }
    console.log(errors);

    return (
        <div className='w-full px-10'>
            <Helmet>
                <title>Bistro Boss | Add an Items</title>
            </Helmet>
            <SectionTitle subHeading="What's New" heading="Add an items">
            </SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full" />
                </div>
                <div className='flex'>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </label>
                        <select defaultValue="Pick one" {...register("category", { required: true })}
                            className="select select-bordered">
                            <option disabled >Pick one</option>
                            <option>Salad</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" placeholder="Price"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details*</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Recipe Details"
                        {...register("details", { required: true })}
                    ></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <input type="submit" className='btn btn-sm mt-4' value="Add items" />
            </form>
        </div>
    );
};

export default AddItems;