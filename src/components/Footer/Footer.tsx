import React, { FunctionComponent } from 'react';

import { useRouter } from 'next/router';

/** emotion */
import styled from '@emotion/styled';

/** i18n */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

interface IFooterProps {}

const Footer: FunctionComponent<IFooterProps> = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  return <FooterWrapper>Footer</FooterWrapper>;
};

const FooterWrapper = styled.div`
  width: 100%;
  padding: 20px 40px;
  border-top: 1px solid gray;
`;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default Footer;
