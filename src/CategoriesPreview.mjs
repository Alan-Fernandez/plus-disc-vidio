async function getCategoriesPreview(genres){
    const { data } = await genres ;
    const categories = data.genres;
  
   
    categories.forEach(category  => {
      const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');
  
      const categoryContainer = document.createElement('div');
      categoryContainer.classList.add('category-container');
  
      const categoryTitle = document.createElement('h3');
      categoryTitle.classList.add('category-title');
      categoryTitle.setAttribute('id', 'id' + category.id);
      const categoryTitleText = document.createTextNode(category.name);
  
      categoryTitle.appendChild(categoryTitleText);
      categoryContainer.appendChild(categoryTitle);
      previewCategoriesContainer.appendChild(categoryContainer);
    })
  
  }

  export {getCategoriesPreview};