// state可以设置默认值
const initState = {
  activity_data: {},
  policyDetailData: {},
};

const reducer = (state = initState, action) => {
  if (action.type === "UPDATE_CURRENT_ACTIVITY_INFO") {
    return {
      ...state,
      activity_data: action.data,
    };
  }
  if (action.type === "POLICY_DETAIL_INFO") {
    return {
      ...state,
      policyDetailData: action.data,
    };
  }
  return state;
};

export default reducer;
