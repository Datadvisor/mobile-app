import { Colors, Spacings, ThemeManager, Typography } from 'react-native-ui-lib';
import { fonts } from './fonts';

export const initTheme = () => {
  Colors.loadColors({
    primaryColor: '#3258DC',
    secondaryColor: '#7879F1',
    textColor: '#000',
    errorColor: '',
    successColor: '',
    warnColor: '',
  });

  Typography.loadTypographies({
    heading: { fontSize: 32, fontWeight: '600' },
    subheading: { fontSize: 24, fontWeight: '500' },
    body: { fontSize: 18, fontWeight: '400' },
    annotation: { fontSize: 12, fontWeight: '400' },
    black: {
      fontFamily: fonts.RubikBlack,
    },
    blackItalic: {
      fontFamily: fonts.RubikBlackItalic,
    },
    bold: {
      fontFamily: fonts.RubikBold,
    },
    boldItalic: {
      fontFamily: fonts.RubikBoldItalic,
    },
    extraBold: {
      fontFamily: fonts.RubikExtraBold,
    },
    extraBoldItalic: {
      fontFamily: fonts.RubikExtraBoldItalic,
    },
    italic: {
      fontFamily: fonts.RubikItalic,
    },
    light: {
      fontFamily: fonts.RubikLight,
    },
    lightItalic: {
      fontFamily: fonts.RubikLightItalic,
    },
    medium: {
      fontFamily: fonts.RubikMedium,
    },
    mediumItalic: {
      fontFamily: fonts.RubikMediumItalic,
    },
    regular: {
      fontFamily: fonts.RubikRegular,
    },
    semiBold: {
      fontFamily: fonts.RubikSemiBold,
    },
    semiBoldItalic: {
      fontFamily: fonts.RubikSemiBoldItalic,
    },
  });

  Spacings.loadSpacings({
    page: 20,
    card: 12,
    gridGutter: 16,
  });

  ThemeManager.setComponentTheme('Button', {
    borderRadius: 8,
    uppercase: true,
  });
};
