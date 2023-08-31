const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("./features/cake/cakeSlice");
const icreamReducer = require("./features/icecream/icecreamSlice");
const useReducer = require("./features/user/userSlice");
// const reduxLogger = require("redux-logger")

// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icreamReducer,
        user: useReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;