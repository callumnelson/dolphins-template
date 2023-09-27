import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { DolphinsState } from "../../types/dolphins"
import { fetchDolphins } from "./dolphinsAPI"

const initialState: DolphinsState = {
  gallery: [],
  history: [],
  currDolph: null,
  status: "idle",
  message: "Loading your dolphins...",
}

export const getDolphinsAsync = createAsyncThunk(
  "dolphins/fetchDolphins",
  async () => {
    const data = await fetchDolphins()
    return data
  },
)

export const dolphinsSlice = createSlice({
  name: "dolphins",
  initialState,
  reducers: {
    incrementGallery: (state) => {
      if (state.currDolph) {
        const prevHistory =
          state.history.length < 5 ? state.history : state.history.slice(0, 4)
        state.history = [state.currDolph, ...prevHistory]
      }
      state.currDolph = state.gallery[0]
      state.gallery = state.gallery.slice(1)
      if (state.message) state.message = ""
    },
    incrementHistory: (state) => {
      state.currDolph = state.history[0]
      if (state.history.length) {
        state.history = state.history.slice(1)
      } else {
        state.currDolph = null
        state.message = "Cannot remember any more dolphins"
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDolphinsAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getDolphinsAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.gallery = [...action.payload]
        state.message = ""
      })
      .addCase(getDolphinsAsync.rejected, (state) => {
        state.status = "failed"
        state.message =
          "Hmmm there was a problem loading dolphins, please refresh the page"
      })
  },
})

export const { incrementGallery, incrementHistory } = dolphinsSlice.actions

export const selectGallery = (state: RootState) => state.dolphins.gallery
export const selectHistory = (state: RootState) => state.dolphins.history
export const selectMessage = (state: RootState) => state.dolphins.message
export const selectCurrDolph = (state: RootState) => state.dolphins.currDolph

export default dolphinsSlice.reducer
