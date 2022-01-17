import { GetStaticProps, InitialProps, NextPage } from 'next';
import Link from 'next/link';

import { User } from '../../interfaces';
import { sampleUserData } from '../../utils/sample-data';
import Layout from '../../components/Layout';
import List from '../../components/List';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface IWithStaticProps extends InitialProps {
  items: User[];
}

const WithStaticProps: NextPage<IWithStaticProps, InitialProps> = ({ items, title }) => (
  <DefaultLayout title={title}>
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </DefaultLayout>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const items: User[] = sampleUserData;

  return {
    props: {
      title: 'user 페이지',
      ...(await serverSideTranslations(locale, ['common'])),
      items,
      // Will be passed to the page component as props
    },
  };
};

export default WithStaticProps;
