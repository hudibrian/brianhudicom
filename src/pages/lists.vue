<template>
  <Layout>
    <div
      class="content-box mt2em"
      v-for="edge in $page.lists.edges"
      :key="edge.node.id"
    >
      <g-link :to="edge.node.path">
        <h1>{{ edge.node.title }}</h1>
      </g-link>
      <em>{{ edge.node.description }}</em>
      <hr />
      <p v-html="edge.node.content.split('Posted: ')[0]"></p>
      <g-link class="small-text pl5px pb5px float-right" :to="edge.node.path"
        >see them all 📚</g-link
      >
    </div>
  </Layout>
</template>

<page-query>
query Lists{
  lists: allList {
    edges {
      node {
        id
        title
        slug
        description
        content
        path
      }
    }
  }
}
</page-query>

<script>
export default {};
</script>

<style>
</style>
