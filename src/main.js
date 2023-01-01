import { createApp ,defineAsyncComponent} from 'vue';
import store from './store/index.js';
import router from './route.js'
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
//import BaseDialog from './components/ui/BaseDialog.vue';
const  BaseDialog =defineAsyncComponent(()=>import('./components/ui/BaseDialog.vue')) ;

const app = createApp(App);
app.component('base-button',BaseButton);
app.component('base-badge',BaseBadge);
app.component('base-card',BaseCard);
app.component('base-dialog',BaseDialog)
app.use(router);
app.use(store);
app.mount('#app');
