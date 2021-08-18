import { instance } from "../..";

class UserServices {
  async GetUserData() {
    try {
      const response = await instance.get("/users/me");
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new UserServices();
