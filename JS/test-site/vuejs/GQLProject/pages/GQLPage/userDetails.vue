<template>
    <div>
        <ul v-for="getUserDetail in getUserDetails" :key="getUserDetail.username" class="list">
            <li>
                <div>
                    <h4> Name </h4>
                    {{ getUserDetail.firstname }}
                </div>
            </li>
            <li>
                <div>
                    <h4> Name </h4>
                    {{ getUserDetail.job_tittle }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

import { gql } from 'graphql-tag';

export default {
    data() {
        return {
            characterId: 2
        }
    },
    apollo: {
        getUserDetails: {
            query: gql`
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
    }
}

</script>

<style>
</style>