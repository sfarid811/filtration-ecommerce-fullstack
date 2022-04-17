import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import toast from 'react-hot-toast';


const baseUrl = 'http://localhost:8000/api/v1/blogs';

const initialFiltersState = {
    search: '',
    category: 'all',
    price: 'all',
    level: 'all',
    language : 'all',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
  };
  
  const initialState = {
    isLoading: true,
    blogs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    ...initialFiltersState,
  };

  export const getAllBlogs = createAsyncThunk(
    "allBlogs/getBlogs",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(baseUrl);
  
        return response.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue(error.response?.data);
      }
    }
  );

  const allBlogsSlice = createSlice({
    name: 'allBlogs',
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
          console.log(payload)
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