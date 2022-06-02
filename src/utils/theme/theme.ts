import Button from './components/Button';
import Input from './components/Input';
import { extendTheme } from 'native-base';

const theme = extendTheme({
  colors: {
    blue: '#3258DC',
    purple: '#7879F1',
    black: '#000000',
    white: '#FFFFFF',
    pistache: '#1DE1CE',
    gray: '#CCCCCC',
    lightGray: '#F0F0F0',
  },
  fontConfig: {
    Rubik: {
      400: {
        normal: 'Rubik_400Regular',
      },
      700: {
        normal: 'Rubik_600SemiBold',
      },
    },
  },
  fontSizes: {
    heading: '32dp',
    body: '14dp',
  },
  fonts: {
    heading: 'Rubik',
    body: 'Rubik',
    mono: 'Rubik',
  },
  components: {
    Button,
    Input,
  },
});

export default theme;
