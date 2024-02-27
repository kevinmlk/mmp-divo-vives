<template>
  <footer>
    <div id="content-footer">
      <!-- Logo -->
      <div id="logo-footer">
        <h4>Digitale<br>Vormgeving</h4>
        <p>Digitale vormgeving is een<br>volwaardige graduaatsopleiding<br> van 2 jaar
          aan de Hogeschool VIVES</p>
        <!-- Socials -->
        <ul class="socials">
          <li><a href="https://www.instagram.com/vives_cdd/" target="_blank"><font-awesome-icon
                icon="fa-brands fa-instagram" class="socials-icons" /></a></li>
          <li><a href="https://www.facebook.com/vivestechgraduaten/" target="_blank"><font-awesome-icon
                icon="fa-brands fa-facebook-f" class="socials-icons" /></a></li>
          <li><a href="https://www.tiktok.com/@vivestechnology" target="_blank"><font-awesome-icon
                icon="fa-brands fa-tiktok" class="socials-icons" /></a></li>
          <li><a href="https://www.linkedin.com/company/vivestechnology/" target="_blank"><font-awesome-icon
                icon="fa-brands fa-linkedin-in" class="socials-icons" /></a></li>
        </ul>
      </div>
      <!-- Navigation -->
      <div id="nav-footer">
        <h4>Navigatie</h4>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link :to="{ name: 'over' }">Over</router-link></li>
          <li><router-link :to="{ name: 'projecten' }">Projecten</router-link></li>
          <li><router-link :to="{ name: 'curriculum' }">Curriclum</router-link></li>
          <li><router-link :to="{ name: 'afstand' }">Afstand</router-link></li>
          <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
        </ul>
      </div>
      <!-- Info -->
      <div id="info-footer">
        <h4>Hogeschool VIVES</h4>
        <ul>
          <li>Xaverianenstraat 10<br>8200 Brugge</li>
          <li><a href="tel:+3250305100"><font-awesome-icon icon="fa-solid fa-phone"
                class="footer-icons"></font-awesome-icon>+32 50 30 51
              00</a></li>
          <li><a href="mailto:info@vives.be"><font-awesome-icon icon="fa-solid fa-envelope"
                class="footer-icons"></font-awesome-icon>info@vives.be</a></li>
        </ul>
      </div>
    </div>
    <!-- Copyright -->
    <ul id="copyright-footer">
      <li>&copy; {{ currentYear }} - VIVES | All rights reserved</li>
      <li><a href="https://www.vives.be/nl" target="_blank">VIVES</a></li>
    </ul>
  </footer>
</template>
<!-- Script -->
<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<!-- Styles -->
<style lang="scss">
footer {
  background: $theme-black;
  color: $theme-beige;
  padding: 4rem 0;

  #content-footer {
    display: flex;
    justify-content: space-between;
    padding-bottom: 4rem;

    h4 {
      font-size: 1.5em;
      font-weight: 500;
      height: 60px;
      display: flex;
      align-items: end;
      margin-bottom: 1rem;
    }

    p,
    a,
    #info-footer {
      font-size: .8em;
      line-height: 175%;
    }

    #logo-footer {
      width: 250px;

      h4 {
        font-family: $font-lora;
        font-weight: 700;
        font-size: 1.75em;

      }

      .socials {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;

        .socials-icons {
          color: $theme-beige;
          font-size: 1.4em;
          transition: $link-trans;
        }

        .socials-icons:hover {
          text-shadow: $text-glow-beige;
          opacity: .75;
          transition: $link-trans;
        }
      }
    }

    #nav-footer {
      width: 250px;

      ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 125px;
        column-gap: 2.5rem;
        row-gap: .25rem;
      }

      ul li a {
        color: $theme-beige;
        transition: $link-trans;
      }

      ul li a:hover {
        text-shadow: $text-glow-beige;
        opacity: .75;
        transition: $link-trans;
      }

      .router-link-exact-active {
        text-shadow: $text-glow-beige;
        font-weight: 500;
      }
    }

    #info-footer {
      width: 250px;

      a {
        color: $theme-beige;
        font-size: .9em;
        transition: $link-trans;

        .footer-icons {
          color: $theme-beige;
          margin-right: .5rem
        }
      }

      a:hover {
        transition: $link-trans;
        text-shadow: $text-glow-beige;
        opacity: .75;
      }
    }
  }

  #content-footer,
  #copyright-footer {
    @include pageWidth();
  }

  #copyright-footer {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid $theme-beige;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 1.75px;
    font-size: .8em;

    a {
      color: $theme-beige;
      transition: $link-trans
    }

    a:hover {
      opacity: .75;
      transition: $link-trans;
      text-shadow: $text-glow-beige;
    }
  }
}
</style>