<template>
  <div class="flex-row social-icons">
    <a href="https://github.com/hudibrian" target="none" name="github link">
      <font-awesome id="github" :icon="['fab', 'github']" size="2x" />
    </a>
    <a href="https://twitter.com/brianhudi" target="none" name="twitter link">
      <font-awesome id="twitter" :icon="['fab', 'twitter']" size="2x" />
    </a>
    <a
      href="https://www.linkedin.com/in/brian-hudi-73256632/"
      target="none"
      name="linkedin link"
    >
      <font-awesome id="linkedin" :icon="['fab', 'linkedin']" size="2x" />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style>
#github {
  margin-right: 10px;
}
#twitter {
  margin-right: 10px;
}
.social-icons {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
