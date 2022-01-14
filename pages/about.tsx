import Link from 'next/link';
import Layout from '../components/Layout';
import DefaultLayout from '../components/DefaultLayout/DefaultLayout';

const AboutPage = () => (
  <DefaultLayout>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </DefaultLayout>
);

export default AboutPage;
