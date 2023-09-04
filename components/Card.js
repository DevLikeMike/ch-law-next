import Link from "next/link";

export default function Card({ side, heading, description, link }) {
  return (
    <div
      className='card'
      data-aos={`fade-${side}`}
      data-aos-once='true'
      data-aos-duration='700'
    >
      <h3>{heading}</h3>
      <p>{description}</p>
      <span>
        <Link href={`${link}`} legacyBehavior>
          <a>Read More...</a>
        </Link>
      </span>
    </div>
  );
}
