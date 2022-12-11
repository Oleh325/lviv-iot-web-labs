export const addFilter = (state, action) => {
    const newFilter = action.payload;

    const filter = state.filtersList.find((filter) => filter.name === newFilter.name);
    if (filter) {
        if (filter.filter !== newFilter.filter) {
            filter.filter = newFilter.filter;
        }
    } else {
        state.filtersList.push({
            name: newFilter.name,
            filter: newFilter.filter
        });
    }
}

export const removeFilter = (state, action) => {
    const name = action.payload;
    
    const filter = state.filtersList.find((filter) => filter.name === name);
    if (filter) {
        state.filtersList = state.filtersList.filter((filter) => filter.name !== name);
    }
}

export const removeAllFilters = (state) => {
    state.filtersList = [];
}

export const addSearch = (state, action) => {
    state.input = action.payload;
}