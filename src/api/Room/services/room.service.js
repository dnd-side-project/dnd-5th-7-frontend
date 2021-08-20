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
  async GetRoomList(rId) {
    try {
      const response = await axios.get(API_URL + rId, { withCredentials: true });
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
    }
    return;
  }
  async EditRoom(rId, ntitle, ndate, nmood, nlock) {
    try {
      const response = await axios.patch(
        API_URL + rId,
        { title: ntitle, date: ndate, mood: nmood, lock: nlock },
        { withCredentials: true },
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  async DeleteRoom(rId) {
    try {
      const response = await axios.delete(API_URL + rId, { withCredentials: true });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  async BookmarkRoom(rid) {
    //  방 즐겨찾기 등록/해제
    try {
      const response = await axios.post(API_URL + "bookmark/", { room_id: rid }, { withCredentials: true });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new RoomServices();
