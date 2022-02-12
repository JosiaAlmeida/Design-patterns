import { User } from "../interfaces/User";

//singleton funcional
export const MyDatabaseFunction = (function () {
    const users: User[] = []
    return {
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
})()
