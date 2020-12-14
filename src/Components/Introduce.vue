<template>
  <div>

    <div class="thumb-container">
      <div v-for="(item, index) in thumbPositions"
        :key="index"
        class="thumbnail"
        :style="item">
        <LoopingMedia 
          :media="getRandomMedia()">
        </LoopingMedia>
      </div>
    </div>

    <div class="title-container">
      <div class="mission">{{mission}}</div>
      <div class="title-main">{{ titleMain }}</div>
      <div class="title-accent">
        <div class="accent"></div>
        <div>{{ titleAccent }}</div>
      </div>
    </div>

    <div class="subtitle">{{ subtitle }}</div>

    <div class="persona-outer">
      <div v-for="(item, key) in personas"
        :key="key"
        class="persona" >
          <div class="persona-media">
            <LoopingMedia 
              :media="getRandomMedia()">
            </LoopingMedia>
          </div>
          <div class="persona-label">
            <img :src="item.icon" alt="">
            <div style="padding-top: 8px;">{{key}}</div>
          </div>
          <div class="persona-description">{{ item.description }}</div>
      </div>  
    </div>

    <h1 class="debug-frame-label">INTRODUCE</h1>
  </div>
</template>

<script>
import {randInt} from '../utils'
import stockPaths from '../stockPaths.js'
import LoopingMedia from './LoopingMedia'

const introduceThumbnails = [
  {
    left: "3837px",
    top: "916px",
    width: "295px",
    height: "164px",
  },
  {
    left: "3647px",
    top: "443px",
    width: "186px",
    height: "105px",
    opacity: "20%",
  },
  {
    left: "3833px", 
    top: "84px", 
    width: "295px",
    height: "167px",
    opacity: "6%",
  },
  {
    left: "3277px", 
    top: "1px", 
    width: "185px",
    height: "105px",
    opacity: "60%",
  },
  {
    left: "1657px",
    top: "978px",
    width: "185px",
    height: "102px",
    opacity: "20%",
  }
]



export default {
  
  components: {
    LoopingMedia
  },
  
  props: ["content"],
  
  data: () => {
    return {
      thumbPositions: introduceThumbnails
    };
  },

  computed: {
    title() {
      return this.content.Introduce.title;
    },
    subtitle() {
      return this.content.Introduce.subtitle;
    },
    titleMain() {
      return this.content.Introduce.title.split(" ").slice(0, -1).join(" ");
    },
    titleAccent() {
      return this.content.Introduce.title.split(" ").slice(-1)[0];
    },
    subtitle() {
      return this.content.Introduce.subtitle;
    },
    personas() {
      return this.content.Introduce.personas
    },
    mission() {
      return this.content.Introduce.prompt
    }
  },

  mounted() {
    console.log(this.content, this.personas);
  },

  methods: {
    getRandomMedia() {
      const i = randInt(0,stockPaths.length - 6)
      return stockPaths.slice(i, i+5)
    }
  },
};
</script>

<style scoped>
.thumbnail {
  position: absolute;
  background: aquamarine;
  box-shadow: 0 0 100px #000000af;
}

.slideshow {
  position: absolute;
  left: 2884px;
  top: 0px;
  width: 646px;
  height: 431px;
  background: aquamarine;
}

.title-container {
  position: absolute;
  left: 1945px;
  top: 204px;
  padding: 3px 234px 187px 2px;
  font-family: NHaasGroteskTXStd-75Bd;
  font-size: 160px;
  line-height: 173px;
}

.title-main {
  width: 690px;
}

.title-accent {
  position: relative;
  color: var(--VerizonRed);
  display: flex;
  flex-direction: row;
  transform: translateX(-618px);
}

.subtitle {
  position: absolute;
  left: 2884px;
  top: 293px;
  width: 508px;
  /* height: 180px; */
  font-family: NHaasGroteskTXStd-75Bd;
  font-size: 36px;
  color: #ffffff;
  transition: 3s;
}

@keyframes accent-in {
  0% {
    width: 0;
  }

  100% {
    width: 618px;
  }
}

.accent {
  width: 0;
  margin-right: 32px;
  background: var(--VerizonRed);
  height: 168px;
  animation: accent-in 1.5s ease-out forwards;
}

.persona-outer {
  position: absolute;
  left: 1821px;
  top: 579px;
  width: 1980px;
  height: calc(1080px - 579px);
  display: flex;
  justify-content: space-between;
}
.persona {
  position: relative;
  width: 447px;
  height: 100%;
  background: black;
}
.persona-media {
  position: relative;
  height: 253px;
}
.persona-description {
  margin-left: 67px;
  /* margin: 7px 148px 0 26px; */
  opacity: 0.5;
  font-family: NHaasGroteskTXStd-55Rg;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: normal;
  color: #ffffff;
}

.persona-label {
  margin-top: 38px;
  /* margin: 38px 326px 7px 27px; */
  font-family: SpaceMono;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
}
.persona-label img {
  margin-right: 27px;
}

@keyframes fadein {
  0% {
    opacity: 0;
    transform: translate(-100%, -100%);
  }

  100% {
    opacity: 1;
    transform: translate(0, -100%);
  }
}

.mission {
  font-family: SpaceMono;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
  position: absolute;
  transform: translateY(-100%);
  animation: fadein 1.5s ease-out forwards;
}
</style>
