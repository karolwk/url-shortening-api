import { createSlice } from '@reduxjs/toolkit';
import { shortedApi } from '../services/api';
import { ShortCodeURL } from '../../shared/types';
type DomainState = {
  domains: ShortCodeURL[];
};

const slice = createSlice({
  name: 'domains',
  initialState: { domains: [] } as DomainState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      shortedApi.endpoints.getShortedData.matchFulfilled,
      (state, { payload }) => {
        if (state.domains.length > 2) state.domains.pop();
        state.domains.unshift(payload);
      }
    );
  },
});

export default slice.reducer;
