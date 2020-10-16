<template>
  <div>
    <navs />
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
      <div v-if="data" style="text-align: center; color: #888;">Loading</div>
      <div class="row responsive">
        <feedCard
          v-for="derma in data"
          :key="derma.id"
          :tittle="derma.description"
          :qty="derma.quantity"
          :address="derma.location"
          :image="derma.image"
        />
      </div>
    </div>
    <foot />
  </div>
</template>

<script>
import navs from '@/components/navbar'
import foot from '@/components/foot'
import feedCard from '@/components/feedCard'
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
    navs,
    foot,
    feedCard
  },
  created() {
    this.doGetData()
  },
  methods: {
    doGetData() {
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
