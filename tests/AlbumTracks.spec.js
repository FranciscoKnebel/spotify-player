import 'jsdom-global/register';
import chai, { expect } from 'chai';
import chaiHtml from 'chai-html';

import renderAlbumTracks from '../src/AlbumTracks';
import convertMS from '../src/convertMS';

chai.use(chaiHtml);

describe('AlbumTracks', () => {
	describe('Smoke Tests', () => {
		it('should exist', () => {
			expect(renderAlbumTracks).to.exist;
		});

		it('should be a function', () => {
			expect(renderAlbumTracks).to.be.a.function;
		});
	});

	describe('Functionality', () => {
		const data = {
			name: 'Back In The U.S.S.R. - Remastered',
			track_number: 1,
			duration_ms: 163453,
			preview_url: 'https://p.scdn.co/mp3-preview/74e55f23c327f3a52d6d23f12c0af57e2beea3cd?cid=8897482848704f2a8f8d7c79726a70d4',
		};

		it('should create and append the track markup given the correct data', () => {
			const markup = `
        <div class="music" data-track-preview="${data.preview_url}">
          <p class="number">${data.track_number}</p>
          <p class="title">${data.name}</p>
          <p class="duration">${convertMS(data.duration_ms)}</p>
        </div>
      `;

			const element = document.createElement('div');
			renderAlbumTracks(data, element);

			expect(element.innerHTML).html.to.be.equal(markup);
		});

		it('should create and append if more than one track is passed', () => {
			const markup = `
        <div class="music" data-track-preview="${data.preview_url}">
          <p class="number">${data.track_number}</p>
          <p class="title">${data.name}</p>
          <p class="duration">${convertMS(data.duration_ms)}</p>
        </div>
        <div class="music" data-track-preview="${data.preview_url}">
          <p class="number">${data.track_number}</p>
          <p class="title">${data.name}</p>
          <p class="duration">${convertMS(data.duration_ms)}</p>
        </div>
      `;

			const element = document.createElement('div');
			renderAlbumTracks([data, data], element);

			expect(element.innerHTML).html.to.be.equal(markup);
		});

		it('should create and append if more than two tracks are passed', () => {
			const markup = `
        <div class="music" data-track-preview="${data.preview_url}">
          <p class="number">${data.track_number}</p>
          <p class="title">${data.name}</p>
          <p class="duration">${convertMS(data.duration_ms)}</p>
        </div>
        <div class="music" data-track-preview="${data.preview_url}">
          <p class="number">${data.track_number}</p>
          <p class="title">${data.name}</p>
          <p class="duration">${convertMS(data.duration_ms)}</p>
        </div>
        <div class="music" data-track-preview="${data.preview_url}">
          <p class="number">${data.track_number}</p>
          <p class="title">${data.name}</p>
          <p class="duration">${convertMS(data.duration_ms)}</p>
        </div>
        <div class="music" data-track-preview="${data.preview_url}">
          <p class="number">${data.track_number}</p>
          <p class="title">${data.name}</p>
          <p class="duration">${convertMS(data.duration_ms)}</p>
        </div>
        <div class="music" data-track-preview="${data.preview_url}">
          <p class="number">${data.track_number}</p>
          <p class="title">${data.name}</p>
          <p class="duration">${convertMS(data.duration_ms)}</p>
        </div>
        <div class="music" data-track-preview="${data.preview_url}">
          <p class="number">${data.track_number}</p>
          <p class="title">${data.name}</p>
          <p class="duration">${convertMS(data.duration_ms)}</p>
        </div>
        <div class="music" data-track-preview="${data.preview_url}">
          <p class="number">${data.track_number}</p>
          <p class="title">${data.name}</p>
          <p class="duration">${convertMS(data.duration_ms)}</p>
        </div>
        <div class="music" data-track-preview="${data.preview_url}">
          <p class="number">${data.track_number}</p>
          <p class="title">${data.name}</p>
          <p class="duration">${convertMS(data.duration_ms)}</p>
        </div>
        <div class="music" data-track-preview="${data.preview_url}">
          <p class="number">${data.track_number}</p>
          <p class="title">${data.name}</p>
          <p class="duration">${convertMS(data.duration_ms)}</p>
        </div>
      `;

			const element = document.createElement('div');
			renderAlbumTracks([data, data, data, data, data, data, data, data, data], element);

			expect(element.innerHTML).html.to.be.equal(markup);
		});
	});
});
