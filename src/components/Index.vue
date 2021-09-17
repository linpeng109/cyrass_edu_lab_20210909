<template>
  <div>
    <el-row>
      <el-col :span="24">
        <Header></Header>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <Left></Left>
      </el-col>
      <el-col :span="12">
        <Center></Center>
      </el-col>
      <el-col :span="6">
        <Right></Right>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Center from "@/components/Center";
import Left from "@/components/Left";
import Right from "@/components/Right";

export default {
  name: "Index",
  components: {Right, Center, Left, Header},

  data() {
    return {
      lab_list: [
        {title: 'Linux命令行的进入', uptime: 30, difficulty: 1, mode: 'single'},
        {title: 'Linux命令行的执行', uptime: 40, difficulty: 1, mode: 'single'},
        {title: 'Linux服务的启动与停止', uptime: 45, difficulty: 1, mode: 'single'}
      ]
    }
  }
}
</script>

<style scoped>

</style>