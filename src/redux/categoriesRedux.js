//selectors
export const getAllCategories = (state) => {
  return state.categories;
};
export const getPostsByCategory = ({ posts }, postCategory) => posts.filter((post) => post.category === postCategory);

const categoriesReducer = (statePart = []) => {
  return statePart;
};
export default categoriesReducer;
