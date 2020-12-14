<template>
	<div class="outer">
		<div v-for="(item, index) in thumbShapes" :key="index"
		class="thumb"
		:style="item">
		{{index}}
		<LoopingMedia :media="getRandomMedia()"></LoopingMedia>
		</div>
	</div>
</template>

<script>
import {randInt} from '../utils'
	import stockPaths from '../stockPaths.js'
	import LoopingMedia from './LoopingMedia'
	import thumbShapes from './sidepanelThumbs'
	export default {
		components: {
			LoopingMedia
		},
		props: ['content'],
		data() {
			return {
				thumbShapes
			}
		},

		methods: {
			getRandomMedia() {
				const i = randInt(0,stockPaths.length - 6)
				return stockPaths.slice(i, i+5)
			}
		},
	}
</script>

<style lang="scss" scoped>
.outer {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}
.thumb {
	position: absolute;
	background: mediumorchid;
	color: black;
	font-size: 64px;
}
</style>