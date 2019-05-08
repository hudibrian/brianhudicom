<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <IntroDetail />

    <div class="posts">
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
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
import IntroDetail from "~/components/IntroDetail.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    IntroDetail,
    PostCard
  },
  metaInfo: {
    title: "Home Page"
  }
};
</script>

<style lang="scss">
</style>

