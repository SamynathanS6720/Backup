const { ApolloServer, gql } = require('apollo-server')

const { nanoid } = require('nanoid');


const typeDefs = gql`
    type Character {
        id: ID
        name: String
        gender: String
    }
    type User {
        id : ID!
        username: String
        password: String
    }
    type userDetatils{
        firstname : String
        lastname : String
        age : Int
        contact : String
        address : String
        job_tittle: String
        username : String
    }
    type Query{
        characters: [Character]
        character(id: ID!): Character
        users: [User]
        getUsers: [User]
        getUserDetails: [userDetatils]
        getUserDetail( username: String ): userDetatils
    }
    type Mutation{
        addCharacter(name: String , gender: String ): Character
        addUser( username: String , password: String ): User
        createUser( username: String , password: String ): User
        addUserDetail( id : ID,
            firstname : String,
            lastname : String,
            age : Int,
            contact : String,
            address : String,
            job_tittle: String ) : userDetatils
    }
`
const db = require('./db');

const data = [
    {
        id: 1,
        name: "Sam",
        gender: "Male"
    }
]

const resolvers = {
    Query: {
        characters: () => data,
        character: (_, { id }) => {
            return data.find(character => character.id == id)
        },
        users: () => userData,
        getUsers: async () => {
            try {
                const users = await db.any('SELECT * FROM login');
                return users;
            } catch (error) {
                console.log('Failed');
                return null;
            }
        },

        getUserDetail : async (_, { username} ) => {
            try {
                const userDetail = await db.oneOrNone('SELECT * FROM registrationdetail WHERE username = $1', [username]);
                return userDetail;
              } catch (error) {
                console.log('Failed' + error);
                return null;
              }
        },

        getUserDetails : async () => {
            try {
                const query = "SELECT * FROM registrationdetail";
                const userDetatils = await db.any( query);
                return userDetatils;
            } catch (error) {
                console.log('Failed');
                return null;
            }
        },

    },
    Mutation: {
        addCharacter(_, payload) {
            const storeCharecter = {
                id: nanoid(),
                ...payload
            }
            data.push(storeCharecter)
            return storeCharecter
        },
        addUser(_, payload) {
            const createUser = {
                ...payload
            }
            userData.push(createUser)
            return createUser
        },
        createUser: async (_, args) => {
            try {
                const { username, password } = args;
                const query = `
                INSERT INTO login (id, username, password)
                VALUES ($1, $2, $3)
                RETURNING id, username, password
              `;
                const id = nanoid();
                const newUser = await db.one(query, [id, username, password]);
                return newUser ;
            } catch (error) {
                console.error(error);
                throw new Error('Failed to create user');
            }
        },
    }
}

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})


server.listen().then(({ url }) => {
    console.log('Server is running on ' + url)
})