<template>
  <div class="recent-post">
    <g-link class="recent-post__link" :to="post.path">
      <h2 class="recent-post__title">
        {{ post.title }}
      </h2>
    </g-link>
    <p>
      {{ post.description }}...
      <g-link class="recent-post__link" :to="post.path">Read ➡</g-link>
    </p>
  </div>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ["post", "showCover"]
};
</script>

<style lang="scss">
.recent-post {
  margin-bottom: 1em;

  &__title {
    margin-top: 0;
  }

  &__link {
    text-align: middle;
  }
}
</style>