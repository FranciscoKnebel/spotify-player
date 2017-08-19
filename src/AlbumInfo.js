export default function renderAlbumInfo(album, element) {
	const markup = `
    <img class="image" src="${album.images[0].url}" alt="${album.name}">
    <p class="title">${album.name}</p>
    <p class="artist">${album.artists[0].name}</p>
    <p class="counter">${album.tracks.total} Músicas</p>
  `;

	element.innerHTML = markup;

	return album;
}
