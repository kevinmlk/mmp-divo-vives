import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import (s)css files
import '@/assets/css/reset.css';  
import '@/assets/scss/screen.scss';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faArrowRight, faChevronLeft, faChevronRight, faChevronDown, faChevronUp, faFacebookF, faInstagram, faTiktok, faLinkedinIn, faQuoteRight, faPhone, faEnvelope);

const app = createApp(App);
// Add fa comp
app.component('font-awesome-icon', FontAwesomeIcon);
// app.use(Vue3Marquee);
app.use(router);
app.mount('#app');
