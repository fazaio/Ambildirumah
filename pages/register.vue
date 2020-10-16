<template>
  <div class="container">
    <div class="row">
      <div>animasi</div>
      <div>
        <div class="form">
          <h3 class="orange">Selamat datang</h3>
          <span style="margin-bottom: 30px;">
            Silahkan login menggunakan
            <br />nomor <b style="color: #4ac959;">Whatsapp</b> terlebih dahulu
            sebelum melanjutkan!
          </span>
          <span>Nama</span>
          <input name="name" type="text" placeholder="Nama lengkap" />
          <span>Nomor Whatsapp</span>
          <input hpone="phone" type="text" placeholder="+62" />
          <div class="left">
            <button class="btn">Daftar</button>
          </div>
        </div>
        <div class="center">
          Sudah punya akun?
          <span class="orange">
            <nuxt-link to="/">Login disini.</nuxt-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.row {
  margin-top: 150px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.form {
  text-align: left;
  padding: 20px 10px;
  border-radius: 5px;
  /* background-color: #333; */
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
}
.form > span {
  font-size: 12px;
  display: block;
  padding: 5px 0px;
  margin: 5px 0px;
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
</style>
