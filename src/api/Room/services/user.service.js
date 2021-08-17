import { instance } from "../..";

class UserServices {
  GetUserData() {
    return instance
      .get("/users/me")
      .then((res) => {
        console.log("유저 데이터응답 : ", res);
      })
      .catch((e) => {
        console.log("error : ", e);
      });
  }
}

export default new UserServices();
