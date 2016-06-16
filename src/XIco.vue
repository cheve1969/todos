<script>
// Cristian Echeverría
// es6 vue

export default {
	props: {
		im: {
			type: String,
			default: "question-sign",
		}
	}
}
</script>


<template>
	<i class="glyphicon glyphicon-{{ im }}"></i>
</template>
