<template>
  <div class="row">
    <div class="text">
      <p>"Agrotech Global BD Nutrition পক্ষ থেকে সবাই কে জানাই ঈদুল আযহা শুভেচ্ছা"</p>
    </div>
  </div>
</template>

<style scoped>
.row {
  position: fixed;
  right: 0;
  width: 60%;
  margin-top: -15px;
  height: 35px;
  background: rgb(3, 77, 7);
  margin-left: 2px;
  z-index: 1;
}
.text {
  position: relative;
  overflow: hidden;
  border-right: 1px solid #fff;
  padding: 5px;
}
.text p {
  font-size: 1.2em;
  font-weight: 500;
  color: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  text-align: center;
  transform: translateX(100%);
  animation: text 10s linear infinite;
}
.details {
    display:none;
}

@keyframes text {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@media only screen and (max-width: 767px) {
  .row {
  position: fixed;
  width: 100%;
  height: 100px;
  background: rgb(3, 77, 7);
  z-index: 1;
}
  .details {
   display: none;
  }
}

</style>