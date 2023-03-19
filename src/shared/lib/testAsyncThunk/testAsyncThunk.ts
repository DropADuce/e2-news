import { IStateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';

type TActionCreator<Return, Arg, Rejected> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: Rejected }>

export const testAsyncThunk = <Return, Arg, Rejected>(actionCreator: TActionCreator<Return, Arg, Rejected>) => {
    const dispatch = jest.fn();
    const getState: () => IStateSchema = jest.fn();

    const thunk = async (arg: Arg) => {
        const action = actionCreator(arg);
        return action(dispatch, getState, undefined);
    };

    return {
        thunk,
        dispatch,
        getState,
    };
};
