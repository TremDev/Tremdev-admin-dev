import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    posts: [],
  },
  getters: {
    getPosts: (state) => {
      return state.posts;
    },
  },
  mutations: {
    setPosts: (state, posts) => {
      state.posts = posts;
    },
    updatePost: (state, updatedPost) => {
      const index = state.posts.findIndex((post) => post.id === updatedPost.id);
      if (index !== -1) {
        state.posts.splice(index, 1, updatedPost);
      }
    },
    addPost: (state, newPost) => {
      state.posts.push(newPost);
    },
    deletePost: (state, postId) => {
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      axios
        .get(
          "https://portfolio-tremdev-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
        )
        .then((data) => {
          let dataTransformedToArray = Object.entries(data.data);
          let dataToPush = [];
          dataTransformedToArray.forEach((element) => {
            let elemeToPush = {};
            elemeToPush.id = element[0];
            elemeToPush.title = element[1].title;
            elemeToPush.link = element[1].link;
            elemeToPush.imageLink = element[1].imageLink;
            elemeToPush.description = element[1].description;
            console.log(element);
            dataToPush.push(elemeToPush);
          });

          console.log("Posts finalisé :", dataToPush);
          commit("setPosts", dataToPush);
        });
    },
    async addPost({ commit }, newPost) {
      await axios.post("https://portfolio-tremdev-default-rtdb.europe-west1.firebasedatabase.app/posts.json", newPost ).then((res) => {
          if (res.ok) {
            alert("Post succesfully created !")
          }
        }).then(() => {
          commit("addPost", newPost);
        }).then(() => {
          this.$router.push('/')
        });
    },
    async updatePost({ commit }, updatedPost) {
      await axios.post(
        this.state.postsUrl + "/" + updatedPost.id,
        updatedPost,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      commit("updatePost", updatedPost);
    },
    async deletePost({ commit }, postId) {
      axios
        .delete(
          `https://portfolio-tremdev-default-rtdb.europe-west1.firebasedatabase.app/posts/${postId}.json`
        )
        .then(() => {
          commit("deletePost", postId);
        });
    },
  },
  modules: {},
});
