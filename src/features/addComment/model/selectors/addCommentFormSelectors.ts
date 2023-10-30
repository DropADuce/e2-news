import { IStateSchema } from 'app/providers/StoreProvider';

export const commentTextSelector = (state: IStateSchema) => state.addCommentForm?.text ?? '';
export const commentErrorSelector = (state: IStateSchema) => state.addCommentForm?.error ?? '';

