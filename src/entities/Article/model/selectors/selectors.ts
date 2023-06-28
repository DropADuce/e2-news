import { IStateSchema } from 'app/providers/StoreProvider';

export const articleDetailsSelector = ({ articleDetails }: IStateSchema) => articleDetails?.article;
export const isArticleDetailsLoadingSelector = ({ articleDetails }: IStateSchema) => !!articleDetails?.isLoading;
export const articleDetailsErrorSelector = ({ articleDetails }: IStateSchema) => articleDetails?.error;
export const isArticleDetailsErrorSelector = ({ articleDetails }: IStateSchema) => !!articleDetails?.error;

