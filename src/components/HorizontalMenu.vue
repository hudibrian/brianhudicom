<template>
  <div>
    <a href="javascript:void(0);" class="hamburger" v-on:click="showMenu()">
      <font-awesome
        :icon="isMenu ? ['fas', 'times'] : ['fas', 'bars']"
        size="lg"
      />
    </a>
    <div
      class="menu"
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
  .menu.show-menu {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-color);
    font-size: 2em;
    text-align: center;
    justify-content: center;
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;

    a {
      padding-right: 0;
    }
  }
}

.hamburger {
  z-index: 10;
}

@media screen and (min-width: 800px) {
  .hamburger {
    display: none;
  }
}
</style>
