<template>
    <div class="localTest">
        <head-top go-back='true' :head-title="testtitle"></head-top>
        <div class="testFunc">
          <div>{{getContent + "*****" + content}}</div>
          <div>{{getCount}}*****{{count}}</div>
          <div>{{evenOrOdd === "even" ? "偶数" : "奇数"}}</div>
        </div>
        <foot-guide></foot-guide>
    </div>
</template>
<script>
import headTop from "src/components/header/head";
import footGuide from "src/components/footer/footGuide";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      testtitle: "本地测试"
    };
  },
  components: {
    headTop,
    footGuide
  },
  computed: {
    ...mapState(["content", "count"]),
    ...mapGetters(["getCount", "evenOrOdd", "getContent"])
  },
  created() {},
  mounted() {
    this.refreshCount();
    this.localChangeContent();
  },
  methods: {
    ...mapMutations(["LOCAL_CHANGE_CONTENT", "LOCAL_CHANGE_COUNT"]),
    refreshCount() {
      let count = this.getCount;
      setInterval(() => {
        count++;
        this.LOCAL_CHANGE_COUNT(count);
      }, 1000);
    },
    localChangeContent() {
      this.LOCAL_CHANGE_CONTENT("vuex进行状态管理");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../style/mixin";
.testFunc {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  font-size: 0.8rem;
}
</style>


