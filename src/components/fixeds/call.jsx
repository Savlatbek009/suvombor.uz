import { BsFillTelephoneFill } from "react-icons/bs";
import './style.scss'

const Call = () => {
  return <div className="call">
    <a target="_blank" href="tel: +998889175444">
      <BsFillTelephoneFill />
    </a>
  </div>
};

export default Call;
