<template>
  <div class="intro content-box">
    <div class="intro__description flex-row">
      <g-image
        alt="headshot of brian hudi"
        class="intro__logo"
        src="~/assets/images/author.jpg"
        blur="5"
      />
      <div class="intro__text">
        <p class="intro__site-title">
          Hi, I'm Brian Hudi. I help people bring their ideas to life, with
          code. Let's change the world together.
        </p>
      </div>
    </div>
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
export default {};
</script>

<style lang="scss">
.intro {
  &__description {
    justify-content: center;

    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__site-title {
    font-size: 1.266em;
    margin-bottom: 0.2em;
  }

  &__text {
    padding-left: 1.2em;
    opacity: 0.8;
    margin: auto;

    @media screen and (max-width: 600px) {
      padding: 15px 0 0 0;
      margin: 0;
      text-align: center;
    }
  }

  &__logo {
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    margin-left: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / -1);
    margin-top: calc(var(--space) * -1);
    width: 400px;
    @media screen and (max-width: 600px) {
      border-radius: var(--radius);
      margin: 0;
      width: 150px;
    }
  }
}
</style>