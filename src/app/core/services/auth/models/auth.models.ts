export interface IUser {
    _id?: string,
    email: string,
    password?: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: string
}

export interface IUserSignInResponse {
    user: IUser;
    token: string;
}

export enum AuthError {
    GENERIC = 0,
    AUTH = 1
}