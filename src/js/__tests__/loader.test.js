import Loader from '../loader';
import fetch from 'jest-fetch-mock';
global.fetch = fetch;

function setUpDOM() {
  document.body.innerHTML = '<div id="insert"></div>';
}

describe('Loader error messages', () => {
  beforeEach(() => {
    global.console = { error: jest.fn() };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('load should console an error when nothing is passed', () => {
    Loader.load();
    expect(console.error).toHaveBeenCalled();
  });

  it('loadAll should console an error when nothing is passed', () => {
    Loader.loadAll();
    expect(console.error).toHaveBeenCalled();
  });
});

describe('Loader fetch methods', () => {
  beforeEach(() => {
    setUpDOM();
    fetch.resetMocks();
  });

  it('should insert the markup from a path', async () => {
    fetch.mockResponseOnce('<div>Test markup</div>');
    expect.assertions(1);
    await expect(Loader.load('./test.html', '#insert')).resolves.toEqual('<div>Test markup</div>');
  });

  it('loadAll should only resolve after all promises', async () => {
    fetch.mockResponse('<div>Test markup</div>');
    const componentA = { path:'./test.html', selector: '#insert' };
    const componentB = { path:'./testB.html', selector: '#insert' };
    await expect(Loader.loadAll([componentA, componentB])).resolves.toEqual([componentA, componentB]);
  });
});