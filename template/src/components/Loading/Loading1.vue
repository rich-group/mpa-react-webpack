<template>
  <div class="loading1" />
</template>

<style>
.loading1 {
  width: 20px;
  height: 20px;
  border: 2.5px solid #000;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-radius: 100%;
  animation: circle infinite 0.75s linear;
}

@keyframes circle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>