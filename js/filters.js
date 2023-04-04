import { getRandomNumbers } from './utilities.js';

const RANDOM_POSTS_NUMBER = 10;
const CLASS_TO_HIDE = 'img-filters--inactive';
const CLASS_ACTIVE = 'img-filters__button--active';
const filtersBlock = document.querySelector('.img-filters');
const filtersForm = filtersBlock.querySelector('.img-filters__form');

const Filters = {
  DEFAULT: {
    filterPosts(posts) {
      return posts;
    },
  },
  RANDOM: {
    filterPosts(posts) {
      const randomIndexes = getRandomNumbers(
        RANDOM_POSTS_NUMBER,
        0,
        posts.length - 1
      );
      const randomPosts = [];
      randomIndexes.forEach((index) => {
        randomPosts.push(posts[index]);
      });
      return randomPosts;
    },
  },
  DISCUSSED: {
    filterPosts(posts) {
      return posts
        .slice()
        .sort((a, b) => sortPosts(a.comments.length, b.comments.length));
    },
  },
};

let currentFilter = Filters.DEFAULT;

function sortPosts(itemA, itemB) {
  return itemB - itemA;
}

const filterPosts = (posts) => currentFilter.filterPosts(posts);

const changeFilter = (target) => {
  const filterName = target.id.replace('filter-', '');
  currentFilter = Filters[filterName.toUpperCase()];

  const pastFilterButton = filtersForm.querySelector('[disabled]');
  pastFilterButton.disabled = false;
  pastFilterButton.classList.remove(CLASS_ACTIVE);

  const currentFilterButton = target;
  currentFilterButton.disabled = true;
  currentFilterButton.classList.add(CLASS_ACTIVE);
};

const setFilters = (cb) => {
  filtersBlock.classList.remove(CLASS_TO_HIDE);
  filtersForm.addEventListener('click', (evt) => {
    if (evt.target.matches('[type="button"]')) {
      changeFilter(evt.target);
      cb();
    }
  });
};

export { setFilters, filterPosts };
