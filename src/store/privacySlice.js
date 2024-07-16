import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
    name: "privacy",
    initialState: "false",
    reducers: {
        handlePrivacyToggele: (state) => {
            return !state;
        }
    }
})

export const privacyActions = privacySlice.actions;
export default privacySlice;