// theme/theme.ts
interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const Theme: Theme = {
  colors: {
    primary: 'brown',
    secondary: 'white',
    accent: 'red'
  }
};

export default Theme;
