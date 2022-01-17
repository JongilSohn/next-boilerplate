import React, { FunctionComponent, ReactNode, useMemo } from 'react';
import { Layout, Menu, Breadcrumb, Select } from 'antd';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

// pages/index.js
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// i18n
// import { useTranslation } from '../../i18n';
import { useTranslation } from 'next-i18next';
import Header from 'components/Header';

const {
  Content,
  // Sider
} = Layout;

const { Item } = Menu;

interface IDefaultLayoutProps {
  children?: ReactNode;
  title?: string;
}

const defaultStyle = {
  height: '100%',
};

const menuStyle = {
  // marginLeft: 20,
  width: '100%',
  display: 'flex',
};

const DefaultLayout: FunctionComponent<IDefaultLayoutProps> = ({
  children,
  title = '스토어링크 Next',
}) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <Layout style={defaultStyle}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, maximum-scale=1"
        />
      </Head>
      <Layout.Header className="header" style={{ display: 'flex' }}>
        <Header />
      </Layout.Header>
      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default DefaultLayout;
