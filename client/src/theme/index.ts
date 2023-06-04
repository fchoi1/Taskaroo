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
      primary: '#007bff',
      secondary: '#6c757d',
      accent: '#ff9800',
    },
  };
  
  export default Theme;
  