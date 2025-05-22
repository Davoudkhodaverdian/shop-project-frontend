import { IUser } from "../mongooose/models/user";

const requiredUserData: (keyof IUser)[] = [
    'firstName', 'lastName', 'email', "phoneNumber", "roles", "createdAt", "updatedAt", '_id'
]

export { requiredUserData };
