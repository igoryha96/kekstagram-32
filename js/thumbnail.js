const thumbNail = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');



const crateThumbnail = (picture) => {
  const thumbnail = thumbNail.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = picture.url;
  thumbnail.querySelector('.picture__img').alt = picture.description;
  thumbnail.querySelector('.picture__likes').textContent = picture.likes;
  thumbnail.querySelector('.picture__comments').textContent = picture.comments.length;

  return thumbnail;
}

const generationThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnail = crateThumbnail(picture)
    fragment.append(thumbnail);
    container.append(fragment);
  });
}

export { generationThumbnails };
