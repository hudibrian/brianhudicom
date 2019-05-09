import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  faFacebook,
  faBars,
  faTimes,
);

export default function(Vue) {
  Vue.component('font-awesome', FontAwesomeIcon);
}
