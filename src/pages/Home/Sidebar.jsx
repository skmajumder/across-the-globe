import { useContext, useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { AuthContext } from "../../contexts/AuthProvider";
import { BiLike } from "react-icons/bi";
import Group from "../../components/Group";

const Sidebar = () => {
    const { user } = useContext(AuthContext);
    const [groups, setGroups] = useState([])

    useEffect(() => {
        fetch("group.json")
            .then((response) => response.json())
            .then((result) => {
                setGroups(result);
            });
    }, []);

    return (
        <>
            <aside className="mt-3 d-none d-md-block">
                <form className="search-form position-relative">
                    <FaMapMarkerAlt className="location-icon" />
                    <input type="search" aria-label="Search" placeholder="Enter your location" aria-describedby="search-icon" className="location-field" />
                </form>
                <div className="d-flex justify-content-between align-items-start gap-2 mt-5 mb-5">
                    <HiOutlineInformationCircle className="fs-2" />
                    <p>
                        Your location will help us serve better and extend a personalised experience.
                    </p>
                </div>
                {
                    user && <>
                        <div>
                            <p className="d-flex align-items-start gap-2 mb-4">
                                <BiLike className="fs-5" />
                                <span className="text-uppercase">Recommended Groups</span>
                            </p>
                            <ul className="p-0">
                                {
                                    groups.map(group => <Group key={group.id} group={group} />)
                                }
                            </ul>
                            <p className="seemore-link mt-5">See More...</p>
                        </div>
                    </>
                }
            </aside>
        </>
    );
};

export default Sidebar;