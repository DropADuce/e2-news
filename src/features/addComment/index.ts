export type { IAddCommentFormSchema } from './model/types/addCommentForm';

export {
    addCommentReducer,
    setText,
} from './model/slices/addCommentFormSlice';

export { AddCommentFormLazy as AddCommentForm } from './ui/AddCommentForm/AddCommentForm.lazy';
