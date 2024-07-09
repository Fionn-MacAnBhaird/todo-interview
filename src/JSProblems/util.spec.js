import { generateSum, asyncSeriesExecuter, getUniqueValues, getLoopValues } from './util'

describe('generateSum', () => {
  let filterSpy, mapSpy, reduceSpy;

  beforeEach(() => {
    // Spy on each method
    filterSpy = jest.spyOn(Array.prototype, 'filter').mockImplementation(() => []);
    mapSpy = jest.spyOn(Array.prototype, 'map').mockImplementation(() => []);
    reduceSpy = jest.spyOn(Array.prototype, 'reduce').mockImplementation(() => []);
  });

  afterEach(() => {
    // Restore the original implementations
    filterSpy.mockRestore();
    mapSpy.mockRestore();
    reduceSpy.mockRestore();
  });

  it('uses filter, map, and reduce', () => {
    // Call your function with a sample input
    generateSum([1, 2, 3]);

    // Assert that each method was called
    expect(filterSpy).toHaveBeenCalled();
    expect(mapSpy).toHaveBeenCalled();
    expect(reduceSpy).toHaveBeenCalled();
  });
});

describe('arrayUnique', () => {

  it('finds the unique values in the array', () => {
    // Call your function with a sample input
    const res = getUniqueValues([1,1,3,4,4,5,2,21,11,21,3,8,5,6,5,4]);

    // Assert that each method was called
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 8, 11, 21]);
  });
});