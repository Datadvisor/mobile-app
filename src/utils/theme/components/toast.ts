import { Easing } from 'react-native';

const baseStyle = (props: Record<string, any>) => {
  // NOTE: Internal pseudo props like _stack, _overlay nad _presenceTransition can only be update by the theme.
  return {
    bg: mode(`muted.700`, `muted.600`)(props),
    p: '2',
    rounded: 'sm',
    shadow: 6,
    // The stack in which toast are being rendered
    _stack: {
      margin: 'auto',
      position: 'absolute',
      space: 2,
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'box-none',
    },
    _overlay: {},
    _presenceTransition: {
      animate: {
        opacity: 1,
        transition: { easing: Easing.ease, duration: 250 },
      },
      exit: {
        opacity: 0,
        scale: 0.85,
        transition: { easing: Easing.ease, duration: 100 },
      },
    },
    _title: {
      color: 'text.50',
      fontWeight: 700,
    },
    _description: {
      color: 'text.50',
      fontWeight: 400,
    },
  };
};

export const Toast = {
  baseStyle,

  variants: {
    success: {
      _title: {
        color: '#3fc380',
      },
      _description: {
        color: '#3fc380',
      },
    },
    info: {
      _title: {
        color: 'blue',
      },
      _description: {
        color: 'blue',
      },
    },
    danger: {
      _title: {
        color: '#fe7968',
      },
      _description: {
        color: '#fe7968',
      },
    },
  },
  defaultProps: {
    variant: 'success',
  },
};
