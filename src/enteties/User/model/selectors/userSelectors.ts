import { IStateSchema } from 'app/providers/StoreProvider';

export const userAuthDataSelector = ({ user }: IStateSchema) => user.authData;
