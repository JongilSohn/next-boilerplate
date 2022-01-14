import React, { FunctionComponent, ReactNode, useMemo } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

// i18n
// import { useTranslation } from '../../i18n';
import { useTranslation } from 'next-i18next';

const {
  Header,
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
  title = 'This is the default title',
}) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  console.log(router.pathname);

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
      <Header className="header" style={{ display: 'flex' }}>
        <div className="logo" style={{ color: 'white', width: 200 }}>
          {t('test')}
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          style={menuStyle}
          selectedKeys={[router.pathname]}
          selectable={false}
        >
          <Item key={'/'}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Item>
          <Item key={'/about'}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </Item>
          <Item key={'/users'}>
            <Link href="/users">
              <a>Users List</a>
            </Link>
          </Item>
        </Menu>
      </Header>
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

export default DefaultLayout;
