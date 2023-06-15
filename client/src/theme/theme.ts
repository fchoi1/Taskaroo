export interface Color {
  color: string;
  textColor: string;
}

export interface Theme {
  colors: {
    primary: Color;
    secondary: Color;
    background: Color;
    text: Color;
    accent: Color;
    error: Color;
    success: Color;
    warning: Color;
  };
  sizes: {
    navBar: {
      height: string;
    };
  };
}

export const theme: Theme = {
  colors: {
    primary: {
      textColor: '#fff',
      color: '#007bff'
    },
    secondary: {
      textColor: '#fff',
      color: '#470aff'
    },
    background: {
      textColor: '#212529',
      color: '#f8f9fa'
    },
    text: {
      textColor: '#212529',
      color: '#fff'
    },
    accent: {
      textColor: '#fff',
      color: '#888888'
    },
    error: {
      textColor: '#fff',
      color: '#dc3545'
    },
    success: {
      textColor: '#fff',
      color: '#28a745'
    },
    warning: {
      textColor: '#212529',
      color: '#ffc107'
    }
  },
  sizes: {
    navBar: {
      height: '70px'
    }
  }
};
