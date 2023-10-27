<template>
  <div class="loading2">
    <div class="loading2-inner" />
  </div>
</template>

<style>
.loading2 {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-image: conic-gradient(rgba(32, 32, 32, 0.1), rgba(32, 32, 32, 1));
  animation: turn-around 1.5s linear infinite;
}

.loading2-inner {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
}

@keyframes turn-around {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>