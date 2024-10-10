import express, { Response, Request } from "express";
import { db } from "./database/server-db";
import 'dotenv/config'

// Instancia o servidor
const server = express()
let cont = 0;

// Puxa informações do banco de dados
server.get("/", (req: Request, res: Response) => {
  db.all("SELECT * FROM users", (err, rows) => res.status(200).send(rows))
  cont++;
  console.log(`Acessou banco de dados ${cont} vez!` );
})

// Adiciona usuário a partir de 'Query Params' - Test
server.post("/add", (req: Request, res: Response) => {
  const name: string  = req.query.name as string;
  const age: string = req.query.age as string;

  db.run(
    "INSERT INTO users (nome, idade) VALUES (?, ?)",
    [ name , age  ], 
    function(){ 
    res.status(201).send(`Usuário criado! ${this.lastID}`)
  })
});

// Deleta todos usuários do DataBase
server.delete("/clear", (req: Request, res: Response) => {  
  db.run(
    "DELETE FROM users",
    [],
    function(){
       res.status(200).send("Todos os usuários foram removidos.")
      }
    )
  }
)

// Inicia o servidor e observa as requisições especificas da config PORT
server.listen(process.env.PORT, () => console.log("Servidor conectado!"))
