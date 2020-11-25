<template>
    <b-modal :id='character.id.toString()' :title="character.name" hide-footer>
        <div class="row">
            <div class="col-md-6">
                <img :src="character.image" id="modal-img" :alt="character.name">
            </div>
            <div class="col-md-6" id="modal-data">
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
</template>

<script>
    export default {
        name: 'CharacterModal',
        props: {
            character: Object
        }
    }
</script>

<style>
    #modal-img {
        width: 100%
    }

    #modal-data {
        font-size: 18px;
    }
</style>