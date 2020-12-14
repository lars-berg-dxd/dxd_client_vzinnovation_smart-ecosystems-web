<template>
  <div class="container">
    
    <SidePanels :content="content"></SidePanels>

    <router-view :content="content" :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import SidePanels from './Components/SidePanels'

export default {

  components: {
    SidePanels
  },

  data: () => {
    return {
      connection: null,
    };
  },

  props: {
    content: {type: Object},
    config: {type: Object},
  },

  created() {
    if (this.config.useWebsockets) {
      console.log("starting connection to websocket server");
      this.connection = new WebSocket(
        `ws://${this.config.network}:${this.config.wsport}`
      );

      this.connection.onopen = (e) => {
        console.log(e.type, e);
      };

      this.connection.onmessage = (e) => {
        this.handleWebSocketEvent(JSON.parse(e.data));
      };

      /* 
			TODO:
				- [ ] add other websockocket events (error, etc.)
				- [ ] encapuslate the WS in it's own js file
			*/
    }
  },

  mounted() {
    // console.log(this.content, this.config)
  },

  methods: {
    sendWebSocketMessage(meesage) {
      console.log("sendWebSocketMessage: ", this.connection, message);
      if (this.connection) {
        this.connection.send(meesage);
      }
    },

    handleWebSocketEvent(event) {
      switch (event.action) {
        default:
          break;
      }
    },
  },
};
</script>

<style>
.debug-frame-label {
  color: #ffffff22;
  position: absolute;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

</style>

<style scoped>
.container {
  position: relative;
  height: calc(14 * 108px);
  width: calc(39 * 192px);
  left: 0;
  top: 0;
  background: rgb(0, 0, 0);
  outline: magenta solid 1px;
}

.sidepanels {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.221);
  z-index: 0;
}




</style>
