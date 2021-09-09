<template>
  <div>
    <h3 style="text-align: left">课程：Linux基础操作</h3>
    <h4 style="text-align: left">实验：（3个实验/110分钟）</h4>
    <el-divider></el-divider>
    <div v-for="(lab,i) in this.$store.state.lab_list_store.lab_list" :key="i" style="text-align: left">
      <el-button type="text" @click="lab_change_handle(i)"><h3>实验{{ i + 1 }}.{{ lab.title }}</h3></el-button>
      <div>标准用时：{{ lab.uptime }}</div>
      <el-divider></el-divider>
    </div>
  </div>
</template>

<script>
export default {
  name: "Left",
  data() {
    return {
    }
  },
  methods: {
    lab_change_handle(i) {
      this.$store.commit('set_lab', this.$store.state.lab_list_store.lab_list[i])
      // console.log(this.$store.state.labs_store.lab.title)
    }
  }
}
</script>

<style scoped>

</style>