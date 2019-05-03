<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List tiles -->
    <div class="tileGrid">
      <BottomNav :data="$page"></BottomNav>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        id
        title
        path
        tags {
          id
          title
          path
        }
        date (format: "MMMM DD, Y")
        timeToRead
        description
        cover (width: 770, height: 380, blur: 10)
        ...on Post {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import BottomNav from "~/components/BottomNav.vue";

export default {
  components: {
    Author,
    BottomNav
  },

  metaInfo: {
    title: "Home Page"
  }
};
</script>

<style lang="scss">
.tileGrid {
  display: flex;
  justify-content: center;

  &__item {
    width: 140px;
    height: 140px;
  }
}
</style>

