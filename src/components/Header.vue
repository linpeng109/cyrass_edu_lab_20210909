<template>
  <div>
    <el-row>
      <el-col :span="2">
        <el-link icon="el-icon-d-arrow-left">返回</el-link>
      </el-col>
      <el-col :span="20">
        <h1>00:01:22</h1>
      </el-col>
      <el-col :span="2">
        <el-button>结束课程</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped>

</style>