<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true"/>

    <!-- List posts -->
    <div class="posts"></div>
  </Layout>
</template>

<page-query>

</page-query>

<script>
import Author from "~/components/Author.vue";

export default {
  components: {
    Author
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>
