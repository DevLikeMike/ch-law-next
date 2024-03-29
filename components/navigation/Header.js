// React/next imports
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Components imports
import Hamburger from "./Hamburger";
import SideNav from "./SideNav";
// 3rd party Imports
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
  const [sideOpen, setSideOpen] = useState(false);

  const router = useRouter();

  const openHandler = () => {
    setSideOpen(!sideOpen);
  };

  const clickHandler = (location) => {
    router.push(`/${location}`);
  };

  return (
    <nav className='flex ai-c jc-sb'>
      <ul className='main-navigation flex jc-c'>
        <li className='nav-item'>
          <Link href='/' legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li className='nav-item pointer'>
          Areas of Practice <FaChevronDown style={{ marginLeft: "0.5em" }} />
          <ul className='drop-down-menu'>
            <li className='drop-item'>
              <Link href='/areasofpractice/car-accident' legacyBehavior>
                <a>Car Accident</a>
              </Link>
            </li>
            <li className='drop-item'>
              <Link href='/areasofpractice/truck-accident' legacyBehavior>
                <a>Truck Accident</a>
              </Link>
            </li>
            <li className='drop-item'>
              <Link href='/areasofpractice/premises-liability' legacyBehavior>
                <a>Premises Liability</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className='nav-item'>
          <div
            onClick={() => {
              clickHandler("about");
            }}
            className='pointer'
          >
            About Our Attorneys{" "}
            <FaChevronDown style={{ marginLeft: "0.5em" }} />
          </div>
          <ul className='drop-down-menu'>
            <li className='drop-item'>
              <Link href='/about' legacyBehavior>
                <a>Casey Hall</a>
              </Link>
            </li>
            <li className='drop-item'>
              <Link href='/about/location' legacyBehavior>
                <a>Locations</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className='nav-item'>
          <Link href='/contact' legacyBehavior>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <Hamburger openHandler={openHandler} sideOpen={sideOpen} />
      <SideNav sideOpen={sideOpen} openHandler={openHandler} />
    </nav>
  );
}
