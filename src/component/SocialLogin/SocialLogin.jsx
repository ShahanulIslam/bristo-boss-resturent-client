import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                // console.log(user);
                const saveUsers = { name: user.displayName, email: user.email }
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUsers)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='w-full text-center'>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin; 