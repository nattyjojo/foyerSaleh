import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import HamburgerButton from "../clientsComponents/hamburger";
const Nav = () => {
  return (
    <nav className="flex justify-between text-center font-bold py-smallest">
      <Link href="/">BOYER FLASH</Link>
      <HamburgerButton />
    </nav>
  );
};
export default Nav;
