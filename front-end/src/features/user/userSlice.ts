import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import userService from "./userService";

interface UserState {
  _id: string | null;
  full_name: string | null;
  email: string | null;
  mobile: string | null;
  token: string | null;
}

interface InitialState {
  user: UserState;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string;
}

const userDefaultState: UserState = {
  _id: null,
  full_name: null,
  email: null,
  mobile: null,
  token: null,
};

const initialState: InitialState = {
  user: userDefaultState,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// Define the parameter and return types for login async thunk
interface LoginUserData {
  email: string;
  password: string;
}

export const login = createAsyncThunk<UserState, LoginUserData>(
  "user/admin-login",
  async (user, thunkAPI) => {
    try {
      return await userService.login(user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "An error occurred");
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<UserState>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(
        login.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.payload || "Login failed";
        }
      );
  },
});

export default userSlice.reducer;
