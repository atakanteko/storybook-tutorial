const themePalette = (theme) => ({
    backgroundPaper: theme.colors?.paper,
    primary: {
        purple: theme.colors?.primaryPurple,
        purpleDark: theme.colors?.primaryPurpleDark,
        blue: theme.colors?.primaryBlue,
        blueDark: theme.colors?.primaryBlueDark,
    },
    base: {
        gray700: theme.colors?.baseGray700,
        gray600: theme.colors?.baseGray600,
        gray500: theme.colors?.baseGray500,
        gray400: theme.colors?.baseGray400,
        gray300: theme.colors?.baseGray300,
        gray200: theme.colors?.baseGray200,
        gray100: theme.colors?.baseGray100,
        danger: theme.colors?.baseDanger,
    }
});

export default themePalette;