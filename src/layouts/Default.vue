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

    <footer class="footer mt2em">
      <div class="footer__content">
        <!-- Begin Mailchimp Signup Form -->
        <link
          href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
          rel="stylesheet"
          type="text/css"
        />
        <div id="mc_embed_signup" class="content-box">
          <form
            action="https://gmail.us20.list-manage.com/subscribe/post?u=559f90f3ea4519beae72cbc60&amp;id=54c95bd002"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <label for="mce-EMAIL">Subscribe for weekly updates!</label>
              <input
                type="email"
                value=""
                name="EMAIL"
                class="email full-width"
                id="mce-EMAIL"
                placeholder="email address"
                required
              />
              <div
                style="position: absolute; left: -5000px;"
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_559f90f3ea4519beae72cbc60_54c95bd002"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button primary-button full-width"
                />
              </div>
            </div>
          </form>
        </div>

        <!--End mc_embed_signup-->
        <div class="flex-column white-text socials">
          <socials></socials>
          <span class="footer__copyright">
            Copyright Brian Hudi {{ new Date().getFullYear() }}.
          </span>
        </div>
      </div>
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
#mc-embedded-subscribe-form {
  padding: 0 !important;
}

#mc_embed_signup {
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  margin: 0;
}

.full-width {
  width: 100% !important;
}

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
  background: var(--header-gradient);
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  &__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    max-width: 800px;
    padding: 0 15px;

    @media screen and (max-width: 800px) {
      flex-direction: column;
      width: 100%;
      min-width: 100%;
      .socials {
        align-items: center;
      }
    }
  }

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}

.socials {
  align-items: flex-end;
}
</style>
