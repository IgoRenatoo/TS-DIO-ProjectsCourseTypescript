import { User } from "../database/entities/users-entities";
import { AppDataSource } from '../database/data-source';

export class Users{
    private userRepository = AppDataSource.getRepository(User);
    private queryRunner = AppDataSource.createQueryRunner();

    // Criar um novo usuário
    async toCreate(name: string, age: number, sexo: string): Promise<User> {
        const newUser = new User(name, age, sexo);
        await this.userRepository.save(newUser);
        console.log("Usuário criado:", newUser);
        return newUser; // Retorna o novo usuário criado
    }

    // Busca todos os usuários no banco de dados
    async getAllUsers(): Promise<User[]> {        
        const users = await this.userRepository.find();
        return users; // Retorna a lista de usuários
    }

    async ClearData(): Promise<void> {
        await this.queryRunner.query(`DELETE FROM sqlite_sequence`);
        await this.queryRunner.query(`DELETE FROM users`);
    }
}

// Entender melhor esse fluxo...
/* import { Repository } from "typeorm";
import { User } from "../entities/users-entities";

export class UserRepository extends Repository<User> {
    // Aqui você pode adicionar métodos personalizados de consulta
    findByName(name: string): Promise<User[]> {
        return this.find({ where: { name } });
    }

    findByAge(idade: number): Promise<User[]> {
        return this.find({ where: { idade } });
    }
} */
