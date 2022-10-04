export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
    </li>
  );
};

//  <a href="{{largeImageURL}}">
//    <img src="{{webformatURL}}" alt="{{tags}}" title="{{tags}}" loading="lazy" />
//  </a>;
