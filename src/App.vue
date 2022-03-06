<template>
  <div id="page-container" class="page-container">
    <header class="primary-header flex">
      <SiteTitle first-name="Stuart" last-name="Leaver" />
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
            <router-link to="/blog" class="site-menu-item">Blog</router-link>
          </li>
        </ul>
      </nav>
    </header>
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
      this.toggleNavbarVisabilityOptions();
    },
    toggleNavbarVisabilityOptions() {
      this.visible = !this.visible;
      this.expanded = !this.expanded;
    },
  },
  watch: {
    $route() {
      console.log(this.visible);
      console.log(this.expanded);
      this.toggleNavbarVisabilityOptions();
      console.log(this.visible);
      console.log(this.expanded);
    },
  },
};
</script>

<style lang="postcss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Roboto", Helvetica, sans-serif;
  font-weight: 400;
  font-style: normal;
  @apply text-base;
}

/* primary header */
.logo {
  @apply text-4xl font-bold tracking-normal m-6 p-0;
}

.primary-header {
  @apply items-center justify-between max-w-5xl mx-auto pb-8;
}

.mobile-nav-toggle {
  @apply hidden;
}

.primary-navigation {
  @apply list-none p-0 m-0 mt-8 bg-opacity-75;
}

.primary-navigation li {
  @apply mb-2;
}

.primary-navigation a {
  @apply relative no-underline py-2 mx-5 text-gray-600 opacity-60;
}

.primary-navigation a:after {
  @apply absolute right-0 h-0.5 left-0 bottom-0 w-0 mx-auto bg-blue-500;
  content: "";
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

.primary-navigation li:last-child a {
  @apply mr-0;
}

@media (max-width: 35em) {
  .primary-header {
    @apply bg-blue-500 pb-0 mb-6 h-12 shadow-lg;
  }

  .primary-navigation {
    @apply gap-8 fixed inset-0 left-1/3 flex-col z-1000 text-center;
    @apply transform translate-x-full;
    @apply bg-blue-500;
    /* background: hsl(0 0% 0% / 0.75); */
    padding: min(30vh, 10rem) 2em;
    transition: transform 350ms ease-out;
  }

  .primary-navigation a {
    @apply text-white mx-0;
  }

  .primary-navigation a:after {
    @apply bg-white;
  }

  .primary-navigation[data-visible="true"] {
    @apply transform translate-x-0;
  }

  .mobile-nav-toggle {
    @apply block absolute bg-transparent bg-icon-hamburger bg-no-repeat w-6 border-0 right-8 z-9999;
    aspect-ratio: 1;
  }

  .mobile-nav-toggle[aria-expanded="true"] {
    @apply bg-icon-close;
  }
}
</style>
