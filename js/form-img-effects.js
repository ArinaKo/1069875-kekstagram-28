const DEFAULT_EFFECT = 'none';
const Effects = {
  NONE: {
    minValue: 0,
    maxValue: 100,
    step: 1,
    unit: '',
  },
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

const form = document.querySelector('.img-upload__form');
const image = form.querySelector('.img-upload__preview img');
const noneEffect = form.querySelector('#effect-none');
const slider = {
  container: form.querySelector('.effect-level'),
  element: form.querySelector('.effect-level__slider'),
  output: form.querySelector('.effect-level__value'),
};

let currentEffect = DEFAULT_EFFECT;

noUiSlider.create(slider.element, {
  start: Effects.NONE.maxValue,
  step: Effects.NONE.step,
  connect: 'lower',
  range: {
    min: Effects.NONE.minValue,
    max: Effects.NONE.maxValue,
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
  image.style.filter = DEFAULT_EFFECT;
  slider.output.value = 100;
  noneEffect.checked = true;
  currentEffect = DEFAULT_EFFECT;
};

const changeEffectLevel = (level) => {
  const {filter, unit} = Effects[currentEffect.toUpperCase()];
  image.style.filter = `${filter}(${level + unit})`;
};

const updateSlider = () => {
  const {maxValue, minValue, step} = Effects[currentEffect.toUpperCase()];
  slider.element.noUiSlider.updateOptions({
    start: maxValue,
    step: step,
    range: {
      min: minValue,
      max: maxValue,
    },
  });
};

const applyEffect = (effect) => {
  currentEffect = effect;
  updateSlider();

  if (effect === DEFAULT_EFFECT) {
    slider.container.classList.add('hidden');
    resetEffect();
    return;
  }

  slider.container.classList.remove('hidden');
  image.classList = `effects__preview--${effect}`;
};

const onEffectButtonClick = (evt) => {
  if (!evt.target.matches('input[type="radio"]')) {
    return;
  }
  evt.target.checked = true;
  applyEffect(evt.target.value);
};

const onSliderUpdate = () => {
  if (currentEffect === DEFAULT_EFFECT) {
    return;
  }
  const value = slider.element.noUiSlider.get();
  slider.output.value = value;
  changeEffectLevel(value);
};

export { resetEffect, onEffectButtonClick, onSliderUpdate };
