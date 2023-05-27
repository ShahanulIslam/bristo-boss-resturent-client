import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';


const Login = () => {
    const [disabled ,setDisabled] = useState(true)
    const {signIn} = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const captchaRef = useRef(null)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const handleValidate = () =>{
        const value = captchaRef.current.value;
        console.log(value)
        if(validateCaptcha(value)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" name='captcha' ref={captchaRef} placeholder="Type the text above" className="input input-bordered" />
                            <button onClick={handleValidate}  className="btn btn-outline btn-xs mt-2">Validate</button>

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" disabled={disabled} type="submit" value="Login" />
                        </div>
                    <p className='text-center'><small>New here <Link to="/signUp">Create an account</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;