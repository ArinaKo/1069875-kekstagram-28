const Scale = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
};
const form = document.querySelector('.img-upload__form');
const image = form.querySelector('.img-upload__preview img');
const Controls = {
  decrease: form.querySelector('.scale__control--smaller'),
  increase: form.querySelector('.scale__control--bigger'),
  output: form.querySelector('.scale__control--value'),
};

let sizingValue = 100;

const resetSizing = () => {
  sizingValue = Scale.MAX;
  Controls.output.value = `${sizingValue}%`;
  image.style.transform = `scale(${sizingValue / 100})`;
};

const changeImageSize = (decreaseSize, button) => {
  if (decreaseSize) {
    sizingValue -= Scale.STEP;
  } else {
    sizingValue += Scale.STEP;
  }

  Controls.output.value = `${sizingValue}%`;
  image.style.transform = `scale(${sizingValue / 100})`;

  if (sizingValue === Scale.MIN || sizingValue === Scale.MAX) {
    button.disabled = true;
  } else {
    Controls.increase.disabled = false;
    Controls.decrease.disabled = false;
  }
};

const onScaleClick = (evt) => {
  let decrease = true;
  if (evt.target === Controls.increase) {
    decrease = false;
  }
  changeImageSize(decrease, evt.target);
};

export { resetSizing, onScaleClick };
