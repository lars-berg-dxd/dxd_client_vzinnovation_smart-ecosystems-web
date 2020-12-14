<template>
	<div class="outer" @click="handleClick">

		<div style="display:none;">

      <video id="video" src="../../static/debug.mp4" loop muted="true" autoplay crossorigin="anonymous"/>
			<img id="source" src="../../static/debug.jpg">
		</div>

		<div v-for="(p, index) in tilePositions" :key="index"
		class="tile"
		:style="{left: p[0]+'px', top: p[1]+'px'}">
		</div>

      <canvas id="c2" :width="canvasWidth" :height="canvasHeight"></canvas>


	</div>
</template>

<script>
	import webglLayer from './tiles_webgl'
	import CanvasOverlay from './CanvasOverlay'

	console.log({webglLayer})

	export default {
		props: {
			tilePositions: {
				type: Array
			},
			canvasWidth: {
				type: Number,
				default: 39
			},
			canvasHeight: {
				type: Number,
				default: 14
			}
		},

		data() {
			return {
				canvasOverlay: null
			}
		},

		mounted(){ 
			const canvas = this.$el.querySelector('#c2')
			const image = document.getElementById('source');
			const video = document.getElementById('video');
			this.canvasOverlay = new CanvasOverlay(canvas, {
				video,
			})

			this.canvasOverlay.play()
			
		},

		methods: {
			handleClick() {
				this.canvasOverlay.incGCO()
			}
		},
	}
</script>

<style lang="scss" scoped>
.outer{ 
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}
.tile {
	position: absolute;
	width: 192px;
	height: 108px;
	outline: 4px solid white;
	background: rgb(0, 0, 0);
}

#c2 {
	position: absolute;
    image-rendering: pixelated;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: clear;
	
	
}


</style>


