<template>
  <div class="author">
    <g-image
      alt="Author image"
      class="author__image"
      src="~/assets/images/author.jpg"
      blur="5"
    />

    <p v-if="showTitle" class="author__site-title">
      <b>{{ $static.metaData.siteName }}</b>
    </p>

    <p class="author__intro">
      {{ $static.metaData.siteDescription }}
    </p>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
		siteDescription
  }
}
</static-query>

<script>
export default {
  props: ["showTitle"]
};
</script>

<style lang="scss">
.author {
  margin: 0 auto;
  max-width: 300px;
  text-align: center;

  &__image {
    border-radius: 10%;
    width: 6em;
    height: 6em;
  }

  &__intro {
    margin-top: -1.5em;
    opacity: 0.8;
  }

  &__site-title {
    font-size: 1.5em;
  }

  &__links {
    margin-top: -0.5em;
    a {
      margin: 0 0.5em;
    }
  }
}
</style>