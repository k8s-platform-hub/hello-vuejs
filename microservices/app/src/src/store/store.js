/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import fetchData from './api'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    articles: []
  },
  actions: {
    FETCH_ARTICLES: function({ commit }) {
      fetchData( function (resp) {
        var set_articles = {
          articles: resp.data,
        };
        commit("FETCH_ARTICLES_MUTATION", resp.data);
      })
    }
  },
  mutations: {
    FETCH_ARTICLES_MUTATION: function(state, articles_list) {
      state.articles = articles_list;
    }
  },
  getters: {
    articleList: (state) => () => {
      return state.articles
    }
  }
});

export default store;