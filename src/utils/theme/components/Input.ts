const Input = {
  baseStyle: {
    rounded: 'md',
    placeholderTextColor: 'text.400',
    color: 'text.900',
    borderColor: 'muted.300',
    _input: {
      _hover: {
        bg: 'white',
        borderColor: 'primary.600',
      },
      _focus: {
        bg: 'white',
        borderColor: 'primary.600',
        _hover: { borderColor: 'primary.600' },
        _stack: {
          style: {
            outlineWidth: '1px',
            outlineColor: `#000`,
            outlineStyle: 'solid',
          },
        },
      },
      _invalid: {
        borderColor: 'error.600',
        _hover: { borderColor: 'error.600' },
        _stack: {
          style: {
            outlineWidth: '1px',
            outlineColor: `red`,
            outlineStyle: 'solid',
          },
        },
      },
    },
  },
};

export default Input;
