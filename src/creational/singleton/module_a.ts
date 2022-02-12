import { MyDatabaseClassic } from "./db/my-database-classic"

const dbClassic = MyDatabaseClassic.getInstance
dbClassic.add({ name: "Almeida", age: 20 })
dbClassic.add({ name: "Almeida2", age: 20 })
dbClassic.add({ name: "Almeida3", age: 20 })
dbClassic.add({ name: "Almeida4", age: 20 })
dbClassic.add({ name: "Almeida5", age: 20 })
dbClassic.add({ name: "Almeida6", age: 20 })

// dbClassic.show()