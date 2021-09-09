<template>
  <div>
    <el-row>
      <h4 style="text-align: left">班级：{{ this.$store.state.student_list_store.clazz.clazz_num }}</h4>
      <h4 style="text-align: left">参训学员：{{ get_student_num }}</h4>
    </el-row>
    <el-row>
      <div v-for="(student,i) in this.$store.state.student_list_store.clazz.students" :key="i" style="text-align: left">
        <div>机位：{{ student.host_name }}</div>
        <el-button type="text" style="font-size: large">{{ i + 1 }}.{{ student.student_name }}</el-button>
        <el-divider></el-divider>
      </div>
    </el-row>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Students",
  computed: {
    ...mapGetters('get_student_num')
  }
}
</script>

<style scoped>
.el-button {
}
</style>