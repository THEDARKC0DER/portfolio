import logo from "../assets/raviKumarLogo.webp";
// import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex shrink-0 items-center">
        <a href="/">
          <img src={logo} className="mx-2" width={50} height={33} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaGithub />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
