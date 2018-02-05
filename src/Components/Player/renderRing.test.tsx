import { 
  TOP_OF_CIRCLE,
  centers,
  radius,
  progressRadians
 } from './renderRing';

describe('centers', () => {
  it('returns the center x and y coordinates of the given canvas in a tuple', () => {
    expect(centers(50, 100)).toEqual([25, 50]);
  });
});

describe('radius', () => {
  it('returns one half of the lesser of the width and height of the given canvas', () => { 
    expect(radius(50, 100)).toEqual(25);
  });
});

describe('progressRadians', () => {
  it('returns PI greater than TOP_OF_CIRCLE given 0.5', () => {
    expect(progressRadians(0.5)).toEqual(TOP_OF_CIRCLE + Math.PI);
  });
  it('returns TOP_OF_CIRCLE given 0', () => {
    expect(progressRadians(0)).toEqual(TOP_OF_CIRCLE);
  });
});

