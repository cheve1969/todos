<script>
// Cristian Echeverría
// es6 vue

export default {
	computed: {
		btnClass: function(){
			let s = "btn btn-" + this.typ;
			if (this.nav) {
				s = s + " navbar-btn";
			}
			if (this.size !="") {
				s = s + " btn-" + this.size;
			}
			return s;
		}
	},
	props: {
		typ: {
			type: String,
			default: "default",
			validator: function(value) {
				let valids = ["default", "primary", "success", "info", "warning", "danger", "link"];
				return (valids.indexOf(value) >= 0);
			}
		},
		size: {
			type: String,
			default: "",
			validator: function(value) {
				let valids = ["", "lg", "sm", "xs"];
				return (valids.indexOf(value) >= 0);
			}
		},
		nav: {
			type: Boolean,
			default: false
		}
	}
}
</script>


<template>
	<button class="{{ btnClass }}">
		<slot></slot>
	</button>
</template>
