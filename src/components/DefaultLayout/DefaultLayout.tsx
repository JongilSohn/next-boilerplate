import React, { FunctionComponent, ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

/** antd */
import { Layout, Menu, Breadcrumb } from 'antd';

/** emotion */
import styled from '@emotion/styled';

/** i18n */
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/** components */
import Header from '~/components/Header';
import Footer from '../Footer';

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

const DefaultLayout: FunctionComponent<IDefaultLayoutProps> = ({
  children,
  title = '스토어링크 Next',
}) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <LayoutWrapper style={{ minHeight: '100vh' }} className="layout-container">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, maximum-scale=1"
        />
      </Head>
      <Layout className="ant-layout">
        <Layout.Header className="header">
          <Header />
        </Layout.Header>
        <Content className="ant-content">{children}</Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </LayoutWrapper>
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

const LayoutWrapper = styled(Layout)`
  background: none !important;

  .ant-layout {
    height: 100%;
    background: none;
    min-height: 100vh;
  }

  .ant-content {
    background: none;
    height: 100%;
    padding: 24px;
    margin: 0;
  }

  .ant-layout-header {
    background: none;
    height: 100%;
    padding: 0;
  }

  .ant-layout-footer {
    background: none;
    height: 100%;
    padding: 0;
  }
`;

export default DefaultLayout;
