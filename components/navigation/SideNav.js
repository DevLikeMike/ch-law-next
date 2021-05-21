import Link from "next/link";

export default function SideNav({ sideOpen, openHandler }) {
  return (
    <div className={sideOpen ? "sideNav open" : "sideNav"}>
      <ul className='sideNav-links'>
        <li className='sideNav-item' onClick={openHandler}>
          <Link href='/'>Home</Link>
        </li>
        <li className='sideNav-item' onClick={openHandler}>
          <Link href='/about'>About</Link>
        </li>
        <li className='sideNav-item' onClick={openHandler}>
          <Link href='/areasofpractice'>Areas of practice</Link>
        </li>
        <li className='sideNav-item' onClick={openHandler}>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
}
