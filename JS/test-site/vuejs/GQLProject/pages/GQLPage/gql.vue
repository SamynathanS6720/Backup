<template>
    <div class="container">
        <h1>Graphql Demo</h1>
        <div>
          <nuxt-link to="createChar">Create Carecter</nuxt-link> 
          <nuxt-link to="userDetatils">User Details</nuxt-link> 
        </div>

        <!-- <ul>
            <h2> {{ character.name }}</h2>
            <li v-for="character in characters" :key="character.id">
                {{ character.name }}
            </li>
        </ul> -->
        <!-- <ul>
            <li v-for="user in getUsers" :key="user.id">
              {{  user.username  }}
            </li>
        </ul> -->
        <ul v-for="getUserDetail in getUserDetails" :key="getUserDetail.username" class="list">
            <!-- <li > -->
              <!-- <div>
                <h4> Name </h4> -->
              {{  getUserDetail.firstname }}
              <!-- </div> -->
            <!-- </li>
            <li> -->
              <!-- <div>
                <h4> Name </h4> -->
              {{  getUserDetail.job_tittle }}
              <!-- </div> -->
            <!-- </li> -->
        </ul>
    </div>
</template>

<script>
import { gql } from 'graphql-tag';

export default {
  data(){
    return{
      characterId: 2
    }
  },
  apollo: {
    characters: {
      query: gql`
        query getCharacters {
          characters {
              id
              name
          }
        }
      `,
    },
    character: {
      query: gql`
        query getCharacter($id: ID!) {
          character(id: $id) {
            id
            name
          }
        }
      `,
      variables() {
        return {
          id: this.characterId,
        }
      },
    },
    getUsers: { 
      query : gql`
          query GetUsers{
            getUsers {
                id
                username
                password
            }
          }
        `,
      },
    getUserDetails: {
      query : gql`
      query GetUserDetails {
            getUserDetails {
          address
          age
          contact
          firstname
          username
          id
          lastname
          job_tittle
        }
      } 
      `
    }
  },
};
// export default {
//   data(){
//     return{
//       characterId: 2
//     }
//   },
//   apollo: {
//     characters: gql`
//       query getCharacters {
//           characters {
//               id
//               name
//         }
//       } 
//       `,
//     },
//     character: {
//       query: gql`
//       query getCharacter($id: ID!) {
//         character(id: $id) {
//           id 
//           name
//         }
//       }
//       `,
//       variables() {
//         return {
//           id: this.characterId,
//         }
//       },
//     },
// };


</script>

<style scoped>

.list li {
list-style-type: none;
}

a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 40px;
    letter-spacing: 4px;
}

a:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
        0 0 100px #03e9f4;
}

</style>
