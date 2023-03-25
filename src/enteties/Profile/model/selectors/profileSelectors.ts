import { IStateSchema } from 'app/providers/StoreProvider';

export const profileDataSelector = ({ profile }: IStateSchema) => profile?.data;
export const profileErrorSelector = ({ profile }: IStateSchema) => profile?.error;
export const isProfileLoadingSelector = ({ profile }: IStateSchema) => profile?.isLoading;
export const isReadonlyProfileSelector = ({ profile }: IStateSchema) => profile?.isLoading;
