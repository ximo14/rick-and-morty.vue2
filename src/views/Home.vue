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

    export default {
        name: 'Home',
        components: {
            Nav,
            Logo,
            CharacterList
        },
        computed: {
            checkIsLoggedIn() {
                return this.$store.getters.getUser.isLoggedIn;
            }
        },
        watch: {
            checkIsLoggedIn(value) {
                if (!value) {
                    this.$router.push('/auth');
                }
            }
        },
        mounted() {
            if (!this.$store.getters.getUser.isLoggedIn) {
                this.$router.push('/auth');
            }
        }
    }
</script>