const rootClass = 'gallery';
const el = document.getElementsByClassName(rootClass)[0];
const thumbnailsEl = el.getElementsByClassName(`${rootClass}__thumbnail-list`)[0];
const thumbnailButtonEls = thumbnailsEl.getElementsByTagName('button');
const mainImageEl = document.getElementById(`${rootClass}__main-image`);
const mainImageContainerEl = el.getElementsByClassName(`${rootClass}__main-image__inner-container`)[0];
const minimizeEl = document.getElementById(`${rootClass}__minimize`);
const maximizeEl = document.getElementById(`${rootClass}__maximize`);

for (let i=0; i<thumbnailButtonEls.length; i++) {
    const button = thumbnailButtonEls[i];
    button.addEventListener('click', (e) => {
        image = e.currentTarget.getElementsByTagName('img')[0];
        mainImageEl.setAttribute("src",  image.attributes["data-main-image-url"].value);
    });
}


maximizeEl.addEventListener('click', (e) => {
    mainImageEl.style.width = "150%";
    mainImageContainerEl.style.overflow = "auto";
    maximizeEl.setAttribute("disabled", true);
    minimizeEl.removeAttribute("disabled");
});

minimizeEl.addEventListener('click', (e) => {
    mainImageEl.style.width ="100%";
    mainImageContainerEl.style.overflow = "initial";
    minimizeEl.setAttribute("disabled", true);
    maximizeEl.removeAttribute("disabled");;
});