<template>
  <div
    class="recent post-card content-box"
    :class="{ 'post-card--has-poster': post.poster }"
  >
    <div class="recent post-card__header">
      <g-image
        alt="Cover image"
        class="recent post-card__image"
        :src="post.cover"
      />
    </div>
    <div class="recent post-card__content">
      <h5 class="recent post-card__title" v-html="post.title" />

      <PostMeta class="recent post-card__meta" :post="post" />
      <PostTags class="recent post-card__tags" :post="post" />

      <g-link class="recent post-card__link" :to="post.path">Link</g-link>
    </div>
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
.recent.post-card {
  width: 45%;
  position: relative;

  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
  }

  &__image {
    min-width: 100%;
  }

  &__title {
    margin-top: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
  }

  &__tags {
    z-index: 1;
    position: relative;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>