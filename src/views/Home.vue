<template>
    <div>
        <Nav></Nav>
        <Logo></Logo>
        <CharacterList></CharacterList>
    </div>
</template>

<script>
    import Nav from '../components/Nav/Nav'
    import Logo from '../components/Logo/Logo'
    import CharacterList from '../components/Character/CharacterList/CharacterList'

    import { mapGetters } from 'vuex'

    export default {
        name: 'Home',
        components: {
            Nav,
            Logo,
            CharacterList
        },
        computed: {
            ...mapGetters('auth', ['getUser']),
            checkIsLoggedIn() {
                return this.getUser.isLoggedIn;
            }
        },
        watch: {
            checkIsLoggedIn(value) {
                if (!value) {
                    this.$router.push({name: 'Auth'});
                }
            }
        },
        mounted() {
            if (!this.getUser.isLoggedIn) {
                this.$router.push({name: 'Auth'});
            }
        }
    }
</script>