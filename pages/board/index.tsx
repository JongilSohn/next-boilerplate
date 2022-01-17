import Link from 'next/link';
import { GetStaticProps, InitialProps, NextPage } from 'next';

/** components */
import DefaultLayout from '~/components/DefaultLayout/DefaultLayout';

/** i18n */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface IAboutPage extends InitialProps {}

const AboutPage: NextPage<IAboutPage, InitialProps> = (props) => {
  const { title } = props;
  console.log(props);

  return (
    <DefaultLayout title={title}>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      title: 'about 페이지',
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
};

export default AboutPage;
