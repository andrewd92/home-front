<template>
    <div>
        <h2>{{ room.name }}</h2>
        <div class="row">
            <div class="col s12 m6 l4" v-for="bulb in room.switches" :key="bulb.id">
                <div class="card">
                    <div class="card-image">
                        <img :src="getBulbImagePath(bulb)" alt="Room photo">
                        <a :class="getButtonClass(bulb)" @click="toggle(bulb)">
                            <i class="material-icons">{{ getButtonIcon(bulb) }}</i>
                        </a>
                    </div>
                    <div class="card-content">
                        <p>{{ bulb.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    fetch ({ error, store, params }) {
      if (typeof store.state.rooms[params.id] === 'undefined' ) {
        error({ statusCode: 404, message: 'Page not found' })
      }
    },
    computed: {
      room() {
        return this.$store.state.rooms[this.$route.params.id];
      }
    },
    methods: {
      toggle(bulb) {
        console.log(bulb);
        this.$store.commit('TOGGLE_SWITCH', {roomId: this.room.id, switchId: bulb.id});
      },
      getButtonClass(bulb) {
        let color = bulb.state ? 'yellow' : 'gray';

        return 'btn-floating halfway-fab waves-effect waves-light ' + color;
      },
      getButtonIcon(bulb) {
        return bulb.state ? 'lightbulb_outline' : 'flash_on';
      },
      getBulbImagePath(bulb) {
        return '/' + bulb.image;
      }
    }
  }
</script>

<style scoped>
    div.card-content p {
        font-size: 20px;
    }

    div.card-image img {
        height: 240px !important;
    }
</style>
