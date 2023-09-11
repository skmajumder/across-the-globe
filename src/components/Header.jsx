import { Link } from "react-router-dom";
import Logo from './../../public/img/whole.svg'
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import 'reactjs-popup/dist/index.css';
import LoginModal from "./LoginModal";
import CreateAccountModal from "./CreateAccountModal";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);

    const handleLoginModalShow = () => {
        setShowLoginModal(true);
    };

    const handleLoginModalClose = () => {
        setShowLoginModal(false);
    };

    const handleCreateAccountModalShow = () => {
        setShowCreateAccountModal(true);
    };

    const handleCreateAccountModalClose = () => {
        setShowCreateAccountModal(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`header py-3 ${isSticky ? "sticky-header" : ""}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <Link to={'/'}>
                                <img src={Logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <form className="search-form position-relative">
                                <FaSearch className="search-icon" />
                                <input type="search" aria-label="Search" aria-describedby="search-icon" placeholder="Search for your favorite groups in ATG" className="search-field" />
                            </form>
                        </div>
                        <div className="col-lg-4 text-end">
                            <div className="dropdown">
                                <button
                                    className="btn dropdown-toggle login-btn"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Create account.
                                    <span> It’s free!</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={handleLoginModalShow}>
                                            Sign In
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={handleCreateAccountModalShow}>
                                            Create Account
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Login Modal */}
            <LoginModal show={showLoginModal} onHide={handleLoginModalClose} />

            {/* Create Account Modal */}
            <CreateAccountModal show={showCreateAccountModal} onHide={handleCreateAccountModalClose} />
        </>
    );
};

export default Header;