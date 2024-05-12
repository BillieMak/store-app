import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// primevue

import 'primevue/resources/themes/aura-light-cyan/theme.css'
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';


import PrimeVue from 'primevue/config';

// components primevue

import Avatar from 'primevue/avatar'
import BadgeDirective from 'primevue/badgedirective';
import Button from 'primevue/button'
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import Image from 'primevue/image'
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputMask from 'primevue/inputmask'
import Rating from 'primevue/rating'
import Tag from 'primevue/tag'
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

const app = createApp(App);
app.use(store)
app.use(router)
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.component('AvatarC', Avatar);
app.component('ButtonC', Button);
app.directive('badge', BadgeDirective);
app.component('CardC', Card);
app.component('CheckboxC', Checkbox);
app.component('ColumnC', Column);
app.component('DataTableC', DataTable);
app.component('DialogC', Dialog);
app.component('ImageC', Image);
app.component('InputNumberC', InputNumber);
app.component('InputTextC', InputText);
app.component('InputIconC', InputIcon);
app.component('IconFieldC', IconField);
app.component('InputMaskC', InputMask);
app.component('RatingC', Rating);
app.component('TagC', Tag);
app.component('ToastC', Toast);

app.mount('#app')
