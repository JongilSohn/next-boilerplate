export const { xxs, xs, sm, md, lg, xl } = {
  xxs: '@media (max-width: 320px)', // 320px
  xs: '@media (max-width: 480px)', // 480px
  sm: '@media (max-width: 576px)', // 576px
  md: '@media (max-width: 768px)', // 768px
  lg: '@media (max-width: 992px)', // 992px
  xl: '@media (max-width: 1200px)', // 1200px
};

export const headerHeight = '227px';
export const footerHeight = '249px';
export const maxWidth = '1420px';

export type Palette = {
  [key in ColorKey]: Colors;
};

export type Colors = {
  primary: string;
};

type ColorKey = 'color';

export const palette: Palette = {
  color: {
    primary: '#34f12f',
  },
};

// export const GlobalStyles = createGlobalStyle`

//     *, *::after, *::before {
//         padding: 0;
//         margin: 0;
//         box-sizing: border-box;

//     }
//     *::placeholder {
//     }
//     body {
//         overscroll-behavior: auto;
//         user-select: none;
//         font-family: Spoqa Han Sans Neo;
//         background-color: #FBFBFC;
//     }

//     a {
//       text-decoration: none;
//     }
//     ul {
//       list-style: none;
//     }
//     h1, h2, h3, h4, h5, h6 {
//       margin: 0;
//       color: inherit;
//     }
// `;

export default palette;
