import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { Button, Form, Field, CellGroup, NavBar, Toast } from "vant";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Button);
app.use(Form); // 全局注册
app.use(Field);
app.use(CellGroup);
app.use(NavBar);
app.use(Toast);

app.mount("#app");
