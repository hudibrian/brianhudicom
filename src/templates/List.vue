<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">{{ $page.list.title }}</h1>
    </div>

    <div class="post content-box">
      <div class="post__content" v-html="$page.list.content" />
    </div>

    <div class="post-comments">
      <!-- Add comment widgets here -->
    </div>

    <!-- <Author class="post-author" /> -->
  </Layout>
</template>

<script>
export default {
  components: {},
  metaInfo() {
    return {
      title: this.$page.list.title,
      meta: [
        {
          name: "description",
          content: this.$page.list.description
        }
      ]
    };
  }
};
</script>

<page-query>
query List ($path: String!) {
  list: list (path: $path) {
    title
    path
    description
    content
  }
}
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    overflow-wrap: break-word;

    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>