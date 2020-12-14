<template>
  <div>
    <h1 class="debug-frame-label">Explore</h1>

    <div class="thumb-container">
      <div v-for="(item, index) in storyThumbs"
      @click="handleStoryClick"
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

  </div>
</template>

<script>
import {randInt, randFloat} from '../utils'
import { Story, Chapter } from "../Story";
import storyThumbs from "../storyThumbs";
import LoopingMedia from './LoopingMedia'
import stockPaths from '../stockPaths'




// import imgPaths from '../../static/stock_512/*.jpg'
// console.log(imgPaths)

export default {

  props: ["content"],

  components: {
    LoopingMedia
  },

  data: () => {
    return {
      storyThumbs,
    };
  },

  computed: {
    title() {
      return this.content.Explore.title;
    },
    subtitle() {
      return this.content.Explore.subtitle;
    },
    titleMain() {
      return this.content.Explore.title.split(" ").slice(0, -1).join(" ");
    },
    titleAccent() {
      return this.content.Explore.title.split(" ").slice(-1)[0];
    },
    subtitle() {
      return this.content.Explore.subtitle;
    },
    mission() {
      return  this.content.Explore.prompt
    }
  },

  mounted() {
    console.log(this.content.Explore);
  },

  methods: {
    getRandomImagePath() {
      return stockPaths[randInt(0, stockPaths.length-1)]
    },
    handleStoryClick(event, ...args) {
      console.log(event.type, event)
    },
    getRandomMedia() {
      const i = randInt(0,stockPaths.length - 6)
      return stockPaths.slice(i, i+5)
    }
  }
};
</script>

<style scoped>
.story-thumb {
  position: absolute;
  width: 147px;
  height: 83px;
}

.slideshow {
  position: absolute;
  left: 2884px;
  top: 0px;
  width: 646px;
  height: 431px;
  background: aquamarine;
}

.thumbnail {
  position: absolute;
  background: aquamarine;
  user-select: none;
  /* box-shadow: 0 0 100px #000000af; */
}

.thumbnail:hover {
	outline: #ffffff44 4px solid;
}
.thumbnail:active {
	outline: var(--VerizonRed) 4px solid;
}

.title-container {
  position: absolute;
  left: 1945px;
  top: 205px;
  padding: 3px 234px 187px 2px;
  font-family: NHaasGroteskTXStd-75Bd;
  font-size: 160px;
  line-height: 173px;
}

.title-main {
  width: 880px;
}

.title-accent {
  position: relative;
  color: var(--VerizonRed);
  display: flex;
  flex-direction: row;
  transform: translateX(0);
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
  transform: translate(-100%, 0);
  opacity: 1;
  animation: fadein 1.5s ease-out forwards;
}
</style>
