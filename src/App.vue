<template>
  <div class="app" id="top">
    <div v-if="statusResponse == 200">
      <navigation-bar></navigation-bar>
      <router-view> </router-view>
    </div>
    <div v-else>
      <login></login>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import { mapState, mapMutations, mapActions } from "vuex";
import Login from "@/pages/Login.vue";

export default {
  components: {
    NavigationBar,
    Login,
  },
  computed: {
    ...mapState({
      statusResponse: (state) => state.post.statusResponse,
    }),
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
}
@media (max-width: 1336px) {
  .app {
    padding: 20px;
    max-width: 1200px;
  }
}
</style>
