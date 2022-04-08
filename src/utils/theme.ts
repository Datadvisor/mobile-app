import { Colors, Spacings, Typography } from "react-native-ui-lib";

Colors.loadColors({
    primaryColor: '',
    secondaryColor: '',
    textColor: '',
    errorColor: '',
    successColor: '',
    warnColor: '',
});

Typography.loadTypographies({
    heading: { fontSize: 32, fontWeight: '600' },
    subheading: { fontSize: 24, fontWeight: '500' },
    body: { fontSize: 18, fontWeight: '400' },
});

Spacings.loadSpacings({
    page: 20,
    card: 12,
    gridGutter: 16,
});