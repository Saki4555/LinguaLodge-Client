import logo from '../../../assets/Home/logo.png';
import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai"
import { CiLocationOn } from "react-icons/ci";
const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
            <img src={logo} className="w-20 h-14 object-cover object-center rounded" alt="logo" />
                <p>LinguaLodge Private Ltd.<br />Providing reliable tech since 2023</p>
            </div>
            <div>
                <span className="footer-title">Programmes</span>
                <a className="link link-hover">Long-term Programmes</a>
                <a className="link link-hover">Intensive Programmes</a>
                <a className="link link-hover">Specialized Programme</a>
                <a className="link link-hover">Language Trainings</a>
            </div>
            <div>
                <span className="footer-title">About Lodge</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Our Staff</a>
                <a className="link link-hover">Our Partners</a>
                <a className="link link-hover">Careers</a>
            </div>
            <div>
                <span className="footer-title">Contact Info</span>

                <a className="link link-hover mb-2 flex items-center gap-2"><AiOutlineMail></AiOutlineMail>contact@lodge.com</a>
                <a className="link link-hover mb-2 flex items-center gap-2"><AiOutlineMobile></AiOutlineMobile>Call Us: 501-58741</a>
                <a className="link link-hover flex items-center gap-2"><CiLocationOn></CiLocationOn>Loadeland, LL-55478, LinguaLodge</a>
            </div>
        </footer>
    );
};

export default Footer;