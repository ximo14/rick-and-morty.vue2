<template>
	<div>
		<Logo></Logo>
		<b-row>
			<b-col cols=12 offset-md="3">
				<b-card title="Welcome" class="w-50">
					<b-card-text>
						<b-form @submit="formSubmitted">
							<b-form-group id="input-group-1" label-for="input-1"
								description="We'll never share your email with anyone else." class="text-left">
								<b-input-group prepend="👨‍💻" class="mb-2 mr-sm-2 mb-sm-0">
									<b-form-input type="email" v-model="form.email"
										placeholder="rickandmorty@aliens.com">
									</b-form-input>
								</b-input-group>
							</b-form-group>
							<b-form-group id="input-group-2" label-for="input-2">
								<b-input-group prepend="🔑" class="mb-2 mr-sm-2 mb-sm-0">
									<b-form-input v-model="form.password" type="password" id="text-password"
										aria-describedby="password-help-block">
									</b-form-input>
								</b-input-group>
							</b-form-group>
							<b-button type="submit" variant="primary">Access</b-button>
						</b-form>
					</b-card-text>
				</b-card>
			</b-col>
		</b-row>

	</div>
</template>

<script>
	import Logo from './../components/Logo/Logo'

	export default {
		name: 'Auth',
		components: {
			Logo
		},
		data() {
			return {
				form: {
					email: '',
					password: ''
				}
			}
		},
		methods: {
			formSubmitted(e) {
				console.log("hola")
				e.preventDefault();
			}
		}
	}
</script>

<style>
	b-card {
		color: black;
	}
</style>