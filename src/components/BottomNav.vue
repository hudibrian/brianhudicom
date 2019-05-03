<template>
  <div class="container">
    <div class="tabs">
      <button v-on:click="view = 'blog'">Blog</button>
      <button v-on:click="view = 'projects'">Projects</button>
      <button v-on:click="view = 'about-me'">About Me</button>
      <button v-on:click="view = 'contact-me'">Contact Me</button>
    </div>

    <div class="content">
      <div class="posts" v-if="view === 'blog'">
        <PostCard
          v-for="edge in data.posts.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </div>

      <div class="about-me-content" v-if="view === 'about-me'">
        <p>My name is Brian, and I am a Cloud Developer for AWS.</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    PostCard
  },
  props: ["data"],
  data: () => {
    return {
      view: "blog"
    };
  }
};
</script>

<style>
.tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.about-me-content {
  flex: 1;
  text-align: center;
}

.content {
  padding-top: 10px;
}
</style>
