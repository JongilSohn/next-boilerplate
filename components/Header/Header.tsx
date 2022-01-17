import React, { FunctionComponent, ReactNode, useMemo } from 'react';
import { Layout, Menu, Breadcrumb, Select } from 'antd';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

// pages/index.js
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// i18n
// import { useTranslation } from '../../i18n';
import { useTranslation } from 'next-i18next';

const {
  Content,
  // Sider
} = Layout;

const { Item } = Menu;

interface IHeaderProps {
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

const Header: FunctionComponent<IHeaderProps> = ({ children, title = '스토어링크 Next' }) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <HeaderWrapper>
      <div className="logo" style={{ color: 'white', width: 200 }}>
        {t('title')}
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
      <Select className="language-container">
        <Select.Option>한국어</Select.Option>
        <Select.Option>영어</Select.Option>
      </Select>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

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
