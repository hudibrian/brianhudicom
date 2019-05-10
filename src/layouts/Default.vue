<template>
  <div id="app" class="app-grid">
    <header class="header">
      <nav class="header__content">
        <HeaderLogoAndTitle
          class="header__content__left"
          :showLogo="showLogo"
          :title="'Brian Hudi'"
        ></HeaderLogoAndTitle>

        <HorizontalMenu class="header__content__right">
          <g-link to="/">Home</g-link>
          <g-link to="/blog">Blog</g-link>
          <g-link to="/lists">Lists</g-link>
          <g-link to="/contact">Contact</g-link>
          <g-link to="/about">About</g-link>
        </HorizontalMenu>
      </nav>
    </header>

    <div></div>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <socials></socials>
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
import socials from "~/components/socials.vue";

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme,
    HeaderLogoAndTitle,
    HorizontalMenu,
    socials
  }
};
</script>

<style lang="scss">
.z10 {
  z-index: 10;
}

.header {
  grid-area: header;
  min-height: var(--header-height);
  background: var(--header-gradient);
  padding: 0 15px;
  z-index: 10;

  &__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    margin: 0 auto 0;
    padding: 0px 15px 0;

    &__left {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex: 1;
    }

    &__right {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      flex: 1;
    }
  }

  a {
    color: white;
  }
}

.main {
  padding: 0 15px 0;
  grid-area: content;
}

.footer {
  grid-area: footer;
  display: flex;
  flex-direction: column;
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
