<template>
  <div>
    <el-row style="text-align: left">
      <el-col :span="6"><i class="el-icon-document"></i> 课题：{{ $store.state.lab_store.lab.title }}</el-col>
      <el-col :span="6"><i class="el-icon-user"></i> 模式：{{ $store.state.lab_store.lab.mode }}</el-col>
      <el-col :span="6"><i class="el-icon-odometer"></i> 难度：{{ $store.state.lab_store.lab.difficulty }}</el-col>
      <el-col :span="6"><i class="el-icon-time"></i> 用时：{{ $store.state.lab_store.lab.uptime }}分钟</el-col>
    </el-row>
    <el-row>
      <el-button @click="get_guacamola">Guacamole</el-button>
    </el-row>
    <el-row>
      <div>
        <component :is="current_component"></component>
      </div>
    </el-row>
  </div>
</template>

<script>
import Lab1 from "./Lab1"
import Lab2 from "./Lab2";

export default {
  name: "Labs",
  data() {
    return {
      Labs: [Lab1, Lab2],
      current_component: Lab1,
    }
  },
  methods: {
    get_guacamola() {
      return this.current_component=this.Labs[1]
    }
  },
  created() {
    console.log(this.$store.state.lab_list_store.lab_list[0])
    this.$store.commit('set_lab', this.$store.state.lab_list_store.lab_list[0])
  }
}
</script>

<style scoped>

</style>