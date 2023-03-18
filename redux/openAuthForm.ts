import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  openAuthModal: boolean;
} = {
  openAuthModal: false,
};

const openAuthModalSlice = createSlice({
  name: 'openAuthModal',
  initialState,
  reducers: {
    toggleAuthModalStatus(
      state,
      action: {
        payload: {
          openAuthModal: boolean;
        };
      }
    ) {
      state.openAuthModal = action.payload.openAuthModal;
    },
  },
});

export default openAuthModalSlice.reducer;
export const { toggleAuthModalStatus } = openAuthModalSlice.actions;
