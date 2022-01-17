import React, { FunctionComponent, ReactNode, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

/** antd */
import { Layout, Menu, Breadcrumb, Select } from 'antd';

/** emotion */
import styled from '@emotion/styled';

/** i18n */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const { Content } = Layout;

const { Item } = Menu;

interface IHeaderProps {}

const Header: FunctionComponent<IHeaderProps> = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const handleChangeLanguage = useCallback(
    (locale: string) => {
      router.push(router.asPath, router.asPath, { locale: locale });
    },
    [router],
  );

  return (
    <HeaderWrapper>
      <div className="logo">{t('title')}</div>
      <Menu
        className="nav-bar"
        theme="dark"
        mode="horizontal"
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
        <Item key={'/board'}>
          <Link href="/board">
            <a>Board</a>
          </Link>
        </Item>
        <Item key={'/register'}>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </Item>
        <Item key={'/users'}>
          <Link href="/users">
            <a>Users List</a>
          </Link>
        </Item>
      </Menu>
      <Select
        className="language-container"
        onChange={handleChangeLanguage}
        defaultValue={router.locale}
      >
        <Select.Option value={'ko'}>{t('ko')}</Select.Option>
        <Select.Option value={'en'}>{t('en')}</Select.Option>
      </Select>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 40px;
  background: #001529;

  .logo {
    color: white;
    width: 260px;
  }

  .nav-bar {
    display: flex;
    width: 100%;
  }

  .language-container {
    width: 100px;
  }
`;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default Header;
