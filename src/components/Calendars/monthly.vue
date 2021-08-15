<template>
  <main class="container flex flex-row flex-wrap w-full h-auto justify-around items-center">
    <section class="calendar-wrapper flex flex-col justify-center items-center rounded h-full cal-wrappe m-1">
      <div class="flex flex-row justify-between items-center w-full h-12 text-lg border-b-2 border-gray500">
        <div class="flex items-center">
          <div id="CalendarTitle" class="font-bold ml-3 flex flex-row items-center absolute" @click="datepicker()">
            {{ year }}.{{ monthToString }}
            <div v-show="isPickerClicked" class="w-0">
              <DatePicker
                class="datepicker relative bg-white -left-24 top-36"
                id="scrollView"
                :SelectedYear="this.year"
                :SelectedMonth="this.month"
                @setEmitDate="setEmitDate"
              />
            </div>
            <div class="ml-1"><ComboBox class="relative" /></div>
          </div>

          <!-- <div class="header-arrow cursor-pointer" @click="controlMonth('prev')">&lt;</div>
          <div class="header-arrow cursor-pointer" @click="controlMonth('next')">&gt;</div> -->
        </div>
        <div class="flex mr-1" @click="goto('AddRoom')"><AddBtn class="mr-1" />추가</div>
      </div>
      <table class="w-full h-auto">
        <thead class="flex w-full h-12 justify-around items-center">
          <th v-for="day in days" :key="day">{{ day }}</th>
        </thead>
        <tbody>
          <tr v-for="(date, idx) in dates" :key="idx" class="flex w-full h-12 justify-around items-center">
            <td
              v-for="(day, index) in date"
              :key="index"
              class="w-12 h-12 flex flex-col justify-center items-center hover-date"
              :class="{
                'today-date': day === currentDate && isCurrentDate,
                'prev-dates': isPrevDates(day, idx),
                'etc-dates': isETCDates(day),
                'like-dates': isLIKEDates(day),
              }"
            >
              <div class="dateOnly w-full flex items-center justify-center" @click="dayClicked(day)">
                {{ day }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
import ComboBox from "../../assets/combobox.svg";
import DatePicker from "./datepicker.vue";
import AddBtn from "../../assets/calendar_plus_btn.svg";

export default {
  components: { ComboBox, AddBtn, DatePicker },
  data() {
    return {
      days: ["일", "월", "화", "수", "목", "금", "토"],
      months: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      dates: [],
      ETCdates: [10],
      LIKEdates: [13, 16],
      currentYear: 0,
      currentMonth: 0,
      year: 0,
      month: 0,
      currentDate: new Date().getDate(),
      prevDate: [],
      previewDate: [],
      isPickerClicked: false,
    };
  },
  computed: {
    monthToString: function () {
      return this.months[this.month - 1];
    },
    isCurrentDate: function () {
      let status = false;
      if (this.currentYear === 0 && this.currentMonth === 0) {
        status = true;
      } else {
        status = this.currentYear === new Date().getFullYear() && this.currentMonth === new Date().getMonth() + 1;
      }
      return status;
    },
  },
  created() {
    this.init();
  },
  methods: {
    goto(page) {
      this.$router.push(page);
    },
    goWithParam(page, param) {
      this.$router.push({ name: page, params: { dates: param } });
    },
    init(param) {
      if (param) {
        this.year = param[0];
        this.month = param[1];
        this.calendarDate();
      } else {
        const date = new Date();
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1;
        this.calendarDate();
      }
    },
    setEmitDate(param) {
      this.init(param);
    },
    calendarDate() {
      const [monthFirstDay, monthLastDate, prevMonthLastDate] = this.getFirstDayLastDate(this.year, this.month);
      this.dates = this.getDaysOfMonth(monthFirstDay, monthLastDate, prevMonthLastDate);
    },
    getFirstDayLastDate(year, month) {
      const firstDay = new Date(year, month - 1, 1).getDay();
      const lastDate = new Date(year, month, 0).getDate();
      let lastMonth = month - 1;
      if (month === 1) {
        lastMonth = 12;
        year -= 1;
      }
      const prevLastDate = new Date(year, lastMonth, 0).getDate();
      return [firstDay, lastDate, prevLastDate];
    },
    getDaysOfMonth(monthFirstDay, monthLastDate, prevMonthLastDate) {
      let day = 1;
      let prevDay = prevMonthLastDate - monthFirstDay + 1;
      let dates = [];
      let daysOfWeek = [];
      while (day <= monthLastDate) {
        if (day === 1) {
          this.getPrevDates(monthFirstDay, daysOfWeek, prevDay);
          this.padDates(daysOfWeek);
        }
        if (daysOfWeek.length === 7) {
          dates.push(daysOfWeek);
          day = daysOfWeek[daysOfWeek.length - 1];
          daysOfWeek = [];
        } else if (daysOfWeek.length < 7 && daysOfWeek.indexOf(monthLastDate) > -1) {
          this.padDates(daysOfWeek);
          dates.push(daysOfWeek);
          break;
        }
        day++;
        if (daysOfWeek.length <= 7) {
          daysOfWeek.push(day);
        }
      }
      return dates;
    },
    getPrevDates(monthFirstDay, daysOfWeek, prevDay) {
      for (let j = 0; j < monthFirstDay; j++) {
        daysOfWeek.push(prevDay);
        this.prevDate.push(prevDay);
        prevDay += 1;
      }
    },
    padDates(daysOfWeek) {
      const len = daysOfWeek.length;
      const leftDays = 7 - len;
      if (len >= 0 && len < 7) {
        for (let i = 1; i <= leftDays; i++) {
          daysOfWeek.push(i);
          if (this.previewDate.length < leftDays) this.previewDate.push(i);
        }
      }
    },
    controlMonth(p) {
      if (p === "prev") {
        this.currentMonth = this.month - 1;
        this.currentYear = this.year;
        if (this.month === 1) {
          this.currentMonth = 12;
          this.currentYear = this.year -= 1;
        }
      } else {
        this.currentMonth = this.month + 1;
        this.currentYear = this.year;
        if (this.month === 12) {
          this.currentMonth = 1;
          this.currentYear = this.year += 1;
        }
      }
      const param = [this.currentYear, this.currentMonth];
      this.init(param);
    },
    controlYear(p) {
      if (p === "prev") {
        this.currentYear = this.year - 1;
      } else {
        this.currentYear = this.year + 1;
      }
      const param = [this.currentYear, this.month];
      this.init(param);
    },
    datepicker() {
      this.isPickerClicked = !this.isPickerClicked;
      var container = document.getElementById("scrollView");
      container.scrollTop = container.scrollHeight;
    },
    skipBy(p) {
      this.currentYear = new Date().getFullYear();
      if (p === "today") {
        this.currentMonth = new Date().getMonth() + 1;
      } else {
        this.currentMonth = p + 1;
      }
      const param = [this.currentYear, this.currentMonth];
      this.init(param);
    },
    isPrevDates(day, idx) {
      return (this.prevDate.indexOf(day) > -1 && idx < 1) || (this.previewDate.indexOf(day) > -1 && idx > 1);
    },
    isETCDates(day) {
      return this.ETCdates.includes(day);
    },
    isLIKEDates(day) {
      return this.LIKEdates.includes(day);
    },
    dayClicked(day) {
      const dates = this.year + "-" + this.month + "-" + day;
      if (this.ETCdates.includes(day) || this.LIKEdates.includes(day)) this.goWithParam("RoomList", dates);
      // console.log(this.year + "년" + this.month + "월" + day + "일");
    },
  },
};
</script>

<style>
#CalendarTitle {
  font-family: Pretendard-Bold;
  font-weight: 800;
  font-size: 24px;
}
td.prev-dates {
  color: #d2d2d2;
}
/* .hover-date:hover {
  font-size: 20px;
} */

/* .today-date {
  background-image: url("data:image/svg+xml,%3Csvg width='44' height='36' viewBox='0 0 44 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.75 27.1667L15.4 29H33V13.1111L31.35 10.6667L28.6 7H11V24.1111L13.75 27.1667Z' fill='%23FFD74A'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
} */

.dateOnly {
  height: 20px;
}
.etc-dates {
  color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='44' height='36' viewBox='0 0 44 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.75 27.1667L15.4 29H33V13.1111L31.35 10.6667L28.6 7H11V24.1111L13.75 27.1667Z' fill='%232D2D2D'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.like-dates {
  color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='44' height='36' viewBox='0 0 44 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.75 27.1667L15.4 29H33V13.1111L31.35 10.6667L28.6 7H11V24.1111L13.75 27.1667Z' fill='%232D2D2D'/%3E%3Crect x='39.9785' y='8.23096' width='3.60545' height='8.22838' rx='1.80272' transform='rotate(135 39.9785 8.23096)' fill='%23FFD74A'/%3E%3Crect x='34.1816' y='10.8018' width='3.60545' height='8.22838' rx='1.80272' transform='rotate(-135 34.1816 10.8018)' fill='%23FFD74A'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.datepicker {
  top: 50;
  left: 20;
}
</style>
