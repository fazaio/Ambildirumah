<template>
  <div class="container user-grid">
    <header>
      <div class="profil-photo">
        <img src="https://krs.umm.ac.id/Poto/2017/201710190511004.JPG" alt />
      </div>
      <div class="profil-detail">
        <h3>Perdana Ayu danara</h3>
        <div class="phone">+62 934-452-5398</div>
        <div class="total">
          Total Derma :
          <span class="badge">0</span>
        </div>
      </div>
    </header>
    <content>
      <div class="upload-btn">
        Upload
        <span>* Barang gakepake? sebar kebaikanmu!</span>
      </div>
      <p>Derma Anda</p>
    </content>
    <activity>
      <p>Riwayat aktivitas</p>
      <div class="log">Ip : 192.151.241</div>
      <div class="log">Ip : 89.298.429</div>
    </activity>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.user-grid {
  display: grid;
  grid-template-columns: auto 200px;
  grid-template-rows: auto auto;
  grid-template-areas: 'h h' 'c a';
  margin-top: 50px;
  grid-gap: 10px;
}
header {
  display: flex;
  grid-area: h;
  padding: 10px;
  background-color: #ffffff;
  color: #777;
  border-radius: 5px;
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
  padding: 20px 5px;
}
activity {
  grid-area: a;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
  max-height: 200px;
}
content {
  grid-area: c;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
}
.profil-photo {
  width: 200px;
  text-align: center;
}
.profil-photo > img {
  width: 100px;
  border-radius: 50%;
}
.profil-detail {
  flex: 1;
  color: #777;
  padding: 20px 5px;
}
.phone {
  margin: 6px 0px 14px 0px;
  font-size: 14px;
}
.total {
  font-size: 12px;
  color: #888;
}
.badge {
  padding: 4px 5px;
  border-radius: 4px;
  background-color: darkorange;
  font-size: 10px;
  display: inline-block;
  font-weight: bold;
  color: white;
}
.log {
  padding: 10px 0px;
  color: #888;
  border-bottom: 1px solid #f1f1f1;
  font-size: 10px;
}
activity > p {
  padding: 1px;
  margin: 10px 0px;
  font-size: 12px;
}
.upload-btn {
  padding: 70px 10px;
  background-color: #fefefe;
  text-align: center;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23FF68353D' stroke-width='5' stroke-dasharray='17' stroke-dashoffset='40' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 8px;
  background-color: #fafafa;
  color: #666;
}
.upload-btn > span {
  display: block;
  font-size: 10px;
  margin-top: 5px;
  color: #999;
}
content > p {
  margin-top: 20px;
}
</style>
