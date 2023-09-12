import { FaFacebookSquare } from 'react-icons/fa';

const SocialAccount = () => {
    return (
        <div className="mt-4">
            <button className="w-100 social-login-btn mb-3">
                <FaFacebookSquare className="me-2" />
                Sign up with Facebook
            </button>
            <button className="w-100 social-login-btn">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" />
                <span className="ms-2">Sign up with Facebook</span>
            </button>
        </div>
    );
};

export default SocialAccount;