import { BsFillInfoCircleFill } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import "./dash.css";
export default function Dash() {
  return (
    <>
      <div className="dash">
        <img src="https://www.svgrepo.com/show/327388/logo-react.svg" />

        <div className="icon">
          <IoHomeOutline />
          <BsFillInfoCircleFill />
          <CiUser />
        </div>
      </div>
    </>
  );
}
