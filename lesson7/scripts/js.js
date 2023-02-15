
const imagesToLoad = document.querySelectorAll("img[image_src]");


const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px",
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("image_src"));
    image.onload = () => { image.removeAttribute("image_src"); };
};

if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
}
else {

}