import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { customFetch } from "../../utils/axios";

const initialFiltersState = {
  search: "",
  category: "all",
  price: "all",
  level: "all",
  language: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
  isLoading: true,
  blogs: [],
  totalBlogs: 0,
  numOfPages: 1,
  page: 1,
  ...initialFiltersState,
};

export const getAllBlogs = createAsyncThunk(
  "allBlogs/getBlogs",
  async (_, { rejectWithValue }) => {
    const { page, search, category, price, level, language, sort } =
      initialState;

    let url = `/?category=${category}&price=${price}&level=${level}&language=${language}&sort=${sort}&page=${page}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    try {
      const response = await customFetch.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const allBlogsSlice = createSlice({
  name: "allBlogs",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    clearAllBlogsState: (state) => initialState,
  },
  extraReducers: {
    [getAllBlogs.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllBlogs.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.blogs = payload.blogs;
      state.numOfPages = payload.numOfPages;
      state.totalBlogs = payload.totalBlogs;
    },
    [getAllBlogs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  changePage,
  clearAllBlogsState,
} = allBlogsSlice.actions;

export default allBlogsSlice.reducer;
