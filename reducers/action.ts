export const UPDATE_CURRENT_ACTIVITY_INFO = "UPDATE_CURRENT_ACTIVITY_INFO";
export const POLICY_DETAIL_INFO = "POLICY_DETAIL_INFO";

// 当前活动详细信息
export const updateCurrentActivityInfo = (data) => {
  return { type: UPDATE_CURRENT_ACTIVITY_INFO, data };
};

// 当前政策详情
export const policyDetailInfo = (data) => {
  return { type: POLICY_DETAIL_INFO, data };
};
