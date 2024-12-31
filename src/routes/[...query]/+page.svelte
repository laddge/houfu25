<script lang="ts">
  import type { PageData } from './$types'
  import { onMount } from 'svelte'

  let data: PageData = $props()
  let bg: string = $state('0')
  let name: string = $state('名前')
  let text: string = $state('2025年の抱負')
  let query: string = $derived(`${bg}-${btoa(encodeURIComponent(name))}-${btoa(encodeURIComponent(text))}`)

  onMount(() => {
    window.history.replaceState({},'', '/')
  })
</script>

<svelte:head>
  <title>2025年の抱負</title>
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`https://2025.laddge.net/${data.query}`} />
  <meta property="og:title" content="2025年の抱負" />
  <meta property="og:image" content={`https://2025.laddge.net/${data.query}.png`} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@laddge_" />
</svelte:head>

<div class="grid gap-4">
  <img src={`/${query}.png`} alt="generated image" class="rounded" />
  <label>
    背景
    <div class="p-2 grid grid-cols-8 gap-4">
      {#each ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'] as id}
        <input type="radio" id={`bg${id}`} name="bg" value={id} bind:group={bg} class="hidden" />
        <label for={`bg${id}`} class="cursor-pointer rounded overflow-hidden">
          <img src={`/images/bg${id}.png`} alt={`bg${id}`} />
        </label>
      {/each}
    </div>
  </label>
  <label>
    名前
    <input bind:value={name} placeholder="名前" class="input input-bordered w-full" />
  </label>
  <label>
    抱負
    <input bind:value={text} placeholder="2025年の抱負" class="input input-bordered w-full" />
  </label>
  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(name + 'の抱負は「' + text +'」')}&hashtags=${encodeURIComponent('2025年の抱負')}&via=laddge_&url=${encodeURIComponent('https://2025.laddge.net/' + query)}`} target="_blank">
    <button class="btn btn-primary w-full">Tweet</button>
  </a>
</div>

<style>
  input[type=radio]:checked + label {
    @apply ring ring-primary ring-offset-2 ring-offset-base-100;
  }
</style>
