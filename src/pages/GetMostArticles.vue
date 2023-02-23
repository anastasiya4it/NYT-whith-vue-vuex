<template>
  <div>
    <div class="news">
      <my-input
        :model-value="searchTitle"
        @update:model-value="setSearchTitle"
        type="text"
        placeholder="Search by title"
      ></my-input>

      <my-select
        :model-value="getMostForTheSomeDay"
        @update:model-value="setGetMostForTheSomeDay"
        :options="sortOptionsForTheSomeDay"
      ></my-select>

      <post-list
        :getTitle="getBestTitle"
        :posts="searchTitleInSelect"
        v-if="!isLoading"
      ></post-list>
      <div v-else>Loader</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import PostList from "@/components/PostList.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MySelect from "@/components/UI/MySelect.vue";
export default {
  components: {
    PostList,
    MyInput,
    MySelect,
  },
  data() {
    return {
      sortOptions: [
        {
          id: 0,
          value: "emailed",
          name: "Get most emailed articles",
        },
        {
          id: 1,
          value: "shared",
          name: "Get most shared articles on NYTimes.com",
        },
        { id: 2, value: "viewed", name: "Get most viewed articles" },
      ],

      sortOptionsForTheSomeDay: [
        { id: 0, value: "1", name: "for the last day" },
        { id: 1, value: "7", name: "for the last seven days" },
        { id: 2, value: "30", name: "for the last thirty days" },
      ],
    };
  },

  methods: {
    ...mapMutations({
      setApiKey: "post/setApiKey",
      setGetMost: "post/setGetMost",
      setGetMostForTheSomeDay: "post/setGetMostForTheSomeDay",

      setPosts: "post/setPosts",
      setIsLoading: "post/setIsLoading",
      setSearchTitle: "post/setSearchTitle",
    }),
    ...mapActions({
      fetchNYTNews: "post/fetchNYTNews",
    }),
  },
  computed: {
    ...mapState({
      apiKey: (state) => state.post.apiKey,
      getMost: (state) => state.post.getMost,
      getMostForTheSomeDay: (state) => state.post.getMostForTheSomeDay,

      posts: (state) => state.post.posts,
      isLoading: (state) => state.post.isLoading,
      searchTitle: (state) => state.post.searchTitle,
    }),
    ...mapGetters({
      searchTitleInSelect: "post/searchTitleInSelect",
    }),
    getBestTitle() {
      return (
        this.sortOptions
          .reduce(
            (acc, item) =>
              item.value == this.getMost ? (acc = item.name) : acc,
            0
          )
          .replace(/Get m/i, "M") +
        " " +
        this.sortOptionsForTheSomeDay.reduce(
          (acc, item) =>
            item.value == this.getMostForTheSomeDay ? (acc = item.name) : acc,
          0
        )
      );
    },
  },
  watch: {
    getMostForTheSomeDay(newValue) {
      this.fetchNYTNews(this.getMost, newValue, this.apiKey);
    },
  },

  // mounted() {
  // this.fetchNYTNews(this.getMost, this.getMostForTheSomeDay, this.apiKey);
  // },
};
</script>

<style>
.news {
  margin: 5% 0 0 0;
}
</style>
