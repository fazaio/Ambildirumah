<template>
  <div>
    <Navbar />
    <div class="carousel">
      <img class="image" src="@/assets/img/landing.jpg" alt />
      <div class="carousel-tag">
        <div class="p">
          <h1>
            Waktunya Bederma
            <span style="color: darkorange;">.</span>
          </h1>
          <h3>Ayo berbagi!</h3>
          , Dimasa pandemi sekarang banyak yang membutuhkan loh!, Barangmu
          nganggur? dijual galaku? apa salahnya dibagikan.
          <button>Gabung Sekarang</button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="find">
        <input type="text" placeholder="Cari " />
      </div>
      <div class="category">
        <h3>Kategori</h3>
        <div class="category-flex">
          <div class="flex-btn">
            <div class="left">Pangan</div>
            <div class="right">
              <font-awesome-icon icon="hamburger" />
            </div>
          </div>
          <div class="flex-btn">
            <div class="left">Sandang</div>
            <div class="right">
              <font-awesome-icon icon="tshirt" />
            </div>
          </div>
          <div class="flex-btn">
            <div class="left">Elektronik</div>
            <div class="right">
              <font-awesome-icon icon="tv" />
            </div>
          </div>
        </div>
      </div>
      <div class="row responsive">
        <div class="card">
          <img src="https://picsum.photos/id/237/150/150" alt />
          <div class="info">
            <span> <font-awesome-icon icon="user" />@fazaio </span>
            <div class="tittle">Nasi Goreng</div>
            <div class="qty">Jumlah: 14</div>
            <div class="address">JL Pelabuhan Bakayaro ketapanga, Malang</div>
            <div class="footer">
              <button class="btn">
                <font-awesome-icon :icon="['far', 'heart']" />
              </button>
              <button class="btn">Ambil</button>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="https://picsum.photos/id/237/150/150" alt />
          <div class="info">
            <span> <font-awesome-icon icon="user" />@fazaio </span>
            <div class="tittle">Nasi Goreng</div>
            <div class="qty">Jumlah: 14</div>
            <div class="address">JL Pelabuhan Bakayaro ketapanga, Malang</div>
            <div class="footer">
              <button class="btn">
                <font-awesome-icon :icon="['far', 'heart']" />
              </button>
              <button class="btn">Ambil</button>
            </div>
          </div>
        </div>
        <div class="card">
          <div v-if="loading">
            loading
          </div>
          {{ data }}
          {{ response }}
          <button class="btn" @click="doChange()">
            change
          </button>
        </div>
      </div>
    </div>
    <foot />
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import foot from '@/components/foot'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      debug: ''
    }
  },
  computed: mapGetters({
    response: 'response/response',
    loading: 'response/loading',
    data: 'derma/data'
  }),
  // eslint-disable-next-line vue/order-in-components
  components: {
    Navbar,
    foot
  },
  methods: {
    doChange() {
      this.$store.dispatch('derma/getData')
    }
  }
}
</script>
<style scoped>
.padding {
  padding: 10px;
}
.image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  filter: grayscale(40%);
}
.carousel {
  position: relative;
  z-index: -1;
}
.carousel-tag {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.carousel-tag > .p {
  inset: unset;
  color: white;
  text-align: center;
  padding: 10px;
  /* opacity: 0.8; */
  /* background-color: black; */
}
.carousel-tag > .p > h3 {
  display: inline;
}
.carousel-tag > .p > button {
  display: inline-block;
  padding: 10px;
  border: none;
  background-color: darkorange;
  border-radius: 5px;
  color: white;
  opacity: 0.8;
  font-weight: bold;
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
  margin: 10px 0px;
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
.card > .info > span {
  position: absolute;
  bottom: 6px;
  font-size: 12px;
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

.card > .info > .footer > :first-child {
  background-color: #fff;
  color: darkorange;
}

/* coloumn css */
.row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-bottom: 200px;
}
.find {
  padding: 30px 10px;
  border-radius: 5px;
  font-size: 12px;
  color: #888;
  margin-top: -50px;
  background-color: #fff;
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
}
.find > input {
  width: 100%;
  /* border: none; */
}
.category-flex {
  display: flex;
  overflow: hidden;
  margin: 0 -15px 80px -15px;
}
.category-flex > div {
  margin: 0px 15px;
}
.category > h3 {
  color: #999;
  display: block;
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: normal;
}
.flex-btn {
  display: flex;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
}
.flex-btn > .left {
  text-align: center;
  /* width: 80px; */
  padding: 13px 25px;
  background-color: #ffae46;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: white;
}
.flex-btn > .right {
  padding: 13px;
  background-color: darkorange;
  color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  /* font-size: 20px; */
}
.left:hover {
  background-color: darkorange;
  transition-duration: 1s;
}
</style>
