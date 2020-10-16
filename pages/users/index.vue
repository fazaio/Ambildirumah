<template>
  <div class="container">
    <div class="row">
      <div>animasi</div>
      <div>
        <div v-if="login" id="login">
          <div class="form">
            <h3 class="orange">Login</h3>
            <span>
              Selamat datang kembali.
            </span>
            <div class="input">
              <input type="text" name="email" placeholder="email" />
            </div>
            <div class="input">
              <input type="password" name="password" placeholder="password" />
            </div>
            <div class="left">
              <button class="btn">masuk</button>
            </div>
          </div>
          <div class="center">
            Belum punya akun?
            <span class="orange">
              <a href="#" @click="login = false"><i>Daftar disini.</i></a>
            </span>
          </div>
        </div>
        <div v-else id="daftar">
          <div class="form">
            <div style="text-align: center;">
              <h3 class="orange">Daftar Akun</h3>
            </div>
            <span>
              <!-- Sekecil apapun hal baik pasti akan menular. -->
            </span>
            <div class="input">
              <span><font-awesome-icon icon="envelope" /> <b>Email:</b></span>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div class="input">
              <span><font-awesome-icon icon="key" /> <b>Password</b></span>
              <input
                type="password"
                name="password"
                placeholder="Minimal 8 huruf / angka"
              />
            </div>
            <div class="input">
              <span><b>Konfirmasi Password.</b></span>
              <input
                type="password"
                name="password"
                placeholder="Di isi sama dengan password"
              />
            </div>
            <div class="left">
              <button class="btn">masuk</button>
            </div>
          </div>
          <div class="center">
            Sudah punya akun?
            <span class="orange">
              <a href="#" @click="login = true"><i>Login disini.</i></a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: true
    }
  }
}
</script>
<style scoped>
.row {
  margin-top: 150px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.form {
  text-align: left;
  padding: 20px 15px;
  border-radius: 5px;
  /* background-color: #333; */
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
}
.form span {
  font-size: 12px;
  display: block;
  padding: 5px 0px;
  color: #666;
  line-height: 18px;
}
.left {
  text-align: right;
  margin-top: 10px;
}
.center {
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  color: #666;
}
.btn {
  padding: 8px 10px;
  border-radius: 5px;
}
.input {
  padding: 10px 0px;
}
</style>
