import { Link } from "react-router-dom";
import Logo from './../../public/img/whole.svg'
import { FaCircle, FaSearch, FaSquareFull } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import LoginModal from "./LoginModal";
import CreateAccountModal from "./CreateAccountModal";
import { AuthContext } from "../contexts/AuthProvider";

import UserAvatar from "./../../public/avatar.jpg"

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const defaultUserAvatar = user?.photoURL || UserAvatar;

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
                <div className="container d-none d-md-block">
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
                                {
                                    user && <img src={defaultUserAvatar} className="user-avatar" alt={user?.displayName} />
                                }
                                <button
                                    className="btn dropdown-toggle login-btn"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {
                                        user ? user?.displayName : <>
                                            Create account.
                                            <span> It’s free!</span>
                                        </>
                                    }
                                </button>
                                <ul className="dropdown-menu">
                                    {
                                        user ? <li>
                                            <a className="dropdown-item" onClick={logout}>
                                                Sign Out
                                            </a>
                                        </li> : <>
                                            <li>
                                                <a className="dropdown-item" onClick={handleLoginModalShow}>
                                                    Sign In
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" onClick={handleCreateAccountModalShow}>
                                                    Create Account
                                                </a>
                                            </li>
                                        </>
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container d-sm-block d-md-none">
                    <div className="d-flex justify-content-end align-items-center gap-3">
                        <FaSquareFull className="mobile-nav-icon" />
                        <FaCircle className="mobile-nav-icon" />
                        <BiSolidDownArrow className="fs-3 mobile-nav-icon" />
                    </div>
                </div>
            </header>

            {/* Login Modal */}
            <LoginModal show={showLoginModal} onHide={handleLoginModalClose} onShowLoginModal={setShowLoginModal} />

            {/* Create Account Modal */}
            <CreateAccountModal show={showCreateAccountModal} onHide={handleCreateAccountModalClose} onShowCreateAccountModal={setShowCreateAccountModal} />
        </>
    );
};

export default Header;