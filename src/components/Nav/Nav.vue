<template>
    <b-navbar variant="faded">
        <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="!this.user.isLoggedIn">
                <b-link :to="{ path: 'auth' }">
                    <b-button class="my-2 my-sm-0" type="submit" variant="primary">
                        <font-awesome-icon :icon="['fas','user']" color="white" font-size="30px" /> Access
                    </b-button>
                </b-link>
            </b-nav-item>
            <b-nav-item v-else>
                <span class="mr-2" id="email-user">Welcome {{this.user.email}}</span>
                    <b-button class="my-2 my-sm-0" type="submit" variant="primary" @click="logout">
                        <font-awesome-icon :icon="['fas','sign-out-alt']" color="white" font-size="30px" /> Log out
                    </b-button>
            </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
    export default {
        name: 'Nav',
        data() {
            return {
                user: {
                    isLoggedIn: '',
                    email: '',
                }
            }
        },
        computed: {
            ...mapGetters('auth', ['getUser'])
        },
        mounted() {
            this.user.isLoggedIn = this.getUser.isLoggedIn;
            this.user.email = this.getUser.email;
        },
        methods: {
            ...mapActions('auth', ['setIsLoggedIn']),
            logout() {
                this.setIsLoggedIn(false);
                this.user.isLoggedIn = this.getUser.isLoggedIn
            }
        }

    }
</script>

<style>
#email-user {
    color: white;
}
</style>