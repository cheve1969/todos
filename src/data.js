// Cristian Echeverría
// es6

export class User {

	constructor() {
		this.dbuser = null;

		let self = this;
		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				self.dbuser = user;
			} else {
				self.dbuser = null;
			}
		});
	}

	get name() {
		let name = this.dbuser ? this.dbuser.displayName: "No user"
		return name;
	}

	get email() {
		let email = this.dbuser ? this.dbuser.email: "No email"
		return email;
	}

	login(userName, userPass, callback) {
		firebase.auth().signInWithEmailAndPassword(userName, userPass).then(
			function(){
				if (callback) {callback(null);}
			},
			function(err) {
				if (callback) {callback(err);}
			}
		);
	}

	logout(callback) {
		firebase.auth().signOut().then(
			function() {
				if (callback) {callback(null);}
			},
			function(err) {
				if (callback) {callback(err);}
			}
		);
	}

}


export class TodosModel {
	constructor() {
		this.user = new User();
		this.todos = [];
	}
}
