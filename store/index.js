export const state = () => ({
  rooms: {
    1: {id: 1, name: 'Kitchen', state: false},
    2: {id: 2, name: 'Cabinet', state: true},
  },
})

export const mutations = {
  TOGGLE(state, roomId) {
    let room = state.rooms[roomId];
    room.state = !room.state;
  }
}


