<template>
		
	<div>
		Media Player
	</div>
		
</template>

<script>


export default {

	props: {
		mediaUrls: {
			type: Array,
			default: () => {
				return ['test', 'ing']
			}
		}
	},
	
	data: () => {
		return {
			// portals
		}
	},

	mounted() {
		console.log(this.mediaUrls)
	}
}
</script>

<style scoped>
* {
	opacity: 1;
	font-size: 32px;;
}
</style>