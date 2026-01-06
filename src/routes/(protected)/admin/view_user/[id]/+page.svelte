<script lang="ts">
	import type { PageData } from "./$types";
	import { page } from "$app/stores";
	import { enhance } from "$app/forms";
	import { superForm, formFieldProxy } from "sveltekit-superforms";
	import InputField from "$lib/components/InputField.svelte";
	import calculateTotalStrikeWeight from "$lib/calculateTotalStrikeWeight";
	import { CodeBlock, RadioGroup, RadioItem } from "@skeletonlabs/skeleton";
	import StrikesDisplay from "$lib/components/StrikesDisplay.svelte";
	import CreditsDisplay from "$lib/components/CreditsDisplay.svelte";
	import type { ExpandedCredit, CommitteesSchema, RecievedUser } from "$lib/db_types";

	let user_id = $page.params.id;
	export let data: PageData;
	const strikeFormObj = superForm(data.strikeForm);
	const creditFormObj = superForm(data.creditForm);

	const creditFormType = "tutoring";

	$: full_user = data.users.filter((v) => v.id === user_id)[0];
</script>

<main class="container mx-auto p-8 space-y-8">
	<h2 class="h2">Viewing: {full_user.name}</h2>
	<h3 class="h3">Email: {full_user.email}</h3>
	<h3 class="h3">{full_user.name} is a {full_user.is_tutee ? "tutee." : "ARISTA member."}</h3>

	{#if !full_user.is_tutee}
		<CreditsDisplay credits={full_user.credits} user={full_user} />
		<form
			class="card p-4 w-full text-token space-y-4"
			method="POST"
			action="?/credit_user"
			use:enhance
		>
			<h3 class="h3">Credit {full_user.name} for:</h3>
			<InputField
				label="Enter the # of credits: "
				placeholder="1"
				field="credits"
				form={creditFormObj}
				type="number"
				inputmode="decimal"
				step="any"
			/>
			<InputField
				label="What is this manual crediting for? Please provide an explanation."
				placeholder="Tutee mistyped credit, etc..."
				field="manualExplanation"
				form={creditFormObj}
			/>

			<button type="submit" class="btn variant-filled-secondary">Credit User</button>
		</form>
	{/if}
</main>
