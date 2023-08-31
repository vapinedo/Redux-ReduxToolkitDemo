const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

const initialState = {
    data: [],
    error: "",
    isLoading: false
};

// auto generate pending, fulfill ed or rejected action types 
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
    return axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => response.data.map(user => user.id))
});

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, state => {
            state.isLoading = true;
        }),
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = "";
        }),
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false,
            state.data = [];
            state.error = action.error.message;
        })
    }
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;