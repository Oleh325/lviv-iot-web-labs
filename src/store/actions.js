export const addItemToCart = (state, action) => {
    const newItem = action.payload;

    const item = state.itemsList.find((item) => item.compositeId === newItem.id + newItem.option);
    if (item) {
        item.quantity++;
    } else {
        state.itemsList.push({
            id: newItem.id,
            compositeId: newItem.id + newItem.option,
            price: newItem.price,
            quantity: 1
        });
    }
}

export const removeItemFromCart = (state, action) => {
    const id = action.payload;
    
    const item = state.itemsList.find((item) => item.compositeId === id);
    if (item) {
        state.itemsList = state.itemsList.filter((item) => item.compositeId !== id);
    }
}

export const clearCart = (state) => {
    state.itemsList = [];
}

export const incrementItem = (state, action) => {
    const id = action.payload;

    const item = state.itemsList.find((item) => item.compositeId === id);

    if (item) {
        item.quantity++;
    }
}

export const decrementItem = (state, action) => {
    const id = action.payload;

    const item = state.itemsList.find((item) => item.compositeId === id);

    if (item) {
        if (item.quantity > 1) {
            item.quantity--;
        }
    }
}

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