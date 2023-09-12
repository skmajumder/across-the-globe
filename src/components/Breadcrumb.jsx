import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthProvider";

const Breadcrumb = () => {
    const { user } = useContext(AuthContext);
    return (
        <section className="breadcrumb-bg mb-5">
            <div className="container d-sm-block d-md-none mt-4">
                <div className="d-flex justify-content-between align-items-center">
                    <FaArrowLeft className="text-white" />
                    <button className="m-join-btn">{user ? "Leave Group" : "Join Group"}</button>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 text-start text-light breadcrumb-text">
                        <h1 className="fs-1 fs-md-4 fw-bold">Computer Engineering</h1>
                        <p>142,765 Computer Engineers follow this</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumb;