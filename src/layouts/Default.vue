<template>
  <div id="app" class="app-grid">
    <header class="header">
      <g-link class="flex-row title-link" to="/">
        <g-image
          alt="Author image"
          class="logo"
          src="~/assets/images/author.jpg"
          width="50px"
          blur="5"
        />
        <p class="no-margin title">
          Brian Hudi
        </p>
      </g-link>

      <div class="header__right">
        <g-link to="/blog">Blog</g-link>
        <g-link to="/about">About</g-link>
        <g-link to="/reading-list">Reading List</g-link>
        <g-link to="/blog">Blog</g-link>
        <ToggleTheme />
      </div>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <span class="footer__copyright">
        Copyright Brian Hudi {{ new Date().getFullYear() }}.
      </span>
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme
  }
};
</script>

<style lang="scss">
.links {
  padding: 10px;
}
.logo {
  margin-right: 5px;
  border-radius: 10px;
}

.title {
  font-size: 1.5em;
  border-bottom: 4px solid #401c5e;
  color: var(--title-color);
}

.title-link {
  text-decoration: none;
}

.header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
  grid-area: content;
}

.footer {
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}
</style>
