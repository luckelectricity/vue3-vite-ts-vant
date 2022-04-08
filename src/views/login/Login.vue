<script setup lang="ts">
import { ref } from "vue";
const username = ref<string>("");
const password = ref<string>("");

const onSubmit = (values: object) => {
  console.log("submit", values);
};

const onClickLeft = () => {
  history.back();
};
</script>

<template>
  <div class="login">
    <van-nav-bar
      title="登陆"
      left-arrow
      @click-left="onClickLeft"
      class="title"
    />
    <div class="form">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<style scoped lang="less">
.login {
  height: 100vh;
  flex-direction: column;
  display: flex;

  .title {
    height: 46px;
    width: 100%;
  }
  .form {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
