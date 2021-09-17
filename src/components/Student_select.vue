<template>
  <div>
    <el-row>
      <h4 style="text-align: left">班级：{{ this.$store.state.student_list_store.clazz.clazz_num }}</h4>
      <h4 style="text-align: left">参训学员：{{ get_student_num }}</h4>
    </el-row>
    <div v-for="(student ,i) in this.$store.state.student_list_store.clazz.students" :key="i" style="text-align: left">
      <div>
        <el-checkbox>{{ i }}</el-checkbox>
        .{{ student.student_name }}
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Student_list",
  data() {
    return {
      checked_students: []
    }
  },
  computed: {
    ...mapGetters({get_student_num: 'get_student_num'})
  },
  methods: {
    handleCheckedStudentsChange() {

    }
  }
}
</script>

<style scoped>
.el-button {
}
</style>