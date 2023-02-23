<template>
  <div class="posts" v-if="posts.length > 0">
    <h2>{{ getTitle }}</h2>

    <post-item v-for="post in posts" :post="post" :key="post.id" />
    <my-top />
  </div>
  <div class="else" v-else>
    <h3>Nothing found</h3>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import MyButton from "./UI/MyButton.vue";
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    getTitle: {
      type: String,
      required: true,
    },
  },
  components: {
    PostItem,
    MyButton,
  },
};
</script>
<style scoped>
h2 {
  margin: 0 0 20px 20px;
}
.posts {
  display: block;
  list-style-type: decimal;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.else {
  display: block;
  text-align: center;
}
</style>
