<template>
  <footer>
    <div class="container">
      <div class="contact">
        <div class="left">
          <div>Beranda</div>
          <div>Tentang</div>
          <div>Kontak</div>
        </div>
        <div class="right">support@ambildirumah.com</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
footer {
  padding: 5px 0px;
  background-color: orangered;
}
.container {
  text-align: right;
  font-size: 12px;
  color: #fefefe;
}
.left {
  float: left;
}
.left > div {
  display: inline-block;
  padding: 5px;
  margin: 0px 10px;
  font-size: 14px;
}
.left > div:hover {
  cursor: pointer;
  color: white;
  background: orange;
  border-radius: 5px;
  transition: 2s;
}
.right {
  float: right;
  padding: 5px 0px;
}
.contact {
  overflow: auto;
}
</style>
