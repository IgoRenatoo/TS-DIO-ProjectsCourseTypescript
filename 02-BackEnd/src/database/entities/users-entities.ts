import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column({ type: "varchar" })
    name: string;

    @Column({ type: "integer" })
    idade: number;

    @Column({ type: "varchar" })
    sexo: string;

    constructor(
      name: string,
      idade: number,
      sexo: string
    ){
      this.name = name
      this.idade = idade
      this.sexo = sexo
    }
}
