<template>
    <div>
        <div>
            <b-card :title="character.name" :img-src="character.image" img-alt="Image" img-top tag="article"
                style="max-width: 20rem;" class="mb-5">
                <b-card-text>
                    <div class="row">
                        <div class="col-md-8">
                            <b-button variant="primary" v-b-modal="character.id.toString()">More details</b-button>
                        </div>
                        <div class="col-md-3">
                            <b-button href="#" variant="outline" id="like-icon">
                                <!-- <font-awesome-icon :icon="['fas','heart']" color="#e1306c" font-size="20px" /> -->
                                <font-awesome-icon :icon="['far', 'heart']" color="black" font-size="20px" />
                            </b-button>
                        </div>
                    </div>
                </b-card-text>
            </b-card>
        </div>
        <div>
            <b-modal :id='character.id.toString()' :title="character.name">
                <div class="row">
                    <div class="col-md-6">
                        <img :src="character.image" alt="" style="width: 100%">
                    </div>
                    <div class="col-md-6" style="font-size: 18px;">
                        <p class="my-4"><b>Status</b>:
                            <span v-if="character.status == 'Dead'">💀 ☠️</span>
                            <span v-else-if="character.status == 'Alive'">🚀👽</span>
                            <span v-else-if="character.status == 'unknown'">🧐❓</span>
                        </p>
                        <p class="my-4"><b>Specie</b>: {{ character.species }}</p>
                        <p class="my-4"><b>Origin</b>: {{ character.origin }}</p>
                    </div>
                </div>

            </b-modal>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CharacterCard',
        props: {
            character: Object
        }
    }
</script>

<style>
    .card-title {
        font-size: 17px;
        text-align: left;
    }

    #like-icon {
        font-size: 30px;
        padding: inherit;
    }
</style>