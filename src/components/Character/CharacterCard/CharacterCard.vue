<template>
    <div class="d-flex justify-content-center">
        <div>
            <b-card :title="character.name" :img-src="character.image" img-alt="Image" img-top tag="article"
                style="max-width: 20rem;" class="mb-5">
                <b-card-text>
                    <div class="row">
                        <div class="col-md-8">
                            <b-button variant="primary" v-b-modal="character.id.toString()">More details</b-button>
                        </div>
                        <div class="col-md-3">
                            <b-button href="#" variant="outline" id="like-icon" @click="characterLiked(character)">
                                <font-awesome-icon v-if="characterLikedContains(character.id)" :icon="['fas','heart']"
                                    color="#e1306c" font-size="20px"></font-awesome-icon>
                                <font-awesome-icon v-else :icon="['far', 'heart']" color="black" font-size="20px">
                                </font-awesome-icon>
                            </b-button>
                        </div>
                    </div>
                </b-card-text>
            </b-card>
        </div>
        <div>
            <CharacterModal v-bind:character="character"></CharacterModal>
        </div>
    </div>
</template>

<script>
    import CharacterModal from '../CharacterModal/CharacterModal.vue'
    export default {
        name: 'CharacterCard',
        components: {
            CharacterModal
        },
        props: {
            character: Object
        },
        data() {
            return {
                charactersLiked: []
            }
        },
        mounted() {
            this.getCharactersLiked();
        },
        methods: {
            characterLiked(character) {

                this.getCharactersLiked();

                if (this.charactersLiked.includes(character.id)) {

                    const index = this.charactersLiked.indexOf(character.id);

                    this.charactersLiked.splice(index, 1);

                } else {

                    this.charactersLiked.push(character.id);

                }

                const parsed = JSON.stringify(this.charactersLiked);

                localStorage.setItem('charactersLiked', parsed);

            },

            getCharactersLiked() {

                if (localStorage.getItem('charactersLiked')) {

                    try {

                        this.charactersLiked = JSON.parse(localStorage.getItem('charactersLiked'));

                    } catch (e) {

                        localStorage.removeItem('charactersLiked');

                    }
                }
            },

            characterLikedContains(characterId) {

                return this.charactersLiked.indexOf(characterId) > -1

            }
        }
    }
</script>

<style>
    .card-title {
        font-size: 17px;
        text-align: left;
        color: black;
    }

    #like-icon {
        font-size: 30px;
        padding: inherit;
    }
</style>