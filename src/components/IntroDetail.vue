<template>
  <div class="intro">
    <div class="intro__description flex-row">
      <g-image
        alt="headshot of brian hudi"
        class="intro__logo"
        src="~/assets/images/author.jpg"
        blur="5"
      />
      <div class="intro__text">
        <p class="intro__site-title">
          Hi, I am Brian Hudi. I help people bring their ideas to life, with
          code.
        </p>
        If you are interested in hearing more about me, head over to my
        <g-link to="/profile">profile</g-link>
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
@media screen and (max-width: 600px) {
  .intro__description {
    flex-direction: column;
    align-items: center;
  }

  .intro__logo {
    width: 150px;
  }

  .intro__text {
    padding: 15px 0 15px 0;
    margin: 0;
    text-align: center;
  }
}
.intro {
  margin: 0 auto;
  max-width: 600px;

  &__image {
    width: 100%;
    height: 100%;
  }

  &__description {
    opacity: 0.8;
    margin-bottom: 2vw;
    justify-content: center;
  }

  &__site-title {
    font-size: 1.266em;
    margin-bottom: 0.2em;
  }

  &__text {
    margin: auto auto auto 1.2em;
    justify-content: center;
  }

  &__logo {
    border-radius: 10px;
  }
}
</style>