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
        <p class="title">
          Brian Hudi
        </p>
      </g-link>

      <div class="header__right">
        <a
          href="javascript:void(0);"
          class="hamburger"
          v-on:click="addMenuClass()"
        >
          <font-awesome
            :icon="isMenu ? ['fas', 'times'] : ['fas', 'bars']"
            size="lg"
          />
        </a>
        <div class="menu" v-bind:class="{ 'show-menu': isMenu }">
          <g-link to="/blog">Blog</g-link>
          <g-link to="/about">About</g-link>
          <g-link to="/reading-list">Reading List</g-link>
          <g-link to="/blog">Blog</g-link>
          <ToggleTheme class="z10" />
        </div>
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
  },
  data: () => {
    return {
      isMenu: false
    };
  },
  methods: {
    addMenuClass: function() {
      this.isMenu = !this.isMenu;
    }
  }
};
</script>

<style lang="scss">
.menu a {
  padding-right: 20px;
  text-decoration: none;
}

@media screen and (max-width: 800px) {
  .menu {
    display: none;
  }
}

@media screen and (max-width: 800px) {
  .z10 {
    z-index: 10;
  }
  .menu.show-menu {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-color);
    font-size: 2em;
    text-align: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;

    a {
      padding-right: 0;
    }
  }
}

@media screen and (min-width: 800px) {
  .hamburger {
    display: none;
  }
}

.hamburger {
  z-index: 10;
}

.logo {
  margin-right: 5px;
  border-radius: 10px;
}

.title {
  font-size: 1.1em;
  color: var(--title-color);
  margin: auto;
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
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
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
