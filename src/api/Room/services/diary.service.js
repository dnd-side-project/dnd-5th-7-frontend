import { instance } from "../..";

class DiaryServices {
  GetDiaryDetail(pid) {
    //  다이어리 상세 조회 - 누가 작성했는지, 언제 작성했는지
    return instance
      .get("/contents/" + pid)
      .then((res) => {
        console.log("유저 데이터응답 : ", res);
      })
      .catch((e) => {
        console.log("error : ", e);
      });
  }
  async GetDiaryList(rid) {
    //  해당 방에 있는 다이어리 조회
    try {
      const response = await instance.get("/contents/list/" + rid);
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  async EditDiary(pid, rid, imgUrl, text) {
    //  다이어리 수정 - 이러케 작성하는 게 맞나요 . . ?
    try {
      const response = await instance.patch("/contents/" + pid, {
        Headers: { room_id: rid },
        data: { imgUrl: imgUrl, text: text },
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  async DeleteDiary(pid) {
    //  다이어리 삭제
    try {
      const response = await instance.delete("/contents/" + pid);
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  async AddTextDiary(data) {
    try {
      const response = await instance.post("/contents/text", data);
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new DiaryServices();
