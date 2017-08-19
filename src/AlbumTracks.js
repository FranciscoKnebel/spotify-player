import convertMS from '../src/convertMS';

function createMarkup(tracks) {
	return tracks.map(track => `
    <div class="music" data-track-preview="${track.preview_url}">
      <p class="number">${track.track_number}</p>
      <p class="title">${track.name}</p>
      <p class="duration">${convertMS(track.duration_ms)}</p>
    </div>
  `).join('');
}

export default function renderAlbumTracks(data, element) {
	let markupData;
	if (Array.isArray(data)) {
		markupData = data;
	} else {
		markupData = [data];
	}

	const markup = createMarkup(markupData);
	element.innerHTML = markup;
}
