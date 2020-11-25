<template>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"  v-for="character in characters" :key="character.id">
            <CharacterCard v-bind:character="character"></CharacterCard>
        </div>
    </div>
</template>

<script>
    import CharacterCard from '../CharacterCard/CharacterCard.vue'
    import axios from 'axios'

    export default {
        name: 'CharacterList',
        components: {
            CharacterCard
        },
        data() {
            return {
                characters: []
            }
        },
        mounted() {
            axios.get('https://sampleapis.com/rickandmorty/api/characters', {
                    params: {
                        _limit: 19
                    }
                })
                .then(response => this.characters = response.data)
        }
    }
</script>

<style>

</style>