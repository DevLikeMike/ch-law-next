import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className='container text-center'>
        <h3>Copyright &copy; Casey Hall Attorney at Law PLLC 2021</h3>
        <p>
          Disclaimer: The information you obtain at this site is not, nor is it
          intended to be, legal advice. You should consult an attorney for
          advice regarding your individual situation. We invite you to contact
          us and welcome your calls, letters and electronic mail. Contacting us
          through this site does not create an attorney-client relationship.
          Please do not send any confidential information to us until such time
          as an attorney-client relationship has been established.
        </p>
        <h4>This is an advertisement.</h4>
        <Link href='/about' legacyBehavior>
          <a>About Us</a>
        </Link>
      </div>
    </footer>
  );
}
