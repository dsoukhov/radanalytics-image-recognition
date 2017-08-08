const statsReducer = (state = {numRes: null, timeTaken:null, dateLastRes:null, resultsHistory:null, images:null}, action) => {
  switch (action.type) {
    case "SET_LAST_RES_DATE":
      state = {
        ...state,
        dateLastRes: action.payload
      }
      break
    case "SET_LAST_RES_TIME_TAKEN":
      state = {
        ...state,
        timeTaken: action.payload
      }
      break
    case "SET_NUM_RES":
      state = {
        ...state,
        numRes: action.payload
      }
      break
    case "SET_RES_HIS":
      state = {
        ...state,
        resultsHistory: action.payload
      }
      break
  }
  return state
}

export default statsReducer