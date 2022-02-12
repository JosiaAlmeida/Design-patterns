// import { MyDatabaseClassic } from "./db/my-database-classic"
import { dbCModule } from "./module_a"
// import { MyDatabaseModule } from "./db/my-database-module"
import { MyDatabaseFunction } from "./db/my-database-function"

// const dbClassic = MyDatabaseClassic.instance
const dbClassic = MyDatabaseFunction
dbClassic.add({ name: "Josia1", age: 20 })
dbClassic.add({ name: "Josia2", age: 20 })

dbClassic.show
dbCModule.show

console.log(dbClassic === dbCModule)