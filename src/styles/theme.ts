export const size = {
  largest: '75em', // 1200px
  large: '56.25em', // 900px
  medium: '37.5em', // 600px
  small: '31.25em', // 500px
  smallest: '25em', // 400px
};

export const { xxs, xs, sm, md, lg, xl } = {
  xxs: '@media (max-width: 320px)', // 320px
  xs: '@media (max-width: 480px)', // 480px
  sm: '@media (max-width: 576px)', // 576px
  md: '@media (max-width: 768px)', // 768px
  lg: '@media (max-width: 992px)', // 992px
  xl: '@media (max-width: 1200px)', // 1200px
};

export const maxWidth = '1420px';

const theme = {
  mainColor: '#9900FF',
  mq: {
    laptop: `@media only screen and (min-width: ${size.largest})`,
    tablet: `@media only screen and (min-width: ${size.large})`,
    mobile: `@media only screen and (min-width: ${size.small})`,
  },
};

export default theme;
