

let imagesToLoad = document.querySelectorAll('img[image_src]');


const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('image_src'));
  image.onload = () => {image.removeAttribute('image_src');};
};

  if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }