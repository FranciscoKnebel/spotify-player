import spotify from './Spotify';

import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

import searchTrigger from './SearchTrigger';

searchTrigger();

const album = spotify.album.getAlbum('03Qh833fEdVT30Pfs93ea6');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');
album
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
