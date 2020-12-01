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
        }
    }
</script>