const API_KEY = '29248542-cea93977a5234fa0e2d1b3dfd';

export const FetchGallery = query => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
      //     throw new Error(`No item ${query} found`);
    }
    return response.json();
  });
};
