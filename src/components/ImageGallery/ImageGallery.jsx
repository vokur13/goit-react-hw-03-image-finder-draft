import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({ data }) => {
  return (
    <ul className="ImageGallery">
      {data.map(item => (
        <ImageGalleryItem
          key={item.id}
          webformatURL={item.webformatURL}
          largeImageURL={item.largeImageURL}
          tags={item.tags}
        />
      ))}
    </ul>
  );
};
