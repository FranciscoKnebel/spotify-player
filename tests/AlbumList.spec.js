import 'jsdom-global/register';
import chai, { expect } from 'chai';
import chaiHtml from 'chai-html';

import renderAlbums from '../src/AlbumList';

chai.use(chaiHtml);

describe('AlbumList', () => {
	describe('Smoke Tests', () => {
		it('should exist', () => {
			expect(renderAlbums).to.exist;
		});

		it('should be a function', () => {
			expect(renderAlbums).to.be.a.function;
		});
	});

	describe('Functionality', () => {
		const data = {
			album_type: 'album',
			artists: [{
				name: 'Incubus',
			}],
			id: '6peEdPVO73WtgGah5sEhX4',
			images: [{
				height: 640,
				url: 'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
				width: 640,
			}, {
				height: 300,
				url: 'https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6',
				width: 300,
			}, {
				height: 64,
				url: 'https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16',
				width: 64,
			}],
			name: 'The Essential Incubus',
			type: 'album',
		};

		it('should create and append the markup given the correct data', () => {
			const markup = `
				<div class="list-item" data-album-id="${data.id}">
					<img src="${data.images[2].url}" alt="${data.name}" class="list-image" data-album-id="${data.id}">
					<div class="list-description" data-album-id="${data.id}">
						<p class="list-title" data-album-id="${data.id}">${data.name}</p>
						<p class="list-subtitle" data-album-id="${data.id}">${data.artists[0].name}</p>
					</div>
				</div>
			`;

			const element = document.createElement('div');

			renderAlbums(data, element);
			expect(element.innerHTML).html.to.be.equal(markup);
		});

		it('should create and append when more than one album', () => {
			const markup = `
				<div class="list-item" data-album-id="${data.id}">
					<img src="${data.images[2].url}" alt="${data.name}" class="list-image" data-album-id="${data.id}">
					<div class="list-description" data-album-id="${data.id}">
						<p class="list-title" data-album-id="${data.id}">${data.name}</p>
						<p class="list-subtitle" data-album-id="${data.id}">${data.artists[0].name}</p>
					</div>
				</div>
				<div class="list-item" data-album-id="${data.id}">
					<img src="${data.images[2].url}" alt="${data.name}" class="list-image" data-album-id="${data.id}">
					<div class="list-description" data-album-id="${data.id}">
						<p class="list-title" data-album-id="${data.id}">${data.name}</p>
						<p class="list-subtitle" data-album-id="${data.id}">${data.artists[0].name}</p>
					</div>
				</div>
			`;
			const element = document.createElement('div');

			renderAlbums([data, data], element);
			expect(element.innerHTML).html.to.be.equal(markup);
		});
	});
});
