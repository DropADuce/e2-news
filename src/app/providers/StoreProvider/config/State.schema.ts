import { IUserSchema } from 'enteties/User';
import { ILoginSchema } from 'features/authByUsername';

export interface IStateSchema {
    user: IUserSchema,
    loginForm?: ILoginSchema,
}

