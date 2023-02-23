<template>
  <div class="login">
    <div class="text">
      <h1>Welcome to start</h1>
      Please, get your API Keys for the Most Popular API
      <a href="https://developer.nytimes.com/get-started" target="_blank">
        here.
      </a>
    </div>

    <my-input
      id="api"
      :model-value="apiKey"
      @update:model-value="setApiKey"
      type="text"
      autocomplete="on"
      placeholder="API Keys"
      autofocus
    >
    </my-input>

    <my-button @click="fetchNYTNews">Enter</my-button>
    <div class="text" v-if="statusResponse">
      Wrong API key. Try again. Error {{ statusResponse }}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setApiKey: "post/setApiKey",
    }),
    ...mapActions({
      fetchNYTNews: "post/fetchNYTNews",
    }),
  },
  computed: {
    ...mapState({
      apiKey: (state) => state.post.apiKey,
      statusResponse: (state) => state.post.statusResponse,
    }),
  },
};
</script>

<style scoped>
.login {
  margin: 10% 0 0 0;
  box-sizing: content-box;
  font-size: 16px;
  text-align: center;
  border: solid rgba(210, 210, 210) 10px;
  padding: 10px;
}
.text {
  margin: 20px;
  text-align: center;
  flex-direction: column;
}
h1 {
  margin: 20px;
  text-align: center;
}
a {
  font-weight: bolder;
  color: rgba(114, 114, 114);
  text-decoration-line: none;
}
a:hover {
  color: rgb(114, 0, 0);
}
</style>
