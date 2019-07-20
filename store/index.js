export const state = () => ({
  rooms: {
    1: {id: 1, name: 'Kitchen', state: false,
      switches: {1: {id: 1, name: 'Свет над холодильником', image: 'cabinet.jpg', state: false}}
    },
    2: {id: 2, name: 'Cabinet', state: false,
      switches: {
        2: {id: 2, name: 'Свет на потолке', image: 'cabinet.jpg', state: false},
        4: {id: 4, name: 'Лампа возле компа', image: 'cabinet_lamp.jpeg', state: false},
      }
    },
  },
})

export const mutations = {
  TOGGLE_ROOM(state, roomId) {
    let room = state.rooms[roomId];
    room.state = !room.state;
  },
  TOGGLE_SWITCH(state, params) {
    let room = state.rooms[params.roomId];
    let currentSwitch = room.switches[params.switchId];

    currentSwitch.state = !currentSwitch.state;

    let roomState = false;

    for (let i in room.switches) {
      if (room.switches[i].state === true) {
        roomState = true;
      }
    }

    room.state = roomState;

  }
}


