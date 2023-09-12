import { useState } from "react";

/* eslint-disable react/prop-types */
const Group = ({ group }) => {
    const [follow, setFollow] = useState(false);

    function handleFollowGroup() {
        setFollow(prevValue => !prevValue)
    }

    return (
        <li className='d-flex justify-content-between align-items-center gap-2 mb-4'>
            <span className="d-flex justify-content-between align-items-center gap-3">
                <img src={group?.image} alt={group?.name} className="user-avatar " />
                <span>{group?.name}</span>
            </span>
            <button className={`${follow ? "follow-btn followed" : "follow-btn"}`} onClick={handleFollowGroup}>
                {
                    follow ? 'Followed' : 'Follow'
                }
            </button>
        </li>
    );
};

export default Group;