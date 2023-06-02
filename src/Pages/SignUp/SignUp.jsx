import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../component/SocialLogin/SocialLogin';

const SignUp = () => {
    const navigate = useNavigate()
    const { CreateUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        CreateUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUsers = { name: data.name, email: data.email }
                        fetch("http://localhost:5000/users", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(saveUsers)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User Created Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate("/")
                                }
                            })
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boos | Sign up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-red-500'>Name  is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="photo url" className="input input-bordered" />
                                {errors.photo && <span className='text-red-500'>Photo  is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>Email  is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*[A-Z])(?=.*[!@#$&])(?=.*[0-9])(?=.*[a-z])/
                                })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p role="alert" className='text-red-500'> Password  required</p>}
                                {errors.password?.type === 'minLength' && <p role="alert" className='text-red-500'> Password must be 6  character</p>}
                                {errors.password?.type === 'maxLength' && <p role="alert" className='text-red-500'> Password must be less then 20 character</p>}
                                {errors.password?.type === 'pattern' && <p role="alert" className='text-red-500'> Password must be one uppercase one lowercase one special character</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <input type="submit" className="btn btn-primary" value="Sign Up" />
                            </div>
                            <p className='text-center'><small> <Link to="/login">Already have an account</Link></small></p>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;