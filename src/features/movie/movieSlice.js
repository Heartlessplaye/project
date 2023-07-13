import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API_URL from  "../../common/apis/movieApi"
import { API_KEY }  from "../../common/apis/movieApiKey"




 export const fetchMovies = createAsyncThunk("fetchMovies/asyncfetch", async (term) => {
  const response = await API_URL.get(
    `?apiKey=${API_KEY}&s=${term}&type=movie`
  );
  
  return response.data;
});

export const fetchShows = createAsyncThunk("fetchShows/asyncfetch", async (term) => {
    const response = await API_URL.get(
      `?apiKey=${API_KEY}&s=${term}&type=series`
    );
    
    return response.data;
  });


  export const fetchDetails = createAsyncThunk("fetchDetails/asyncfetch", async(id) => {
     const response = await API_URL.get(`?apiKey=${API_KEY}&i=${id}&Plot=full`);
     return response.data;
  })

const initialState = {
  movies: {},
  shows : {},
  selected: {},
};


const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    removeSelected : (state) => {
      state.selected = {};
    }
  },
  extraReducers : {
    [fetchMovies.pending]: () => {
        console.log("Pending");
    },
    [fetchMovies.fulfilled]: (state,{payload})=>{
        console.log("fulfilled");
        return {...state,movies : payload};
    },
    [fetchMovies.rejected] : () => {
        console.log("rejected");
    },
    [fetchShows.fulfilled] : (state, {payload}) => {
        console.log("Retrieved Shows");
        return {...state,shows : payload};
    },
    [fetchDetails.fulfilled]: (state, action) => {
       console.log("Fulfilled details about movie/show");
       return {...state,selected : action.payload};
    }
  }
});

export const { addMovies, removeSelected } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelected = (state) => state.movies.selected;
export default movieSlice.reducer;
