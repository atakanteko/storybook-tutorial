import themePalette from './palette';
import colors from '../styles/scss/variables/_colorography.scss';

const uiTheme = () => {
  const color = colors;

  const themeOption = {
    colors: color,
  };

  const themeOptions = {
    palette: themePalette(themeOption),
  };

  const themes = themeOptions;

  return themes;
};

export default uiTheme;
