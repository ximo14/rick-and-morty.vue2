import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as FasHeart, faUser as FasUser }  from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faHeart, FasHeart, FasUser)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)