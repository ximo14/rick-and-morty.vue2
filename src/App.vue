<template>
	<div id="app">
		<div class="container">
			<router-view />
		</div>
	</div>
</template>

<script>
	// import Home from './views/Home.vue'
	// import Nav from './components/Nav/Nav.vue'

	export default {
		name: 'App',
		
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: white;
	}

	#logo {
		margin-bottom: 5%;
		width: 70%;
	}
</style>