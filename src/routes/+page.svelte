<script lang="ts">
	import type { PageData } from "./$types";
	import { currentUser } from "$lib/pocketbase";
	import StrikesDisplay from "$lib/components/StrikesDisplay.svelte";
	import CreditsDisplay from "$lib/components/CreditsDisplay.svelte";
	import SignedUpEventsDisplay from "$lib/components/SignedUpEventsDisplay.svelte";
	import FAQ from "$lib/components/FAQ.svelte";
	import PWAInstall from "$lib/components/PWAInstall.svelte";
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import { invalidateAll } from "$app/navigation";

	export let data: PageData;

	onMount(() => {
		if (browser) {
			// Always reload data on homepage load to ensure fresh hours data
			invalidateAll();
		}
	});
</script>

<main class="container mx-auto p-4 md:p-8 space-y-8">
	{#if $currentUser && !$currentUser.is_tutee}
		<hgroup>
			<h1 class="h1">Hello{$currentUser ? `, ${$currentUser.name}` : ""}! View your credits.</h1>
		</hgroup>

		{#if data.credits !== undefined}
			<CreditsDisplay credits={data.credits} user={$currentUser} />
		{/if}
	{:else}
		<hgroup>
			<h1 class="h1">Welcome to Amherst ScholarBridge{$currentUser ? `, ${$currentUser.name}` : ""}.</h1>
			<p class="h3">
				Request academic support through individual tutoring
				<a class="anchor" href="/tutoring">here</a>.
			</p>
		</hgroup>
	{/if}
	{#if !$currentUser}
		<h3 class="h3">
			You aren't logged in.
			<a class="anchor" href="/login">Login</a> or <a class="anchor" href="/register">Register</a>.
		</h3>
	{/if}
</main>
