import { User } from "../interfaces/User";

export class MyDatabaseClassic {
    //Atributo singleton
    private static _instance: MyDatabaseClassic | null = null

    private users: User[] = []

    private constructor() { }

    //Singleton
    public static get instance(): MyDatabaseClassic {
        if (MyDatabaseClassic._instance === null)
            MyDatabaseClassic._instance = new MyDatabaseClassic();
        return MyDatabaseClassic._instance
    }

    //Outros metodos
    add(user: User): void {
        this.users.push(user)
    }
    remove(index: number): void {
        this.users.splice(index, 1)
    }
    show(): void {
        this.users.map(({ name, age }) => console.log(name, age))
    }
}
