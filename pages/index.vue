<template>
  <div>
    <Navbar />
    <div class="carousel">
      <img class="image" src="https://picsum.photos/seed/picsum/1080/600" alt />
      <div class="carousel-tag">
        <h1 style="color: #fe5719;">Some content</h1>
      </div>
    </div>
    <div class="container" style="margin-top: 100px; margin-bottom: 100px;">
      <div class="row">
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
      </div>
    </div>
    <foot />
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import { Glide, GlideSlide } from 'vue-glide-js'
import foot from '@/components/foot'

export default {
  components: {
    Navbar,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
    foot
  }
}
</script>
<style>
.image {
  width: 100%;
  height: 350px;
}
.carousel {
  width: 100%;
  /* height: 500px; */
  position: relative;
}
.carousel-tag {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.search {
  padding: 20px 25px;
  border-radius: 5px;
  background-color: #fff;
  width: 800px;
}

/* card css */
.card {
  padding: 0px;
  margin: 0px;
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

/* coloumn css */
.row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 50px;
}
</style>
