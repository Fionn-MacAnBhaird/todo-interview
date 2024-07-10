import { generateSum, asyncSeriesExecuter, getUniqueValues, run, asyncFunction, printJohn, printCarrie, printJohnName, printCarrieName, printJohnAge, printCarrieAge } from './util'

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

describe('iterator', () => {

  it('prints', async () => {
    // Call your function with a sample input
    const res1 = run(50)();

    expect(res1).toEqual(51);
  });
});

describe('Promisify', () => {

  it('converts the timeout into a promise and returns hello', async () => {
    // Call your function with a sample input
    const res1 = await asyncFunction();

    expect(res1).toEqual('Hello');
  });
});


describe('Print John and Carrie names', () => {

  it('prints Johns Name', () => {
    const res1 = printJohnName();

    expect(res1).toEqual('John');
  });

  it('prints Carries Name', () => {
    const res2 = printCarrieName();

    expect(res2).toEqual('Carrie');
  });
  it('prints Johns Age', () => {
    const res1 = printJohnAge();

    expect(res1).toEqual(23);
  });

  it('prints Carries Age', () => {
    const res2 = printCarrieAge();

    expect(res2).toEqual(24);
  });

});