import Link from 'next/link';
import { GetStaticProps, InitialProps, NextPage } from 'next';

/** components */
import DefaultLayout from '~/components/DefaultLayout/DefaultLayout';

/** i18n */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

interface IIndexPageProps extends InitialProps {}

const IndexPage: NextPage<IIndexPageProps, InitialProps> = (props) => {
  const { title } = props;

  const { t } = useTranslation('common');
  return (
    <DefaultLayout title={title}>
      <h1>Hello Next.js 👋</h1>
      {t('title')}
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      title: '메인페이지',
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
      meta: {
        title: 'meta title',
        description: 'meta description',
        image: 'meta image',
        url: 'meta url',
      },
    },
  };
};

export default IndexPage;
