<template>
  <div id="page-container" class="page-container">
    <header class="primary-header flex">
      <div class="logo">
        <SiteTitle first-name="Stuart" last-name="Leaver" />
      </div>

      <button
        class="mobile-nav-toggle"
        aria-controls="primary-navigation"
        :aria-expanded="expanded"
        v-on:click="toggleNavbar()"
      >
        <span class="sr-only">Menu</span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          :data-visible="visible"
          class="primary-navigation underline-indicators flex"
        >
          <li class="active">
            <a class="uppercase" href="index.html">Home</a>
          </li>
          <li>
            <a class="uppercase" href="destination.html">Features</a>
          </li>
          <li>
            <a class="uppercase" href="crew.html">Price</a>
          </li>
          <li>
            <a class="uppercase" href="technology.html">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
    <!-- <header id="site-header" class="header">
      <div
        class="
          header-content
          relative
          flex flex-wrap
          items-center
          justify-between
        "
      >
        <div
          class="container mx-auto flex flex-wrap items-center justify-between"
        >
          <div
            class="
              w-full
              relative
              flex
              justify-between
              lg:w-auto lg:static lg:block lg:justify-start
            "
          >
            <SiteTitle first-name="Stuart" last-name="Leaver" />
            <button
              class="site-menu-button"
              type="button"
              v-on:click="toggleNavbar()"
            >
              <font-awesome-icon :icon="['fa', 'bars']" size="lg" />
            </button>
          </div>
          <nav
            class="
              site-menu
              flex
              justify-center
              items-center
              lg:w-auto
              sm:w-full
            "
          >
            <div
              v-bind:class="{ hidden: !showMenu, flex: showMenu }"
              class="lg:flex lg:flex-grow items-center sm:w-full"
            >
              <ul
                class="flex flex-col lg:flex-row list-none items-end sm:w-full"
              >
                <li>
                  <router-link to="/" class="site-menu-item">Home</router-link>
                </li>
                <li>
                  <router-link to="/cv" class="site-menu-item">CV</router-link>
                </li>
                <li>
                  <router-link to="/certifications" class="site-menu-item"
                    >Certifications</router-link
                  >
                </li>
                <li>
                  <router-link to="/blog" class="site-menu-item"
                    >Blog</router-link
                  >
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header> -->
    <router-view />
    <SiteFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import SiteTitle from "@/components/SiteTitle.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "App",
  components: {
    SiteTitle,
    SiteFooter,
  },
  data() {
    return {
      expanded: false,
      visible: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.visible = !this.visible;
      this.expanded = !this.expanded;
    },
  },
  watch: {
    $route() {
      this.showMenu = false;
    },
  },
};
</script>

<style lang="postcss">
/* flex */
.flex {
  @apply gap-4;
}

/* primary header */
.logo {
  @apply text-4xl font-bold tracking-normal uppercase m-6 p-0;
}

.primary-header {
  @apply items-center justify-between;
}

.mobile-nav-toggle {
  @apply hidden;
}

.primary-navigation {
  @apply list-none p-0 m-0 bg-opacity-75 text-lg font-semibold;
}

.primary-navigation a {
  @apply no-underline;
}

@media (max-width: 35em) {
  .primary-navigation {
    @apply gap-12 fixed inset-0 left-1/3 flex-col z-1000 text-white;
    @apply transform translate-x-full;
    @apply bg-blue-500;
    /* background: hsl(0 0% 0% / 0.75); */
    padding: min(30vh, 10rem) 2em;
    transition: transform 350ms ease-out;
  }

  .primary-navigation[data-visible="true"] {
    @apply transform translate-x-0;
  }

  .mobile-nav-toggle {
    @apply block absolute bg-transparent bg-icon-hamburger bg-no-repeat w-8 border-0 top-8 right-8 z-9999;
    aspect-ratio: 1;
  }

  .mobile-nav-toggle[aria-expanded="true"] {
    @apply bg-icon-close;
  }
}

@media (min-width: 35em) {
  .primary-navigation {
    @apply p-4;
  }
}
/* .page-container {
}

.header-content {
  @apply max-w-5xl mx-auto pb-8;
}

.site-menu {
  @apply mt-8;
}

.site-menu li {
  @apply md:mb-2;
}

.site-menu-button {
  @apply cursor-pointer text-xl leading-none mt-9 px-3 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none;
}

.site-menu a,
.site-menu a:hover {
  @apply block lg:py-2 sm:py-2 mx-5 text-center text-gray-600 text-base leading-none font-normal relative opacity-60;
}

.site-menu li:last-child a {
  @apply lg:mr-0;
}

.site-menu a:hover {
  @apply bg-transparent opacity-100;
}

.site-menu a:after {
  @apply absolute right-0 left-0 bottom-0 w-0 mx-auto bg-blue-500;
  content: "";
  height: 2px;
  -webkit-transition: all 0.15s ease-in-out;
  -moz-transition: all 0.15s ease-in-out;
  -o-transition: all 0.15s ease-in-out;
  -ms-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
}

a.router-link-active:hover:after,
a.router-link-active:after {
  @apply w-6;
}

a.router-link-active {
  @apply bg-transparent opacity-100;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Roboto", Helvetica, sans-serif;
  font-weight: 400;
  font-style: normal;
  @apply text-base;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.menu-button {
  @apply text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none;
} */
</style>
