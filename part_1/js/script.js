'use strict';
const ACTIVE_CLASS = 'active';
const SettingType = {
  ATTRIBUTE: 'attribute',
  CLASS: 'class',
};

window.addEventListener('load', () => {

  const containers = document.querySelectorAll('.js-buttons-container');
  const settingButtons = document.querySelectorAll('[data-setting-name]');

  const setDataAttribute = ({settingTarget}, params) => {
    //data-setting-target=":root" 
    //data-setting-type="attribute"
    const element = document.querySelector(settingTarget);
    for (const [key, value] of Object.entries(params)) {
      element.dataset[key] = value;
    }
  }

  const setClass = ({settingTarget}, params) => {
    //data-setting-target=".cards" 
    //data-setting-type="class"
    const element = document.querySelector(settingTarget);


    for (const [key, value] of Object.entries(params)) {
      const elements = Array.from(settingButtons)
      .filter((element) => element.dataset['settingName'] === key);
      // удалить классы, название которых совпадает со значением атрибута setting-value всех элементов с setting-name равным key
      elements.forEach((item) => {
        element.classList.remove(item.dataset.settingValue);
      });
      element.classList.add(value);
    }
  }

  const setButtonActive = (params) => {
    for (const [key, value] of Object.entries(params)) {
      // находим активную кнопку для настройки
      const activeButton = Array.from(settingButtons)
        .find((element) => element.dataset['settingName'] === key && element.classList.contains('active'));
      debugger
      // снимаем класс active с кнопки, которая ранее была активной
      activeButton.classList.remove('active');

      // находим кнопку, которую устанавливаем для настройки
      const newActiveButton = Array.from(settingButtons)
      .find((element) => element.dataset['settingName'] === key && element.dataset['settingValue'] === value);

      // добавляем класс active с кнопки, которую устанавливаем
      newActiveButton.classList.add('active');
    }
  };

  const applySetting = (setting, params) => {
    switch(setting.settingType) {
      case SettingType.CLASS:
        setClass(setting, params);
      case SettingType.ATTRIBUTE:
        setDataAttribute(setting, params);
    }

    setButtonActive(params);
  }

  const settingButtonClickHandler = (evt, setting) => {
    const button = evt.target.closest('button');
    if (!button) {
      return;
    }

    const params = {}
    const { settingName, settingValue } = button.dataset;
    params[settingName] = settingValue;

    applySetting(setting, params);
  }

  const init = () => {
    containers.forEach((container) => {
      const setting = container.dataset;
      container.addEventListener('click', (evt) => {
        settingButtonClickHandler(evt, setting);
      });
    })
  }

  init();
});