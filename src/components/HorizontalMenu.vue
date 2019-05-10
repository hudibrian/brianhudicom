<template>
  <div class="menu">
    <button
      class="hamburger hamburger--spin"
      type="button"
      :class="isMenu ? 'is-active' : ''"
      v-on:click="showMenu()"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <div
      class="menu__content"
      v-bind:class="{ 'show-menu': isMenu }"
      v-on:click="showMenu()"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isMenu: false
    };
  },
  methods: {
    showMenu: function() {
      this.isMenu = !this.isMenu;
    }
  }
};
</script>

<style lang="scss">
.menu {
  margin: 15px 0;
  &__content {
    display: flex;
    flex: 1 auto;
    justify-content: space-between;
  }
}

@media screen and (max-width: 799px) {
  .menu__content {
    display: none;
  }
}

@media screen and (max-width: 800px) {
  .menu__content.show-menu {
    display: flex;
    flex-direction: column;
    background: var(--header-gradient);
    font-size: 2em;
    text-align: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}

.hamburger {
  z-index: 10;
}

.hamburger-inner {
  background-color: white !important;
}

.hamburger-inner::before {
  background-color: white !important;
}

.hamburger-inner::after {
  background-color: white !important;
}

@media screen and (min-width: 800px) {
  .hamburger {
    display: none;
  }
}
</style>
