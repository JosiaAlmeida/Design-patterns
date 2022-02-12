export interface User {
    name: string
    age: number
}

export class MyDatabaseClassic {
    //Atributo singleton
    private static instance: MyDatabaseClassic | null = null

    private users: User[] = []

    private constructor() { }

    //Singleton
    public static get getInstance(): MyDatabaseClassic {
        if (MyDatabaseClassic.instance === null)
            MyDatabaseClassic.instance = new MyDatabaseClassic();
        return MyDatabaseClassic.instance
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
