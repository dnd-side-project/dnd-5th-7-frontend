import { instance } from "../..";
import { userStore } from "../../../store/modules/user_module";

class MainServices {
  uid = userStore().state.userStore.id;
  GetCalendar(date) {
    //  진행중인 기록 리스트 조회
    return (
      instance
        .get("/main/calenda", { date: date })
        // "2021-08" 형식의 date 넣어줘야 함
        .then((res) => {
          console.log("유저 데이터응답 : ", res);
        })
        .catch((e) => {
          console.log("error : ", e);
        })
    );
  }
  GetInProgress() {
    //  진행중인 기록 리스트 조회
    return instance
      .get("/main/inProgress/" + this.uid)
      .then((res) => {
        console.log("유저 데이터응답 : ", res);
      })
      .catch((e) => {
        console.log("error : ", e);
      });
  }
  GetInProgressList() {
    //  진행중인 기록 리스트 상세 조회
    return instance
      .get("/main/inProgressList/" + this.uid)
      .then((res) => {
        console.log("유저 데이터응답 : ", res);
      })
      .catch((e) => {
        console.log("error : ", e);
      });
  }
  GetBookmark() {
    //  즐겨찾기 한 기록 리스트 조회
    return instance
      .get("/main/bookmark/" + this.uid)
      .then((res) => {
        console.log("유저 데이터응답 : ", res);
      })
      .catch((e) => {
        console.log("error : ", e);
      });
  }
  GetBookmarkList() {
    //  즐겨찾기 한 기록 리스트 상세 조회
    return instance
      .get("/main/bookmarkList/" + this.uid)
      .then((res) => {
        console.log("유저 데이터응답 : ", res);
      })
      .catch((e) => {
        console.log("error : ", e);
      });
  }
}

export default new MainServices();
