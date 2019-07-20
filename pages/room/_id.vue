<template>
    <div>
        <h2>{{ room.name }}</h2>
        <div class="row">
            <div class="col s12 m6 l4">
                <div class="card">
                    <div class="card-image">
                        <img src="/cabinet.jpg" alt="Room photo">
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                    </div>
                    <div class="card-content">
                        <p>Main light</p>
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
    }
  }
</script>

<style scoped>
 div.card-content p {
     font-size: 20px;
 }
</style>
