<template>
  <p class="logo" v-on:click="to()">
    <span class="logo__text"> &larr; Back </span>
  </p>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  methods: {
    to: () => {
      window.history.back();
    }
  }
};
</script>

<style lang="scss">
.logo {
  text-decoration: none;
  color: var(--body-color) !important;
  font-size: 0.9em;

  &__image {
    vertical-align: middle;
    border-radius: 99px;
    height: 40px;
    width: 40px;
    margin-right: 0.5em;
  }
}
</style>