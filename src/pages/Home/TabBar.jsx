import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FaCaretDown, FaUserPlus } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider';
import { BiExit } from "react-icons/bi";

const TabBar = ({ categories }) => {
    const { user } = useContext(AuthContext);

    return (
        <section className="tab-bar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <ul className="d-flex list-unstyled post-category gap-4">
                            <li className="active"><button className='btn'>All Posts(32)</button></li>
                            {
                                categories.map(category => <li key={category.id}><button className='btn'>{category.name}</button></li>)
                            }
                        </ul>
                    </div>
                    <div className="col-lg-4 d-flex">
                        <button className='btn btn-gray d-flex align-items-center gap-2'>
                            <span>Write a Post</span>
                            <FaCaretDown />
                        </button>
                        {
                            user ? <button type="button" className="btn border ms-3 d-flex align-items-center gap-2">
                                <BiExit />
                                <span>Leave Group</span>
                            </button> : <button type="button" className="btn btn-primary ms-3 d-flex align-items-center gap-2">
                                <FaUserPlus />
                                <span>Join Group</span>
                            </button>
                        }
                    </div>
                </div>
                <hr />
            </div>
        </section>
    );
};

TabBar.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default TabBar;