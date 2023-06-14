export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    backgroundColor: string;
    fontColor: string;
  };
  sizes: {
    navBar: {
      height: string;
      padding: string;
    };
  };
}

export const theme: Theme = {
  colors: {
    primary: 'brown',
    secondary: 'white',
    accent: 'red',
    backgroundColor: 'white',
    fontColor: 'black'
  },
  sizes: {
    navBar: {
      height: '70px',
      padding: '16px'
    }
  }
};
