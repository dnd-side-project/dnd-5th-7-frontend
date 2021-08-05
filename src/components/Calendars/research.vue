<template>
  <main class="container flex flex-row flex-wrap w-full h-auto justify-around items-center">
    <section class="calendar-wrapper flex flex-col justify-center items-center rounded h-full cal-wrappe m-1">
      <div class="flex flex-row justify-between items-center w-full h-12 text-lg border-b-2 border-gray500">
        <div class="flex items-center">
          <h1 id="CalendarTitle" class="font-bold ml-3">{{ year }}.{{ monthToString }}</h1>
          <div class="ml-1"><ComboBox /></div>
        </div>
        <div class="flex mr-1"><AddBtn class="mr-1" />추가</div>
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
                'ing-dates': isINGDates(day),
                'ed-dates': isEDDates(day),
              }"
            >
              <div class="dateOnly w-full flex items-center justify-center">
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
import AddBtn from "../../assets/calendar_plus_btn.svg";

export default {
  components: { ComboBox, AddBtn },
  data() {
    return {
      days: ["일", "월", "화", "수", "목", "금", "토"],
      months: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      dates: [],
      INGdates: [10],
      EDdates: [13, 16],
      currentYear: 0,
      currentMonth: 0,
      year: 0,
      month: 0,
      currentDate: new Date().getDate(),
      prevDate: [],
      previewDate: [],
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
    isINGDates(day) {
      return this.INGdates.includes(day);
    },
    isEDDates(day) {
      return this.EDdates.includes(day);
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
.today-date {
  background-image: url("data:image/svg+xml,%3Csvg width='44' height='36' viewBox='0 0 44 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.75 27.1667L15.4 29H33V13.1111L31.35 10.6667L28.6 7H11V24.1111L13.75 27.1667Z' fill='%23FFD74A'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.dateOnly {
  height: 20px;
}
.ing-dates {
  color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='44' height='37' viewBox='0 0 44 37' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d)'%3E%3Cpath d='M13.75 27.1667L15.4 29H33V13.1111L31.35 10.6667L28.6 7H11V24.1111L13.75 27.1667Z' fill='%232D2D2D'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d' x='-4' y='0' width='52' height='44' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='4'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.ed-dates {
  color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='44' height='36' viewBox='0 0 44 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.75 27.1667L15.4 29H33V13.1111L31.35 10.6667L28.6 7H11V24.1111L13.75 27.1667Z' fill='%232D2D2D'/%3E%3Crect x='39.9785' y='8.23096' width='3.60545' height='8.22838' rx='1.80272' transform='rotate(135 39.9785 8.23096)' fill='%23FFD74A'/%3E%3Crect x='34.1816' y='10.8018' width='3.60545' height='8.22838' rx='1.80272' transform='rotate(-135 34.1816 10.8018)' fill='%23FFD74A'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
