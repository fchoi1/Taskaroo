export interface Color {
  color: string;
  textColor: string;
}

interface hoverColorFunction {
  (color: string, percent: number): string;
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
  hoverColor: hoverColorFunction;
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
  hoverColor: (color: string, percent: number) => {
    console.log('hoverColor', color);
    const hexColor = color.length === 4 ? expandShortHex(color) : color;
    const lightenAmount = Math.abs(percent) / 100;
    const colorValue = parseInt(hexColor.substr(1), 16);
    const isDarkColor = colorValue < 127 * 65536 + 127 * 256 + 127;

    let modifiedColor;
    if (isDarkColor) {
      modifiedColor = colorValue + (255 - colorValue) * lightenAmount;
    } else {
      modifiedColor = colorValue - colorValue * lightenAmount;
    }

    const finalColor = Math.round(modifiedColor);
    const modifiedHexColor = `#${finalColor.toString(16).padStart(6, '0')}`;
    return modifiedHexColor;
  },

  sizes: {
    navBar: {
      height: '70px'
    }
  }
};

function expandShortHex(hex: string) {
  return `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
}
