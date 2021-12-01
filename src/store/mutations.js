const mutations = {
  SET_USER(state, user) {
    state.user = user;
    sessionStorage.setItem("user", user);
  },
  SET_TOKEN(state, token) {
    state.token = token;
    sessionStorage.setItem("token", token);
  },
  delTagsItem(state, data) {
    state.tagsList.splice(data.index, 1);
  },
  setTagsItem(state, data) {
    state.tagsList.push(data);
  },
  handleCollapse(state, data) {
    state.collapse = data;
  },
  setProdData(state,data){
    state.prodData = Object.assign({},JSON.parse(JSON.stringify(data)));
  },
  setFaceData(state,data){
    state.faceData = Object.assign({},JSON.parse(JSON.stringify(data)));
  }
};

export default mutations;
