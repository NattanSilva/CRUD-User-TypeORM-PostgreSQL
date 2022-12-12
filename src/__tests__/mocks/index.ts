import { IUserLogin,IUserRequest } from "../../interfaces/users";


export const mockedUser : IUserRequest = {
    name: "Joana",
    email: "joana@mail.com",
    isAdm: false,
    password: "123456"
}

export const mockedAdmin : IUserRequest = {
    name: "Felipe",
    email: "felipe@mail.com",
    isAdm: true,
    password: "123456"
}

export const mockedUserLogin : IUserLogin = {
    email: "joana@mail.com",
    password: "123456"
}

export const mockedAdminLogin : IUserLogin = {
    email: "felipe@mail.com",
    password: "123456"
}

