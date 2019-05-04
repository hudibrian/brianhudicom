<template>
  <div class="intro">
    <p v-if="showTitle" class="intro__site-title"></p>

    <p class="intro__description">
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
.intro {
  margin: 0 auto;
  max-width: 300px;
  text-align: center;

  &__image {
    width: 100%;
    height: 100%;
  }

  &__description {
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