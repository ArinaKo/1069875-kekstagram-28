const form = document.querySelector('.img-upload__form');
const image = form.querySelector('.img-upload__preview');
const scale = {
  controls: {
    decrease: form.querySelector('.scale__control--smaller'),
    increase: form.querySelector('.scale__control--bigger'),
    output: form.querySelector('.scale__control--value'),
  },
  step: 25,
  value: 100,
  min: 25,
  max: 100,
};

const changeImageSize = (decreaseSize, button) => {
  if (decreaseSize) {
    scale.value -= scale.step;
  } else {
    scale.value += scale.step;
  }

  scale.controls.output.value = `${scale.value}%`;
  image.style.transform = `scale(${scale.value / 100})`;

  if (scale.value === scale.min || scale.value === scale.max) {
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

scale.controls.increase.addEventListener('click', onScaleClick);
scale.controls.decrease.addEventListener('click', onScaleClick);
