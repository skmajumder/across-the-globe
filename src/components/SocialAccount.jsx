/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthProvider';

const SocialAccount = () => {

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                // eslint-disable-next-line no-unused-vars
                const user = result.user;
                Swal.fire("Successfully!", "User Signin Successfully", "success");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... Something went wrong!',
                    text: `${errorCode} ${errorMessage}`,
                })
            });
    };
    return (
        <div className="mt-4">
            <button className="w-100 social-login-btn mb-3">
                <FaFacebookSquare className="me-2" />
                Sign up with Facebook
            </button>
            <button className="w-100 social-login-btn" onClick={handleGoogleSignIn}>
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" />
                <span className="ms-2">Sign up with Google</span>
            </button>
        </div>
    );
};

export default SocialAccount;