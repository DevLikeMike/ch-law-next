import Layout from "@/components/Layout";
import OnPageContact from "@/components/OnPageContact";
import Link from "next/link";

export default function AreasOfPractice() {
  return (
    <Layout>
      <main className='page-container'>
        <ul>
          <li>
            <Link href='/areasofpractice/car-accident'>
              <a>Car Accident</a>
            </Link>
          </li>
          <li>
            <Link href='/areasofpractice/truck-accident'>
              <a>Truck Accident</a>
            </Link>
          </li>
          <li>
            <Link href='/areasofpractice/premises-liability'>
              <a>Premises Liability</a>
            </Link>
          </li>
        </ul>
        <OnPageContact />
      </main>
    </Layout>
  );
}
