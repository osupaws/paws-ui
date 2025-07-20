<script setup lang="ts">
import PawsButton from "./components/PawsButton/PawsButton.vue";
import PawsInput from "./components/PawsInput/PawsInput.vue";
import MultiSwitch from "./components/MultiSwitch/MultiSwitch.vue";
</script>

<template>
	<div class="container">
		<h1>Paws UI Kit</h1>
		<div class="component-section">
			<h2>PawsButton</h2>
			<PawsButton label="Primary Button" variant="primary" />
			<PawsButton label="Secondary Button" variant="secondary" />
		</div>
		<div class="component-section">
			<h2>PawsInput</h2>
			<PawsInput placeholder="Enter text here..." />
		</div>
		<div class="component-section">
			<h2>MultiSwitch</h2>
			<MultiSwitch :options="['settings', 'window']" model-value="window" />
		</div>
	</div>
</template>

<style scoped>
.container {
	padding: 2rem;
}

.component-section {
	margin-bottom: 2rem;
}
</style>