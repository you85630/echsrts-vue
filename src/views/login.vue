<template>
  <div class="login">
    <div class="headline">{{siteName}}</div>
    <Card dis-hover class="card">
      <p class="title" slot="title">用户登录</p>
      <Form class="form" ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="请填写用户名">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="请填写密码">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem class="last">
              <Button type="primary" long @click="handleSubmit('formInline')">登录</Button>
              <p class="err" v-if="errMsg">{{errMsg}}</p>
          </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      siteName: '郑州市基础教育质量监测分析平台',
      formInline: {},
      ruleInline: {
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码.', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'errMsg'
    ])
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.login(this.formInline)
        }
      })
    },
    ...mapActions([
      'login'
    ])
  }
}
</script>

<style lang="scss" scoped>
.login{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #001529;
}
.headline{
  font-size: 40px;
  margin-bottom: 40px;
  color: #fff;
  text-align: center;
}
.card{
  width: 420px;
  .title{
    text-align: center;
    font-size: 16px;
  }
  .form{
    padding: 20px 80px;
    .last{
      margin-bottom: 0;
      .err{
        color:#ed4014;
        text-align: center;
      }
    }
  }
}
</style>
