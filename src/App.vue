<script>
// Cristian Echeverría
// es6 vue

import {TodosModel} from './data.js';
import XNavbar from './XNavbar.vue';
import XBtn from './XBtn.vue';
import XIco from './XIco.vue';

export default {
	data () {
		return {
			model: new TodosModel()
		}
	},
	components: { XNavbar, XBtn, XIco },
	methods: {
		test: function() {
			alert("Hola!");
		}
	},
}
</script>


<style>
	#app {padding-top: 65px;}
</style>


<template>
	<div>
		<x-navbar :user="model.user"></x-navbar>

		<div id="app" class="container">
			<h2>Email: {{ model.user.email}}</h2>
			<x-btn typ="primary" @click.prevent="test">
				<x-ico im="star"></x-ico>
				Test
			</x-btn>
		</div>

	</div>
</template>
