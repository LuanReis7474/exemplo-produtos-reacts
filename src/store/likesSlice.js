import { createSlice } from '@reduxjs/toolkit';

const likesSlice = createSlice({
    name: 'likes',
    initialState: {
        likedProducts: [],
    },
    reducers: {
        likeProduct: (state, action) => {
            if (!state.likedProducts.includes(action.payload)) {
                state.likedProducts.push(action.payload);
            }
        },
        dislikeProduct: (state, action) => {
            state.likedProducts = state.likedProducts.filter(
                (id) => id !== action.payload
            );
        },
    },
});

export const { likeProduct, dislikeProduct } = likesSlice.actions;
export default likesSlice.reducer;