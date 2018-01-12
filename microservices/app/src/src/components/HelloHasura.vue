<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Hello Hasura</h2>
    <h3><router-link to="/">Back to Vue.js Home</router-link></h3>
    <div>
      <table>
        <thead>
        </thead>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Sample Article Title</th>
          </tr>
          <tr v-for="author in articles">
            <td>{{ author.id }}</td>
            <td>{{ author.name }}</td>
            <td>{{ author.articles[0].title }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'HelloHasura',
  data () {
    return {
      msg: 'Vue.js App deployed on Hasura'
    }
  },
  computed: {
    articles: function () {
      return this.$store.getters.articleList()
    }
  },
  mounted () {
    this.$store.dispatch('FETCH_ARTICLES')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
