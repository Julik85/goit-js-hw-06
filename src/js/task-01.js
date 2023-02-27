const categories = document.querySelectorAll('.item');
console.log(`Namber of categories: ${categories.length}`);

categories.forEach(category =>{
    // console.log(category);
    const categoryHeader=category.querySelector("h2").textContent;
    const liEl= category.querySelectorAll('li').length;
    console.log(`Category: ${categoryHeader}`);
    console.log(`Elements: ${liEl}`);
})
 



  