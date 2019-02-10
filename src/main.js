import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import store from './store'
import * as fb from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router,
	store,
	created() {
		fb.initializeApp( {
			apiKey: "AIzaSyCsHcrBDpwW68mrzsA-imFSgvFJGtAWn48",
			authDomain: "vue-proj-ads.firebaseapp.com",
			databaseURL: "https://vue-proj-ads.firebaseio.com",
			projectId: "vue-proj-ads",
			storageBucket: "vue-proj-ads.appspot.com",
			messagingSenderId: "154447710526"
		})

		fb.auth().onAuthStateChanged(user => {
			if (user) {
				this.$store.dispatch('autoLoginUser', user)
			}
		})

		this.$store.dispatch('fetchAds');
	},
}).$mount('#app')
