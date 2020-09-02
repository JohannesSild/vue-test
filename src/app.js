import Vue from "vue";
import App from "./App.vue";

const app = new Vue({
    el: '#app',
    render: h => h(App),
    template: `<h1>{{ message }}</h1>`,
    data() {
        return {
            message: "Well hello",
        };
    },
});