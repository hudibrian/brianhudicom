<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <IntroDetail class="mt2em" />
    <div class="mt2em content-box">
      <h2 class="mt0 mb0 text-center">Most Recent Blog Posts</h2>
      <g-link class="small-text pl5px pb5px float-right" to="/blog"
        >see them all 📚</g-link
      >
    </div>

    <div class="flex-row wrap">
      <RecentPosts
        class="mt2em"
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost (perPage: 4) {
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
import RecentPosts from "~/components/RecentPosts.vue";

export default {
  components: {
    IntroDetail,
    RecentPosts
  },
  metaInfo: {
    title: "Home Page"
  }
};
</script>

<style lang="scss">
.wrap {
  flex-wrap: wrap;
}
</style>

