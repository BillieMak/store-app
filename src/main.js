import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'primevue/resources/themes/aura-light-green/theme.css'
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
// import "./modules/sales/themes/theme.css";

import PrimeVue from 'primevue/config';


import BadgeDirective from 'primevue/badgedirective';
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Card from 'primevue/card';
import Image from 'primevue/image'
import Tag from 'primevue/tag'
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import InputNumber from 'primevue/inputnumber';
//import components

const app = createApp(App);
app.use(store)
app.use(router)
app.use(PrimeVue, { ripple: true });
app.directive('badge', BadgeDirective);
app.component('AvatarC', Avatar);
app.component('ButtonC', Button);
app.component('CardC', Card);
app.component('ImageC', Image);
app.component('TagC', Tag);
app.component('InputTextC', InputText);
app.component('DataTableC', DataTable);
app.component('ColumnC', Column);
app.component('DialogC', Dialog);
app.component('InputNumberC', InputNumber);

app.mount('#app')
