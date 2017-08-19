import 'jsdom-global/register';
import chai, { expect } from 'chai';
import chaiHtml from 'chai-html';

import renderAlbumInfo from '../src/AlbumInfo';

chai.use(chaiHtml);

describe('AlbumInfo', () => {
	describe('Smoke Tests', () => {
		it('should exist', () => {
			expect(renderAlbumInfo).to.exist;
		});

		it('should be a function', () => {
			expect(renderAlbumInfo).to.be.a.function;
		});
	});

	describe('Functionality', () => {
		const album = {
			name: 'Make Yourself',
			artists: [
				{
					name: 'Incubus',
				},
			],
			tracks: {
				total: 13,
			},
			images: [
				{
					url: 'https://i.scdn.co/image/a13aadb368a956be48fe9089acb64333f0c0ca40',
				},
			],
		};

		const markup = `
      <img class="image" src="${album.images[0].url}" alt="${album.name}">
      <p class="title">${album.name}</p>
      <p class="artist">${album.artists[0].name}</p>
      <p class="counter">${album.tracks.total} Músicas</p>
    `;

		it('should create and append the album info markup given the correct data', () => {
			const element = document.createElement('div');

			renderAlbumInfo(album, element);
			expect(element.innerHTML).html.to.be.equal(markup);
		});

		it('should return the data that it received', () => {
			const element = document.createElement('div');

			const data = renderAlbumInfo(album, element);
			expect(data).to.be.equal(album);
		});
	});
});
