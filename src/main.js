import spotify from './Spotify';

import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albums = spotify.search.albums('The Beatles');
const albumList = document.getElementById('album-list');
albums.then(data => renderAlbums(data.albums.items, albumList));

const album = spotify.album.getAlbum('03Qh833fEdVT30Pfs93ea6');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');
album
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
