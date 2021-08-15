import axios from "axios";

const API_URL = "https://tido-diary.herokuapp.com/diaries/";

class RoomServices {
  CreateRoom(title, date, mood) {
    return axios
      .post(API_URL, { title: title, date: date, mood: mood }, { withCredentials: true })
      .then((res) => {
        console.log("응답2 : ", res);
      })
      .catch((e) => {
        console.log("error : ", e);
      });
  }
  GetRoomList(rId) {
    return axios
      .get(API_URL + rId, { withCredentials: true })
      .then((res) => {
        console.log("응답2 : ", res);
      })
      .catch((e) => {
        console.log("error : ", e);
      });
  }
  EditRoom(rId, ntitle, ndate, nmood, nlock) {
    return axios
      .patch(API_URL + rId, { title: ntitle, date: ndate, mood: nmood, lock: nlock }, { withCredentials: true })
      .then((res) => {
        console.log("응답2 : ", res);
      })
      .catch((e) => {
        console.log("error : ", e);
      });
  }
  DeleteRoom(rId) {
    return axios
      .delete(API_URL + rId, { withCredentials: true })
      .then((res) => {
        console.log("응답2 : ", res);
      })
      .catch((e) => {
        console.log("error : ", e);
      });
  }
}

export default new RoomServices();
