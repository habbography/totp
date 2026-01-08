<script lang="ts">
	import { validateCode } from '$lib/totp';

	let username = '';
	let code = '';
	let isValid = false;
	let showValidation = false;

	function handleValidate() {
		if (!username || !code) {
			return;
		}
		isValid = validateCode(username, Number(code));
		showValidation = true;
	}
</script>

<main>
	<h1 class="text-4xl font-bold">Habbotales TOTP</h1>
	<input type="text" placeholder="Username" bind:value={username} />
	<input type="number" placeholder="Code" bind:value={code} />
	<button on:click={handleValidate} class="bg-black px-4 py-2 font-light text-white"
		>Validate</button
	>
	{#if showValidation}
		{#if isValid}
			<p class="text-green-500">Code is valid!</p>
		{:else}
			<p class="text-red-500">Code is invalid.</p>
		{/if}
	{/if}
</main>
