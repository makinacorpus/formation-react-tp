import nominatim from './nominatim';
import axios from 'axios';

describe('nominatim service is well formed', () => {

  test('expect it has getNominatimData method', () => {
    expect(nominatim.getNominatimData).not.toBeUndefined();
  });

  test('expect the default url is the right one', done => {
    // mock the axios.post method, so it will just resolve the Promise.
    axios.get = jest.fn((url) => {
      expect(url).toBe('http://nominatim.openstreetmap.org/search/toulouse?format=json');
      return Promise.resolve({data:''});
    });
    nominatim.getNominatimData().then(() => done());
  });

  test('expect the catch works well', done => {
    // mock the axios.post method, so it will just resolve the Promise.
    axios.get = jest.fn((url) => {
      return Promise.reject();
    });
    nominatim.getNominatimData().catch(() => done());
  });
});
