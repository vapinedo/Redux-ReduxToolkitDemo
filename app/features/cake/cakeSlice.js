const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
    numberOfCakes: 20
};

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfCakes--;
        },
        restock: (state, action) => {
            state.numberOfCakes += action.payload 
        }
    }
});

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions 