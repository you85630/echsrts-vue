<template>
  <div class="login">
    <Card dis-hover class="card">
      <p class="title" slot="title">{{siteName}}</p>
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
    <Spin size="large" fix v-if="status"></Spin>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      siteName: 'IVIEW-DEMO',
      formInline: {
        user: 'admin',
        password: '123456'
      },
      ruleInline: {
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码.', trigger: 'blur' },
          { type: 'string', min: 1, message: '密码长度不能小于6位', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'status',
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
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #001529;
  }
.card{
  margin-top: -120px;
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
