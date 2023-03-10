const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// const container = document.querySelector('.gallery');
// console.log(container);

// const galleryItems = images.map(image => {
// return `<li><img src="${image.url}" alt="${image.alt}" width=320></li>`
// }).join('');

// console.log(galleryItems);

// container.insertAdjacentHTML('afterbegin', galleryItems);

const gallery = document.querySelector('.gallery');
const galleryItem = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}"></li>`;
const galleryItems = images.map(galleryItem).join('');
gallery.insertAdjacentHTML('beforeend', galleryItems);
