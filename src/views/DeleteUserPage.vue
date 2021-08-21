<template>
  <v-app>
    <Header :theme="this.theme"></Header>
    <div class="pt-28 px-20 h-screen bg-bg">
      <div v-for="mem in members" :key="mem.uid">
        <div class="flex flex-row">
          <div v-if="mem.isHost">Host</div>
          <div>{{ mem.nick }}</div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
// import axios from "axios";
import MemberService from "../api/Room/services/member.service";
import Header from "../components/Headers/DeleteUserHeader.vue";

export default {
  data() {
    return {
      theme: "",
      isAlertShow: false,
      name: "",
      date: "",
      roomId: this.$route.params.id,
      members: [],
    };
  },
  components: {
    Header,
  },
  methods: {},
  async created() {
    await MemberService.GetMembersList(this.roomId).then((res) => {
      console.log("res.data:", res.data.rows);
      res.data.rows.forEach((element) => {
        console.log(element.User);
        this.members.push({ uid: element.User.id, nick: element.User.nick, isHost: element.admin });
      });
    });
  },
};
</script>
