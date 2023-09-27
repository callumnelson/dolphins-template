import dolphinsReducer, {
  incrementGallery,
  incrementHistory,
} from "./dolphinsSlice"

import { testDolphins } from "../../testData/testDolphins"

import { DolphinsState } from "../../types/dolphins"

describe("dolphins reducer", () => {
  it("should handle initial state", () => {
    expect(dolphinsReducer(undefined, { type: "unknown" })).toEqual({
      gallery: [],
      history: [],
      currDolph: null,
      status: "idle",
      message: "Loading your dolphins...",
    })
  })
})
