import { User } from "../interfaces/User";

//singleton modular
const users: User[] = []
export const MyDatabaseModule = {
    add(user: User): void {
        users.push(user)
    },
    remove(index: number): void {
        users.splice(index, 1)
    },
    show(): void {
        users.map(({ name, age }) => console.log(name, age))
    }
}
