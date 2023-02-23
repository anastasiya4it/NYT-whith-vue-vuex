<template>
  <div class="post">
    <figure>
      <img
        v-if="post.media?.[0]?.['media-metadata']?.[2]?.['url']"
        v-bind:src="post.media?.[0]?.['media-metadata']?.[2]?.['url']"
        v-bind:alt="post.media?.[0]?.['copyright']"
        width="400"
      />
      <figcaption>
        <span>{{ post.media?.[0]?.["caption"] }}</span>
        <br />
        <span>{{ post.media?.[0]?.["copyright"] }}</span>
      </figcaption>
    </figure>

    <span class="text">
      <header>
        <my-h3>{{ post.title }}</my-h3>
      </header>
      <div class="meta">
        <div class="adx-keywords" v-for="item in getArrayOfKeys" :key="item">
          {{ item }}
        </div>
      </div>
      <div class="abstract">
        {{ post.abstract }}
        <a :href="post.url" target="_blank">More...</a>
      </div>

      <div class="byline">{{ post.byline }}</div>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    getArrayOfKeys() {
      return this.post.adx_keywords.split(";");
    },
  },
};
</script>

<style scoped>
.post {
  padding: 20px;
  display: flex;
  font-family: nyt-imperial, georgia, "times new roman", times, serif;
  flex-direction: row;
  align-items: stretch;
  border-block-start: 2px solid #6c757d;
  writing-mode: horizontal-tb;
}

figure {
  display: block;
  font-size: 13px;
  text-align: justify;
  width: 40%;
  color: rgb(114, 114, 114);
  line-height: 1.1rem;
}
img {
  width: 100%;
}
figcaption {
  font-size: 12px;
  padding: 5px 20px 0;
}
.text {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 0 0 50px;
  width: 60%;
  line-height: 1.4rem;
}

.abstract {
  padding: 5px;
  font-size: 16px;
}
.byline,
.adx-keywords {
  padding: 7px;
  font-size: 14px;
}
.adx-keywords {
  border-radius: 7%;
  border: 1px solid rgb(114, 114, 114);
  margin: 3px;
}
.meta {
  line-height: 1.1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: justify;
}
a {
  font-weight: 500;
  color: rgba(114, 114, 114);
  text-decoration-line: none;
}
a:hover {
  color: rgb(114, 0, 0);
}
@media (max-width: 1336px) {
  figure {
    width: 30%;
  }
  .text {
    padding: 0 0 0 30px;
    width: 70%;
    line-height: 1.3rem;
  }
}
@media (max-width: 768px) {
  .post {
    display: block;
  }
  figure {
    width: 100%;
  }
  .text {
    width: 100%;
    padding: 5px 5px;
  }
}
</style>
