<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <IntroDetail class="mt2em" />
    <div class="mt2em content-box">
      <RecentPosts
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
      <g-link class="small-text pl5px pb5px float-right" to="/blog"
        >see them all 📚</g-link
      >
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost (perPage: 3) {
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
.mt2em {
  margin-top: 2em;
}
</style>

