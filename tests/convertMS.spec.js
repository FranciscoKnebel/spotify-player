import { expect } from 'chai';
import convertMS from '../src/convertMS';

describe('Convert ms to min:sec', () => {
	it('should receive 0ms and convert to 0:00', () => {
		expect(convertMS(0)).to.be.equal('0:00');
	});

	it('should receive 1000ms and convert to 0:01', () => {
		expect(convertMS(1000)).to.be.equal('0:01');
	});

	it('should receive 10000ms and convert to 0:10', () => {
		expect(convertMS(10000)).to.be.equal('0:10');
	});

	it('should receive 59000ms and convert to 0:59', () => {
		expect(convertMS(59000)).to.be.equal('0:59');
	});

	it('should receive 60000ms and convert to 1:00', () => {
		expect(convertMS(60000)).to.be.equal('1:00');
	});

	it('should receive 60999ms and convert to 1:00', () => {
		expect(convertMS(60999)).to.be.equal('1:00');
	});

	it('should receive 600000ms and convert to 10:00', () => {
		expect(convertMS(600000)).to.be.equal('10:00');
	});

	it('should receive 650000ms and convert to 10:50', () => {
		expect(convertMS(650000)).to.be.equal('10:50');
	});

	it('should receive 660000ms and convert to 11:00', () => {
		expect(convertMS(660000)).to.be.equal('11:00');
	});
});
