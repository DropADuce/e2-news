import { Country, Currency } from 'shared/constants/common';

export interface IProfile {
    name: string
    surname: string,
    age: number,
    currency: Currency,
    country: Country,
    city: string,
    username: string,
    avatar: string
}

export interface IProfileSchema {
    data?: IProfile,
    isLoading: boolean,
    error?: string,
    isReadonly: boolean,
}
