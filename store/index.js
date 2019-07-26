export const state = () => ({
  rooms: {},
})

import axios from 'axios';
import {HOST} from '../config/config';

export const actions = {
  toggleSwitch({commit}, params) {
    axios.post(HOST + '/api/switch/' + params.switchId +'/toggle')
      .then((res) => {
        commit('TOGGLE_SWITCH', {roomId: params.roomId, switchId: params.switchId});
      })
  }
}

export const mutations = {
  SET_ROOMS(state, rooms) {
    state.rooms = rooms;
  },
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
        break;
      }
    }

    room.state = roomState;
  }
}


