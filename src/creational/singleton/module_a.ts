
// import { MyDatabaseModule } from "./db/my-database-module"

import { MyDatabaseFunction } from "./db/my-database-function"


const dbCModule = MyDatabaseFunction
dbCModule.add({ name: "Almeida", age: 20 })
dbCModule.add({ name: "Almeida2", age: 20 })
dbCModule.add({ name: "Almeida3", age: 20 })
dbCModule.add({ name: "Almeida4", age: 20 })
dbCModule.add({ name: "Almeida5", age: 20 })
dbCModule.add({ name: "Almeida6", age: 20 })

export { dbCModule }