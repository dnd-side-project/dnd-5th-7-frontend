import axios from "axios";
import { BASE_URL } from "../../../config";

const API_URL = `${BASE_URL}` + "/diaries/";

class RoomServices {
  async CreateRoom(title, date, mood) {
    try {
      const response = await axios.post(API_URL, { title: title, date: date, mood: mood }, { withCredentials: true });
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
    }
    return;
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
