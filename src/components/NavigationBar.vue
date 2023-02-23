<template>
  <div class="navigation-bar">
    <div class="navig">
      <my-button
        class="item"
        @click="
          $router.push('/emailed') &&
            setGetMost('emailed') &&
            setGetMostForTheSomeDay('1') &&
            setSearchTitle(' ')
        "
      >
        Get most emailed articles
      </my-button>

      <my-button
        class="item"
        @click="
          $router.push('/shared') &&
            setGetMost('shared') &&
            setGetMostForTheSomeDay('1') &&
            setSearchTitle(' ')
        "
      >
        Get most shared articles on NYTimes
      </my-button>
      <my-button
        class="item"
        @click="
          $router.push('/viewed') &&
            setGetMost('viewed') &&
            setGetMostForTheSomeDay('1') &&
            setSearchTitle(' ')
        "
      >
        Get most viewed articles
      </my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  components: { MyButton },
  computed: {
    ...mapState({
      apiKey: (state) => state.post.apiKey,
      getMost: (state) => state.post.getMost,
      getMostForTheSomeDay: (state) => state.post.getMostForTheSomeDay,
      searchTitle: (state) => state.searchTitle,
    }),
  },
  methods: {
    ...mapMutations({
      setApiKey: "post/setApiKey",
      setGetMost: "post/setGetMost",
      setGetMostForTheSomeDay: "post/setGetMostForTheSomeDay",
      setSearchTitle: "post/setSearchTitle",
    }),
    ...mapActions({
      fetchNYTNews: "post/fetchNYTNews",
    }),
  },
  watch: {
    getMost(newValue) {
      this.fetchNYTNews(newValue, this.getMostForTheSomeDay, this.apiKey);
    },
  },
};
</script>
<style scoped>
.navig {
  display: flex;
  justify-content: space-evenly;
}
.navigation-bar {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: none;
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(114, 114, 114);
  box-shadow: 2px 2px 5px grey;
}

.item {
  width: 33%;
}

a {
  color: #ffffff;
  text-decoration-line: none;
}
a:hover {
  color: rgb(114, 0, 0);
}
</style>
