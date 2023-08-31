const { fetchUsers } = require("./app/features/user/userSlice");
const store = require("./app/store");
const cakeActions = require("./app/features/cake/cakeSlice").cakeActions;
const icecreamActions = require("./app/features/icecream/icecreamSlice").icecreamActions;
const userActions = require("./app/features/user/userSlice").fetchUsers; 

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
    console.log("Updated state", store.getState()); 
});

console.log("---- USER ----")
store.dispatch(fetchUsers());

// console.log("---- CAKE ----")
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered()); 
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restock(3));

// console.log("---- ICE CREAM ----")
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(2));

// unsubscribe(); 