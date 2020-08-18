<template>
  <div class="container">
    <div class="row">
      <div>animasi</div>
      <div class="form">
        <h3 class="orange">Selamat datang</h3>
        <span>Silahkan <b>login</b> terlebih dahulu sebelum melanjutkan!</span>
        <input type="text" placeholder="+62" />
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
}
.form > span {
  font-size: 12px;
  display: block;
  padding: 5px opx;
  margin: 5px 0px;
  color: #666;
  margin-bottom: 30px;
}
input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
