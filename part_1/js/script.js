'use strict';

const ThemeValues  = {
  LIGHT: 'light',
  DARK: 'dark',
  TEXTURE: 'texture',
}

const buttonThemeLight = document.querySelector('.theme-button-light');
const buttonThemeDark = document.querySelector('.theme-button-dark');
const buttonThemeTexture = document.querySelector('.theme-button-texture');

const init = () => {
  const buttonThemeLightHandler = () => {
    debugger
    document.documentElement.dataset['themeName'] = ThemeValues.LIGHT;
  }

  const buttonThemeDarkHandler = () => {
    document.documentElement.dataset['themeName'] = ThemeValues.DARK;
  }

  const buttonThemeTextureHandler = () => {
    document.documentElement.dataset['themeName'] = ThemeValues.TEXTURE;
  }

  buttonThemeLight.addEventListener('click', buttonThemeLightHandler);
  buttonThemeDark.addEventListener('click', buttonThemeDarkHandler);
  buttonThemeTexture.addEventListener('click', buttonThemeTextureHandler);
}

init();