import { IStateSchema } from 'app/providers/StoreProvider';

export const isCommentsLoadingSelector = (state: IStateSchema) => state?.articleDetailsComments?.isLoading;
export const isCommentsErrorSelector = (state: IStateSchema) => state?.articleDetailsComments?.error;
