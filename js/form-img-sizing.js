const form = document.querySelector('.img-upload__form');
const image = form.querySelector('.img-upload__preview img');
const scale = {
  controls: {
    decrease: form.querySelector('.scale__control--smaller'),
    increase: form.querySelector('.scale__control--bigger'),
    output: form.querySelector('.scale__control--value'),
  },
  STEP: 25,
  MIN: 25,
  MAX: 100,
  value: 100,
};

const resetSizing = () => {
  scale.value = scale.MAX;
  scale.controls.output.value = `${scale.value}%`;
  image.style.transform = `scale(${scale.value / 100})`;
};

const changeImageSize = (decreaseSize, button) => {
  if (decreaseSize) {
    scale.value -= scale.STEP;
  } else {
    scale.value += scale.STEP;
  }

  scale.controls.output.value = `${scale.value}%`;
  image.style.transform = `scale(${scale.value / 100})`;

  if (scale.value === scale.MIN || scale.value === scale.MAX) {
    button.disabled = true;
  } else {
    scale.controls.increase.disabled = false;
    scale.controls.decrease.disabled = false;
  }
};

const onScaleClick = (evt) => {
  let decrease = true;
  if (evt.target === scale.controls.increase) {
    decrease = false;
  }
  changeImageSize(decrease, evt.target);
};

export { resetSizing, onScaleClick };
