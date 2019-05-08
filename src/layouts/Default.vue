<template>
  <div id="app" class="app-grid">
    <header class="header">
      <HeaderLogoAndTitle
        :showLogo="showLogo"
        :title="'Brian Hudi'"
      ></HeaderLogoAndTitle>

      <div class="header__right">
        <HorizontalMenu>
          <g-link to="/">Home</g-link>
          <g-link to="/blog">Blog</g-link>
          <g-link to="/microblog">Microblog</g-link>
          <g-link to="/about">About</g-link>
          <ToggleTheme class="z10" />
        </HorizontalMenu>
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
import HeaderLogoAndTitle from "~/components/HeaderLogoAndTitle.vue";
import HorizontalMenu from "~/components/HorizontalMenu.vue";

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme,
    HeaderLogoAndTitle,
    HorizontalMenu
  }
};
</script>

<style lang="scss">
.z10 {
  z-index: 10;
}

.header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 15px;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }
}

.main {
  padding: 0 15px 0;
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
