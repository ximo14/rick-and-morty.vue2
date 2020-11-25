<template>
	<div id="app">
		<b-navbar variant="faded">
			<b-navbar-nav class="ml-auto">
				<b-nav-item href="#">
					<b-button class="my-2 my-sm-0" type="submit" variant="primary">
						<font-awesome-icon :icon="['fas','user']" color="white" font-size="30px" /> Access
					</b-button>
				</b-nav-item>
			</b-navbar-nav>
		</b-navbar>

		<div class="container">
			<img alt="Vue logo" src="./assets/rick_and_morty_logo.png" class="img-fluid" id="logo">
			<Home></Home>
		</div>
	</div>
</template>

<script>
	import Home from './views/Home.vue'

	export default {
		name: 'App',
		components: {
			Home
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