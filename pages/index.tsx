import Link from 'next/link';
import Layout from '../components/Layout';
import DefaultLayout from '../components/DefaultLayout/DefaultLayout';

const IndexPage = () => (
  <DefaultLayout>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </DefaultLayout>
);

export default IndexPage;
