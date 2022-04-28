<template>
	<div>
		<Logo></Logo>
		<div class="d-flex justify-content-center">
				<b-card title="Welcome" class="auth-card">
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
			</div>

	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
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
		computed: {
            ...mapGetters('auth', ['getUser']),
		},
		methods: {
			...mapActions('auth', ['setIsLoggedIn']),
			formSubmitted() {

				this.form.isLoggedIn = true;

				this.setIsLoggedIn(this.form);

				this.$router.push({name: 'Home'});

			}
		},
		mounted() {
			if (this.getUser.isLoggedIn) {
                this.$router.push({name: 'Home'});
            }
		}
	}
</script>

<style>
	.auth-card {
		color: black;
		width: 50%
	}

	@media (max-width: 768px) {
		.auth-card {
			width: 100%
		}
	}
</style>