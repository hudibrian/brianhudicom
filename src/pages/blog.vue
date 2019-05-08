<template>
  <Layout :show-logo="true">
    <!-- List posts -->
    <div class="posts">
      <PostCard
        v-for="edge in $page.allPost.edges"
        :key="edge.node.id"
        :post="edge.node"
        :showCover="true"
      />
      <Pager
        :linkClass="'pagination'"
        class="textCenter"
        :info="$page.allPost.pageInfo"
      />
    </div>
  </Layout>
</template>

<page-query>
  query Blog ($page: Int) {
    allPost (perPage: 5, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
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
import PostCard from "~/components/PostCard.vue";
import { Pager } from "gridsome";

export default {
  components: {
    PostCard,
    Pager
  },
  metaInfo: {
    title: "Blog"
  }
};
</script>

<style lang="scss">
.posts {
  padding-top: 1.5em;
}
</style>

