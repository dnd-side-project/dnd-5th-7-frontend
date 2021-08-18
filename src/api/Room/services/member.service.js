import { instance } from "../..";

class MemberServices {
  GetMembersList(roomIdx) {
    //  방에 있는 유저 리스트 조회
    return instance
      .get("/members/" + roomIdx)
      .then((res) => {
        console.log("유저 데이터응답 : ", res);
      })
      .catch((e) => {
        console.log("error : ", e);
      });
  }
  AddMember(room_id) {
    //  방에 유저 추가
    return instance
      .post("/members", { admin: false, room_id: room_id })
      .then((res) => {
        console.log("유저 데이터응답 : ", res);
      })
      .catch((e) => {
        console.log("error : ", e);
      });
  }
  DeleteMember(member_id) {
    //  방에 유저 추가
    return instance
      .delete("/members" + member_id)
      .then((res) => {
        console.log("유저 데이터응답 : ", res);
      })
      .catch((e) => {
        console.log("error : ", e);
      });
  }
}

export default new MemberServices();
