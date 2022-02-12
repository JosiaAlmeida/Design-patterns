import { MyDatabaseClassic } from "./db/my-database-classic"
import './module_a'

const dbClassic = MyDatabaseClassic.instance
dbClassic.add({ name: "Josia1", age: 20 })
dbClassic.add({ name: "Josia2", age: 20 })
dbClassic.add({ name: "Josia3", age: 20 })
dbClassic.add({ name: "Josia4", age: 20 })
dbClassic.add({ name: "Josia5", age: 20 })
dbClassic.add({ name: "Josia6", age: 20 })

dbClassic.show()