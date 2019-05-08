<template>
  <g-link class="flex-row link" to="/">
    <g-image
      v-if="showLogo"
      alt="Website logo"
      class="logo"
      src="~/assets/images/author.jpg"
      width="50px"
      blur="5"
    />
    <p class="title">
      {{ title }}
    </p>
  </g-link>
</template>

<script>
export default {
  props: ["showLogo", "title"]
};
</script>

<style>
.logo {
  margin-right: 10px;
  border-radius: 10px;
  width: 50px;
}

.title {
  font-size: 1.1em;
  margin: auto;
}

.link {
  text-decoration: none;
}
</style>
