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

    <div class="slideshow thumbnail">
      <LoopingMedia 
        :media="getRandomMedia()">
      </LoopingMedia>
    </div>

    <h1 class="debug-frame-label">Attract</h1>
  </div>
</template>

<script>
import {randInt} from '../utils'
import stockPaths from '../stockPaths.js'
import LoopingMedia from './LoopingMedia'
import thumbPositions from './AttractThumbPositions'

export default {
  
  components: {
    LoopingMedia
  },
  
  props: ["content"],
  
  data: () => {
    return {
      thumbPositions
    };
  },

  computed: {
    title() {
      return this.content.Attract.title;
    },
    subtitle() {
      return this.content.Attract.subtitle;
    },
    titleMain() {
      return this.content.Attract.title.split(" ").slice(0, -1).join(" ");
    },
    titleAccent() {
      return this.content.Attract.title.split(" ").slice(-1)[0];
    },
    subtitle() {
      return this.content.Attract.subtitle;
    },
    mission() {
      return this.content.Attract.prompt
    }
  },

  mounted() {
    // console.log(this.content.Attract);
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
  top: 317px;
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
  top: 547px;
  width: 508px;
  height: 180px;
  font-family: NHaasGroteskTXStd-75Bd;
  font-size: 36px;
  color: #ffffff;
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
