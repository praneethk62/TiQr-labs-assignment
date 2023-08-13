
import "./headerstyle.css"
import {Link} from 'react-router-dom'
import { FaBars} from "react-icons/fa";



const Header = () => {

  return (
    <div className="header">
      <Link to={"/"}>
        <h1>Praneeth.k</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to={"/"}>Home </Link>
        </li>
        <li>
          <Link to={"/Signup"}>Signup</Link>
        </li>
        <li>
          <Link to={"/UserInvite"}>Invite Users</Link>
        </li>
        <li>
          <Link to={"/Userapprovel"}>Request</Link>
        </li>
      </ul>
      <div className="hamburger">
        <FaBars size={20} style={{ color: "#fff" }} />
      </div>
    </div>
  );
}


export default Header;