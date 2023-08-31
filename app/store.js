const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("./features/cake/cakeSlice");
const icreamReducer = require("./features/icecream/icecreamSlice");

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icreamReducer
    }
});

module.exports = store;