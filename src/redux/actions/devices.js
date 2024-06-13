// actions/sneakers.js

export const FETCH_DEVICES_REQUEST = "FETCH_DEVICES_REQUEST";
export const FETCH_DEVICES_SUCCESS = "FETCH_DEVICES_SUCCESS";
export const FETCH_DEVICES_FAILURE = "FETCH_DEVICES_FAILURE";

export const fetchDevicesRequest = () => ({
  type: FETCH_DEVICES_REQUEST,
});

export const fetchDevicesSuccess = (devices) => ({
  type: FETCH_DEVICES_SUCCESS,
  payload: devices,
});

export const fetchDevicesFailure = (error) => ({
  type: FETCH_DEVICES_FAILURE,
  payload: error,
});
