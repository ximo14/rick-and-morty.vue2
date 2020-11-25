<template>
	<div id="app">
		<Nav></Nav>
		<div class="container">
			<img alt="Vue logo" src="./assets/rick_and_morty_logo.png" class="img-fluid" id="logo">
			<Home></Home>
		</div>
	</div>
</template>

<script>
	import Home from './views/Home.vue'
	import Nav from './components/Nav/Nav.vue'

	export default {
		name: 'App',
		components: {
			Home,
			Nav
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#logo {
		margin-bottom: 5%;
		width: 70%;
	}
</style>