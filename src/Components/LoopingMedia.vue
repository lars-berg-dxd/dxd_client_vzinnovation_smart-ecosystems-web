<template>
	<div class="outer">
		<!-- current image behind -->
		<div :key="currentImg" class="outer">
			<img :src="media[currentImg]" :key="currentImg">
		</div>

		<!-- animate the previous image out -->
		<transition-group tag="div" class="img-slider" name="slide">
			<div :key="currentImg" class="outer">
				<img :src="media[currentImg]" :key="currentImg">
			</div>
		</transition-group>
	</div>
</template>

<script>
	import stockPaths from '../stockPaths.js'
	export default {
		props: {
			media: {
				type: Array,
				default: () => stockPaths
			}
		},

		data() {
			return {
				currentImg: 0
			}
		},

		mounted () {
			setInterval( ()=> {
				this.advance()
			}, 1500 + Math.random() * 3000)
		},

		methods: {
			advance(e) {
				this.currentImg = (this.currentImg + 1) % this.media.length
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
	background: lightcoral;
	overflow: hidden;
	display: flex;
	justify-content: center;
}


img {
	min-height: 100%;
	min-width: 100%;
	object-fit: cover;
	pointer-events: none;
}

.slide-leave-active,
.slide-enter-active {
	transition: 1.125s ease-out;
}
.slide-enter {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(100%);
}

</style>