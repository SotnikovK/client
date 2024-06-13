export const SET_SORT_FILTER = "SET_SORT_FILTER";

export const setSortFilter = (sortBy) => ({
    type: SET_SORT_FILTER,
    payload: sortBy,
});