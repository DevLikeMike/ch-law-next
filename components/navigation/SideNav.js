import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function SideNav({ sideOpen, openHandler }) {
  const [subListOpener, setSubListOpener] = useState(false);

  const onClickHandler = () => {
    setSubListOpener(!subListOpener);
  };

  return (
    <div className={sideOpen ? "sideNav open" : "sideNav"}>
      <ul className='sideNav-links'>
        <li className='sideNav-item' onClick={openHandler}>
          <Link href='/'>Home</Link>
        </li>
        <li className='sideNav-item' onClick={openHandler}>
          <Link href='/about'>About</Link>
        </li>
        <li className='sideNav-item' onClick={onClickHandler}>
          <span className='flex flex-center'>
            Areas of Practice <FaChevronDown style={{ marginLeft: "0.5em" }} />
          </span>
          <ul
            className={
              subListOpener ? "sideNav-sub-list opened" : "sideNav-sub-list"
            }
          >
            <li className='sub-list-item' onClick={openHandler}>
              <Link href='/areasofpractice/car-accident'>Car Accident</Link>
            </li>
            <li className='sub-list-item' onClick={openHandler}>
              <Link href='/areasofpractice/truck-accident'>Truck Accident</Link>
            </li>
            <li className='sub-list-item' onClick={openHandler}>
              <Link href='/areasofpractice/premises-liability'>
                Premises Liability
              </Link>
            </li>
          </ul>
        </li>
        <li className='sideNav-item' onClick={openHandler}>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
}
