<script>
// Cristian Echeverría
// es6 vue

import XBtn from './XBtn.vue';

export default {
	data () {
		return {
			userName: "",
			userPass: ""
		}
	},
	props: ['user'],
	components: { XBtn },
	methods: {
		login: function() {
			let userName = this.userName.trim();
			let userPass = this.userPass.trim();

			if ((userName == "") || (userPass == "")) {
				alert("Errorx en Username o Password");
				return
			} else {
				this.user.login(userName, userPass, this.authResponse);
			}
		},
		logout: function() {
			this.user.logout(this.authResponse);
		},
		authResponse: function(err) {
			if (!err) {
				this.userName = "";
				this.userPass = "";
			} else {
				alert(err.code + ":" + err.message);
			}
		}
	},
}
</script>


<template>
	<nav class="navbar navbar-default navbar-fixed-top">
		<div class="container">

			<div class="navbar-header">
				<a class="navbar-brand" href="#">
					<span class="glyphicon glyphicon-ok"></span>
					Todos
				</a>
			</div>

			<form v-if="!user.dbuser" class="navbar-form navbar-left">
				<div class="form-group">
					<input v-model="userName" type="text" placeholder="Username" class="form-control" />
					<input v-model="userPass" type="password" placeholder="Password" class="form-control" />
				</div>
				<x-btn @click.prevent="login">Login</x-btn>
			</form>
			<x-btn v-if="user.dbuser" :nav="true" @click.prevent="logout">Logout</x-btn>

		</div>
	</nav>
</template>
