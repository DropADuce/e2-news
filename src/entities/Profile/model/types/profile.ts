import { Currency } from '../../../Currency';
import { Country } from 'entities/Country/model/types/country';

export interface IProfile {
    name?: string
    surname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface IProfileSchema {
    data?: IProfile,
    form?: IProfile,
    isLoading: boolean,
    error?: string,
    isReadonly: boolean,
}
