import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";

const Sidebar = () => {
    return (
        <>
            <aside className="mt-3">
                <form className="search-form position-relative">
                    <FaMapMarkerAlt className="location-icon" />
                    <input type="search" aria-label="Search" aria-describedby="search-icon" className="location-field" />
                </form>
                <div className="d-flex justify-content-between align-items-start gap-2 mt-5">
                    <HiOutlineInformationCircle className="fs-2" />
                    <p>
                        Your location will help us serve better and extend a personalised experience.
                    </p>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;