
<div class="loader-wrapper">
  <div class="packman"></div>
  <div class="dots">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</div>

<style>
.loader-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;  
}

.loader-wrapper .packman::before {
  content: '';
  position: absolute;
  width: 30px;
  height: 15px;
  background-color: #EFF107;
  border-radius: 100px 100px 0 0;
  transform: translate(-50%, -50%);
  animation: pac-top 0.5s linear infinite;
  transform-origin: center bottom;
  left: 20%;
  top: 35%;
}

.loader-wrapper .packman::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 15px;
  background-color: #EFF107;
  border-radius: 0 0 100px 100px;
  transform: translate(-50%, 50%);
  animation: pac-bot 0.5s linear infinite;
  transform-origin: center top;
  left: 20%;
  top: 35%;
}

@keyframes pac-top {
  0% {
    transform: translate(-50%, -50%) rotate(0)
  }

  50% {
    transform: translate(-50%, -50%) rotate(-30deg)
  }

  100% {
    transform: translate(-50%, -50%) rotate(0)
  }
}

@keyframes pac-bot {
  0% {
    transform: translate(-50%, 50%) rotate(0)
  }

  50% {
    transform: translate(-50%, 50%) rotate(30deg)
  }

  100% {
    transform: translate(-50%, 50%) rotate(0)
  }
}

.dots {
    position: absolute;
    left: 15%;
    top: 37%;
}

.dots .dot {
  position: absolute;
  z-index: -1;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
}

.dots .dot:nth-child(1) {
  left: 90px;
  animation: dot-stage1 0.5s infinite;
}

.dots .dot:nth-child(2) {
  left: 60px;
  animation: dot-stage1 0.5s infinite;
}

.dots .dot:nth-child(3) {
  left: 30px;
  animation: dot-stage1 0.5s infinite;
}

.dots .dot:nth-child(4) {
  left: 10px;
  animation: dot-stage2 0.5s infinite;
}

@keyframes dot-stage1 {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-24px, 0);
  }
}

@keyframes dot-stage2 {
  0% {
    transform: scale(1);
  }

  5%, 100% {
    transform: scale(0);
  }
}
</style>