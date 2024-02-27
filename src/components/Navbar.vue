<template>
  <nav>
    <router-link to="/" id="logo">Digitale<br>Vormgeving</router-link>
    <div id="navigation">
      <router-link :to="{ name: 'over' }">Over</router-link>
      <router-link :to="{ name: 'projecten' }">Projecten</router-link>
      <router-link :to="{ name: 'curriculum' }">Curriculum</router-link>
      <router-link :to="{ name: 'afstand' }">Afstand</router-link>
      <router-link :to="{ name: 'contact' }">Contact</router-link>
    </div>
    <a class="button-beige" href="https://inschrijven.vives.be/" target="_blank">Inschrijven</a>
  </nav>
  <!-- Mobile menu -->
  <div id="mobile-menu">
    <router-link to="/" id="logo">Digitale<br>Vormgeving</router-link>
    <div id="mobile-navigation">
      <router-link :to="{ name: 'over' }">Over</router-link>
      <router-link :to="{ name: 'projecten' }">Projecten</router-link>
      <router-link :to="{ name: 'curriculum' }">Curriculum</router-link>
      <router-link :to="{ name: 'afstand' }">Afstand</router-link>
      <router-link :to="{ name: 'contact' }">Contact</router-link>
      <a id="nav-cta" href="https://inschrijven.vives.be/" target="_blank">Inschrijven</a>
    </div>
  </div>
</template>

<style lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  @include pageWidth();

  #logo {
    font-family: 'Lora', serif;
    font-weight: 700;
    font-size: 1.25em;
    transition: $link-trans;
  }

  #logo:hover {
    text-shadow: $text-glow-dark;
    transition: $link-trans;
  }

  #navigation {
    display: flex;
    gap: 2rem;

    a {
      display: inline-block;
      position: relative;
      transition: $link-trans;

      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 0;
        bottom: 0;
        height: 1px;
        margin: -5px 0;
        left: 0;
        background-color: $theme-black;
        transition: $link-trans;
      }

      &:hover:after {
        width: 100%;

      }

      &:hover {
        text-shadow: $text-glow-dark;
        transition: $link-trans;
      }
    }

    .router-link-exact-active {
      text-shadow: $text-glow-dark;

      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        bottom: 0;
        height: 1px;
        margin: -5px 0;
        left: 0;
        background-color: $theme-black;
        transition: $link-trans;
      }
    }
  }
}

#mobile-menu {
  display: none;
}
</style>