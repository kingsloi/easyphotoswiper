import EasyPhotoSwiper from './lib/easyPhotoSwiper'

const PhotoGallery = new EasyPhotoSwiper({
  wrap: '.js-gallery',
  item: '.js-gallery__item',
  link: '.js-gallery__link',
  image: 'img'
})
PhotoGallery.init()
