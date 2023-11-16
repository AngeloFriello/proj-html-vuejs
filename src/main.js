import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'


library.add(faCircleUser,faChevronDown,faMagnifyingGlass,faDownload,faArrowRight,faFile,faUser,faCalendar,faEye)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
