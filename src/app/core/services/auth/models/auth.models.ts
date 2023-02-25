export interface IUser {
    _id?: string,
    email: string,
    password?: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: string
}

export interface IUserSingInResponse {
    user: IUser;
    token: string;
}