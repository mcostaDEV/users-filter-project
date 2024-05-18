import { IUser } from "../interfaces/user/user.interface";

export const UsersList: IUser[] = [
    {
        nome: "Matheus Costa",
        email: "mcosta@example.com",
        senha: "1234",
        idade: 25,
        endereco: {
            rua: "Tv Marieta",
            numero: 27,
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        telefone: "21964526342",
        ativo: false,
        funcao: "Desenvolvedor",
        DataCadastro: "2024-05-15T09:00:00.00Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2024-05-15T09:00:00.00Z"
        }
    },
    {
        nome: "Aline Santos",
        email: "aline.santos@example.com",
        senha: "abcd1234",
        idade: 32,
        endereco: {
            rua: "Rua das Flores",
            numero: 123,
            cidade: "São Paulo",
            estado: "SP",
            pais: "Brasil"
        },
        telefone: "11987654321",
        ativo: true,
        funcao: "Analista de Marketing",
        DataCadastro: "2024-05-15T09:00:00.00Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2024-05-14T15:30:00.00Z"
        }
    },
    {
        nome: "Gabriel Lima",
        email: "g.lima@example.com",
        senha: "qwerty",
        idade: 28,
        endereco: {
            rua: "Av. Central",
            numero: 456,
            cidade: "Belo Horizonte",
            estado: "MG",
            pais: "Brasil"
        },
        telefone: "3133334444",
        ativo: true,
        funcao: "Engenheiro de Software",
        DataCadastro: "2024-05-15T09:00:00.00Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2024-05-15T11:20:00.00Z"
        }
    },
    {
        nome: "Carla Mendes",
        email: "carla.mendes@example.com",
        senha: "xyz789",
        idade: 29,
        endereco: {
            rua: "Rua dos Andradas",
            numero: 789,
            cidade: "Porto Alegre",
            estado: "RS",
            pais: "Brasil"
        },
        telefone: "51987654321",
        ativo: false,
        funcao: "Gerente de Projetos",
        DataCadastro: "2024-05-15T09:00:00.00Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2024-05-13T08:00:00.00Z"
        }
    },
    {
        nome: "Lucas Ferreira",
        email: "lucas.ferreira@example.com",
        senha: "password",
        idade: 35,
        endereco: {
            rua: "Rua Nova",
            numero: 101,
            cidade: "Curitiba",
            estado: "PR",
            pais: "Brasil"
        },
        telefone: "41998765432",
        ativo: true,
        funcao: "Arquiteto de Software",
        DataCadastro: "2024-05-15T09:00:00.00Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2024-05-15T10:15:00.00Z"
        }
    },
    {
        nome: "Fernanda Oliveira",
        email: "fernanda.oliveira@example.com",
        senha: "12345",
        idade: 27,
        endereco: {
            rua: "Av. Paulista",
            numero: 2000,
            cidade: "São Paulo",
            estado: "SP",
            pais: "Brasil"
        },
        telefone: "11999887766",
        ativo: true,
        funcao: "Desenvolvedora Front-end",
        DataCadastro: "2024-05-15T09:00:00.00Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2024-05-15T12:45:00.00Z"
        }
    }
];
