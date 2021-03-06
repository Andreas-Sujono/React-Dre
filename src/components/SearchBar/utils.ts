/**
 * filter list of object based on keys
 * @param list list of object
 * @param keys  list of key from the object
 * @param searchValue search value
 * @param escapeRegex escape regex special value
 * @returns list of searched result object
 */
function searchFromListOfObject(
  list: Record<string, any>[],
  keys: string[],
  searchValue: string,
  escapeRegex: boolean = true
) {
  let result = list.filter((item) => {
    const escapedSearchValue = searchValue.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const searchRegex = new RegExp(escapeRegex ? escapedSearchValue : searchValue, 'i');
    let isFiltered = false;

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      if (searchRegex.test(item[key])) {
        isFiltered = true;
        break;
      }
    }

    return isFiltered;
  });
  if (!result || !result.length) result = [];
  return result;
}

function searchFromListOfString(
  list: string[],
  searchValue: string,
  escapeRegex: boolean = true
) {
  let result = list.filter((item) => {
    const escapedSearchValue = searchValue.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const searchRegex = new RegExp(escapeRegex ? escapedSearchValue : searchValue, 'i');
    return searchRegex.test(item);
  });
  if (!result || !result.length) result = [];
  return result;
}

export default searchFromListOfObject;
export {
  searchFromListOfObject,
  searchFromListOfString
};
