import Option from "./Option";
import {BsFillHandbagFill, BsSearch} from "react-icons/bs";
import {FaUserCircle} from "react-icons/fa";

function Header_options() {
    return (
        <div className="header_options_container">

            <Option
            test={'user'}
                //Action
            >
                <FaUserCircle/>

            </Option>
            
            <Option
            test={'search'}
                //Action
            >
                <BsSearch/>

            </Option>

            <Option
                test={'bag'}
                //Action
            >
                <BsFillHandbagFill/>

            </Option>
        </div>
    )
}

export default Header_options;