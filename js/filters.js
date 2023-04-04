const CLASS_TO_HIDE = 'img-filters--inactive';
const CLASS_ACTIVE = 'img-filters__button--active';
const filtersBlock = document.querySelector('.img-filters');
const filtersForm = filtersBlock.querySelector('.img-filters__form');

let currentFilter = 'default';

const sortPosts = (itemA, itemB) => itemB - itemA;

const filterPosts = (post) => {
  const filteredPosts = post.slice();

  if (currentFilter === 'discussed') {
    filteredPosts.sort((a, b) =>
      sortPosts(a.comments.length, b.comments.length)
    );
  }

  return filteredPosts;
};

const changeFilter = (target) => {
  const filterName = target.id.replace('filter-', '');
  currentFilter = filterName;

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
