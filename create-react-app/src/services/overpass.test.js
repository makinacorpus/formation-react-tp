import overpass from './overpass';

it('expect overpass service has getOverpassData method', () => {
  expect(overpass.getOverpassData).not.toBeUndefined();
});
