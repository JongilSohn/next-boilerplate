import { GetStaticProps, GetStaticPaths } from 'next';

/** interfaces */
import { User } from '~/interfaces';

/** utils */
import { sampleUserData } from '~/utils/sample-data';

/** components */
import ListDetail from '~/components/ListDetail';
import DefaultLayout from '~/components/DefaultLayout/DefaultLayout';

/** i18n */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {
  item?: User;
  errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <DefaultLayout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout title={`${item ? item.name : 'User Detail'} | Next.js + TypeScript Example`}>
      {item && <ListDetail item={item} />}
    </DefaultLayout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = sampleUserData.map((user) => ({
    params: { id: user.id.toString() },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const items: User[] = sampleUserData;

  try {
    const id = params?.id;
    const item = sampleUserData.find((data) => data.id === Number(id));

    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return {
      props: {
        title: 'user 페이지',
        ...(await serverSideTranslations(locale, ['common'])),
        item,
        // Will be passed to the page component as props
      },
    };
  } catch (err: any) {
    return {
      props: {
        title: 'user 페이지',
        ...(await serverSideTranslations(locale, ['common'])),
        errors: err.message,
      },
    };
  }
};
