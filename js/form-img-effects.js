const form = document.querySelector('.img-upload__form');
const image = form.querySelector('.img-upload__preview img');
const noneEffect = form.querySelector('#effect-none');
const slider = {
  container: form.querySelector('.effect-level'),
  element: form.querySelector('.effect-level__slider'),
  output: form.querySelector('.effect-level__value'),
};
const effects = {
  CHROME: {
    minValue: 0,
    maxValue: 1,
    step: 0.1,
    unit: '',
    filter: 'grayscale',
  },
  SEPIA: {
    minValue: 0,
    maxValue: 1,
    step: 0.1,
    unit: '',
    filter: 'sepia',
  },
  MARVIN: {
    minValue: 0,
    maxValue: 100,
    step: 1,
    unit: '%',
    filter: 'invert',
  },
  PHOBOS: {
    minValue: 0,
    maxValue: 3,
    step: 0.1,
    unit: 'px',
    filter: 'blur',
  },
  HEAT: {
    minValue: 1,
    maxValue: 3,
    step: 0.1,
    unit: '',
    filter: 'brightness',
  },
};
let currentEffect = null;

noUiSlider.create(slider.element, {
  start: 100,
  step: 1,
  connect: 'lower',
  range: {
    min: 0,
    max: 100,
  },
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const resetEffect = () => {
  image.removeAttribute('class');
  image.style.filter = 'none';
  currentEffect = null;
  slider.output.value = 100;
  slider.element.noUiSlider.set(100);
  noneEffect.checked = true;
};

const changeEffectLevel = (level) => {
  image.style.filter = `${currentEffect.filter}(${level + currentEffect.unit})`;
};

slider.element.noUiSlider.on('update', () => {
  if (!currentEffect) {
    return;
  }
  const value = slider.element.noUiSlider.get();
  slider.output.value = value;
  changeEffectLevel(value);
});

const applyEffect = (effect) => {
  if (effect === 'none') {
    slider.container.classList.add('hidden');
    resetEffect();
    return;
  }
  slider.container.classList.remove('hidden');
  const effectData = effects[effect.toUpperCase()];
  image.classList = `effects__preview--${effect}`;
  currentEffect = effectData;

  slider.element.noUiSlider.updateOptions({
    start: effectData.maxValue,
    step: effectData.step,
    range: {
      min: effectData.minValue,
      max: effectData.maxValue,
    },
  });
};

const onEffectButtonClick = (evt) => {
  if (!evt.target.matches('input[type="radio"]')) {
    return;
  }
  evt.target.checked = true;
  applyEffect(evt.target.value);
};

export { resetEffect, onEffectButtonClick };
