<template>
  <div>
    <header />
    <div class="flex">
      <div class="login">
        <h3>Admin Login</h3>
        <input type="text" placeholder="root" />
        <input type="text" placeholder="password" />
        <div style="text-align: right;">
          <button class="btn">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  height: 200px;
  background-color: darkorange;
}
.flex {
  display: flex;
  justify-content: center;
}
.login {
  margin-top: -80px;
  text-align: center;
  color: #666;
  min-width: 200px;
  max-width: 400px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
}
.login h3 {
  padding: 20px 0px;
}
input {
  border-radius: 0px;
  margin-top: 15px;
  border: none;
  border-bottom: 1px solid #999;
}
.btn {
  padding: 10px 15px;
  border-radius: 0px;
  margin-top: 20px;
}
</style>
