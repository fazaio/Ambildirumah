<template>
  <div class="container user-grid">
    <header>
      <div>
        <img src="@/assets/img/ilustrator.png" alt />
      </div>
      <div>
        <h3>Selamat datang</h3>
        <br />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quam
          architecto repellendus illo excepturi ullam pariatur corrupti ducimus
          totam rem veritatis consequuntur tempora repellat, aperiam suscipit
          consequatur odit. Quaerat, molestias.
        </span>
      </div>
    </header>
    <content>
      <div class="upload-btn">
        <font-awesome-icon icon="upload" />Upload
        <span>* Barang gakepake? sebar kebaikanmu!</span>
        <input type="file" />
      </div>
      <p>
        Derma Anda
      </p>
      <div class="card">
        <img src="https://picsum.photos/id/237/150/150" alt />
        <div class="info">
          <div class="tittle">Nasi Goreng</div>
          <div class="qty">Jumlah: 14</div>
          <div class="address">JL Pelabuhan Bakayaro ketapanga, Malang</div>
          <div class="footer">
            <button class="btn">Ambil</button>
          </div>
        </div>
      </div>
      <div class="card">
        <img src="https://picsum.photos/id/237/150/150" alt />
        <div class="info">
          <div class="tittle">Nasi Goreng</div>
          <div class="qty">Jumlah: 14</div>
          <div class="address">JL Pelabuhan Bakayaro ketapanga, Malang</div>
          <div class="footer">
            <button class="btn">Ambil</button>
          </div>
        </div>
      </div>
      <div class="card">
        <img src="https://picsum.photos/id/237/150/150" alt />
        <div class="info">
          <div class="tittle">Nasi Goreng</div>
          <div class="qty">Jumlah: 14</div>
          <div class="address">JL Pelabuhan Bakayaro ketapanga, Malang</div>
          <div class="footer">
            <button class="btn">Ambil</button>
          </div>
        </div>
      </div>
    </content>
    <div class="user">
      <div class="profil-photo">
        <img src="https://krs.umm.ac.id/Poto/2017/201710190511004.JPG" alt />
      </div>
      <div class="profil-detail">
        <h3>{{ this.$route.params.id }}</h3>
        <div class="phone">+62 934-452-5398</div>
        <div class="total">
          Total Derma :
          <span class="badge">0</span>
        </div>
        <button>Logout</button>
      </div>
    </div>
    <footer>
      Powered By @Ranucorp.id | 2020
    </footer>
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
  grid-template-areas: 'h h' 'c a' 'f f';
  margin-top: 50px;
  grid-gap: 10px;
}
header > :first-child > img {
  width: 100px;
}
header {
  display: flex;
  grid-area: h;
  padding: 10px;
  background-color: #ffffff;
  color: #777;
  border-radius: 5px;
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
  padding: 30px 5px;
  /* background-color: #fef1e4; */
}
header > :first-child {
  width: 300px;
  text-align: center;
}
header > :nth-child(2) {
  flex: 1;
  font-size: 12px;
  padding: 20px;
}
.user {
  grid-area: a;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
  height: max-content;
}
content {
  grid-area: c;
  padding: 10px;
  /* background-color: #fefefe; */
  border-radius: 5px;
  /* box-s
  hadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2); */
}
content > p {
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #888;
}
.profil-photo {
  text-align: center;
  margin-top: 20px;
}
.profil-photo > img {
  width: 100px;
  border-radius: 50%;
}
.profil-detail {
  color: #777;
  padding: 20px 5px;
}
.profil-detail > button {
  padding: 10px;
  margin-top: 20px;
  display: block;
  font-size: 12px;
  border: none;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
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

.card {
  padding: 0px;
  margin: 20px 0px;
  background-color: #fff;
  color: #888;
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
  display: grid;
  grid-template-columns: 150px auto;
  grid-gap: 0px;
  border-radius: 5px;
}

.card > img {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  z-index: 1;
  background-color: #ffe3c7;
}
.card > .info {
  padding: 10px;
  position: relative;
}
.card > .info > .tittle {
  color: #444;
  font-size: 15px;
  font-weight: bold;
}
.card > .info > .qty {
  padding: 5px 0px;
  font-size: 13px;
}
.card > .info > .address {
  /* position: absolute; */
  padding: 5px 0px;
  font-size: 12px;
  /* bottom: 0px; */
}
.card > .info > .footer {
  position: absolute;
  bottom: 6px;
  right: 6px;
  /* padding: 10px 0px; */
  text-align: right;
  font-size: 13px;
  border-bottom-right-radius: 5px;
}

footer {
  grid-area: f;
  color: #999;
  font-size: 10px;
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: center;
}
</style>
