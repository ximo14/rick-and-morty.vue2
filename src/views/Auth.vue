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
										placeholder="rickandmorty@space.com">
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
	import { mapActions } from 'vuex';
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
					password: '',
					isLoggedIn: false
				}
			}
		},
		methods: {
			...mapActions('auth', ['setIsLoggedIn']),
			formSubmitted() {

				this.form.isLoggedIn = true;

				this.setIsLoggedIn(this.form);

				this.$router.push({name: 'Home'});

			}
		}
	}
</script>

<style>
	b-card {
		color: black;
	}
</style>