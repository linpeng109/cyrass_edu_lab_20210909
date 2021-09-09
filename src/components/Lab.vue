<template>
  <div>
    <el-row style="text-align: left">
      <el-col :span="6"><i class="el-icon-document"></i> {{ $store.state.lab_store.lab.title }}</el-col>
      <el-col :span="6"><i class="el-icon-user"></i> 模式：{{ $store.state.lab_store.lab.mode }}</el-col>
      <el-col :span="6"><i class="el-icon-odometer"></i> 难度：{{ $store.state.lab_store.lab.difficulty }}</el-col>
      <el-col :span="6"><i class="el-icon-time"></i> 用时：{{ $store.state.lab_store.lab.uptime }}分钟</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Labs",
  created() {
    console.log(this.$store.state.lab_list_store.lab_list[0])
    this.$store.commit('set_lab', this.$store.state.lab_list_store.lab_list[0])
  }
}
</script>

<style scoped>

</style>