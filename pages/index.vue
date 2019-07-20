<template>
  <div>

    <div class="row">
      <div class="col s12 m8 l6 xl4">

        <ul class="collection">

          <li class="collection-item avatar" v-for="room in rooms" :key="room.id">
            <a href="#" @click="goToRoom(room.id)">

              <i :class="avatarClass(room)">{{ getRoomAvatarIcon(room) }}</i>

              <span class="title">{{ room.name }}</span>

              <p>
                <span v-for="bulb in room.switches" :key="bulb.id">{{ bulb.name }} <br></span>
              </p>
            </a>

            <span class="badge secondary-content">
              <div class="switch">
                <label>
                  <input type="checkbox" :checked="room.state" @change="toggle(room.id)">
                  <span class="lever"></span>
                </label>
              </div>
            </span>


          </li>


        </ul>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  computed: {
    rooms() {
      return this.$store.state.rooms;
    },
  },
  methods: {
    toggle(roomId) {
      this.$store.commit('TOGGLE_ROOM', roomId);
    },
    avatarClass(room) {
      let color = room.state ? 'yellow' : 'gray';
      return 'material-icons circle medium ' + color;
    },
    getRoomAvatarIcon(room) {
      return room.state ? 'flash_on' : 'wb_sunny';
    },
    goToRoom(roomId) {
      this.$router.push({
        name: 'room-id',
        params: { id: roomId }
      })
    }
  }
}
</script>

<style>
  li.collection-item a {
    color: rgba(0,0,0,0.87);
  }

  li i.medium {
    font-size: 2rem !important;
  }

  li.avatar a {
    display: block;
    margin-right: 70px !important;
  }

  span.badge {
    height: 100%;
  }
</style>
