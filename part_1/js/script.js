'use strict';

//theme
const ThemeValues  = {
  LIGHT: 'light',
  DARK: 'dark',
  TEXTURE: 'texture',
}

const buttonThemeLight = document.querySelector('.theme-button-light');
const buttonThemeDark = document.querySelector('.theme-button-dark');
const buttonThemeTexture = document.querySelector('.theme-button-texture');

const buttonThemeLightHandler = () => {
  document.documentElement.dataset['themeName'] = ThemeValues.LIGHT;
}

const buttonThemeDarkHandler = () => {
  document.documentElement.dataset['themeName'] = ThemeValues.DARK;
}

const buttonThemeTextureHandler = () => {
  document.documentElement.dataset['themeName'] = ThemeValues.TEXTURE;
}

//card view
const buttonCardViewTile = document.querySelector('.card-view-button-tile');
const buttonCardViewStandard = document.querySelector('.card-view-button-standart');
const buttonCardViewCompact = document.querySelector('.card-view-button-compact');

const courses = document.querySelector('.cards');
const cardViewButtonsList = document.querySelector('.card-view-buttons');

const buttonCardViewTileHandler = () => {
  debugger
  courses.classList.remove('standard');
  courses.classList.remove('compact');
  courses.classList.add('tile');
};

const buttonCardViewStandardHandler = () => {
  courses.classList.remove('tile');
  courses.classList.remove('compact');
  courses.classList.add('standard');
};

const buttonCardViewCompactHandler = () => {
  courses.classList.remove('tile');
  courses.classList.remove('standard');
  courses.classList.add('compact');
};

const init = () => {
  buttonThemeLight.addEventListener('click', buttonThemeLightHandler);
  buttonThemeDark.addEventListener('click', buttonThemeDarkHandler);
  buttonThemeTexture.addEventListener('click', buttonThemeTextureHandler);

  buttonCardViewTile.addEventListener('click', buttonCardViewTileHandler);
  buttonCardViewStandard.addEventListener('click', buttonCardViewStandardHandler);
  buttonCardViewCompact.addEventListener('click', buttonCardViewCompactHandler);
}

init();