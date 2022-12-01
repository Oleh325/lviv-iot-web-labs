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