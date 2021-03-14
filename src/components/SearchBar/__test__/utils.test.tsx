import { searchFromListOfObject, searchFromListOfString } from '../utils';

describe('Test searchbar utils', () => {
  it('Should search correctly using searchFromListOfString', async () => {
    const list: string[] = ['test', 'hello', 'world', 'hi', 'test2', 'test3', 'tes', 'todd', 'aest', 't3st'];
    const searchValue = 'test';
    const expectedResult = ['test', 'test2', 'test3'];
    expect(searchFromListOfString(list, searchValue)).toEqual(expectedResult);
  });

  it('Should search correctly using searchFromListOfObject', async () => {
    const list = [{
      name: 'test',
      otherKey: 'test'
    }, {
      name2: 'test2',
      otherKey: 'otherKey'
    }, {
      name: 'test2',
      otherKey: 'test',
      otherKey2: 'test2'
    }, {
      name: 'tes',
      otherKey: 'test'
    }];
    const searchValue = 'test';
    const expectedResult = [{
      name: 'test',
      otherKey: 'test'
    }, {
      name: 'test2',
      otherKey: 'test',
      otherKey2: 'test2'
    }];
    expect(searchFromListOfObject(list, ['name'], searchValue)).toEqual(expectedResult);
    expect(searchFromListOfObject(list, ['name', 'otherKey'], searchValue)).toEqual([...expectedResult, {
      name: 'tes',
      otherKey: 'test'
    }]);
  });
});
