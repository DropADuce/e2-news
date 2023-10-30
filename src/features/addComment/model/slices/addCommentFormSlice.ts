import {
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { IAddCommentFormSchema } from 'features/addComment/model/types/addCommentForm';

const initialState: IAddCommentFormSchema = {
    text: '',
    error: '',
};

export const {
    reducer: addCommentReducer,
    actions: {
        setText,
    },
} = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, { payload }: PayloadAction<string>) => {
            state.text = payload;
        },
    },
});
