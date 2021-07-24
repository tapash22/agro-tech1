<template>
    <div class="text">
      <p>"Quality is foremost vigor"</p>
    </div>
</template>

<style scoped>
.text {
  position: fixed;
  right: 0;
  width: 50%;
  top:67px;
  margin-top: -15px;
  height: 35px;
  margin-left: 2px;
  z-index: 1;
   background: linear-gradient(
    to right,
    rgb(18, 13, 85) 0%,
    rgb(49, 27, 99) 50%,
    #fff 0%,
    #fff 50%,
    #08ce33 50%,
    #1eda0d 100%
  );
}
.text p {
  font-size: 1.2em;
  font-weight: 500;
  color: #000;
  position: absolute;
  width: 50%;
  height: 100%;
  margin: 0;
  right: 0;
  text-align: center;
  transform: translateX(100%);
  animation: text 9s linear infinite;
}

@keyframes text {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}


</style>

