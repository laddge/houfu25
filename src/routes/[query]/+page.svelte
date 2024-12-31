<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

<img src={`/${data.query}.png`} alt="generated image" class="mb-4" />
<div class="grid grid-cols-8 gap-4">
  <img src="/images/bg0.png" alt="bg0" />
  <img src="/images/bg1.png" alt="bg1" />
  <img src="/images/bg2.png" alt="bg2" />
  <img src="/images/bg3.png" alt="bg3" />
  <img src="/images/bg4.png" alt="bg4" />
  <img src="/images/bg5.png" alt="bg5" />
  <img src="/images/bg6.png" alt="bg6" />
  <img src="/images/bg7.png" alt="bg7" />
  <img src="/images/bg8.png" alt="bg8" />
  <img src="/images/bg9.png" alt="bg9" />
  <img src="/images/bgA.png" alt="bgA" />
  <img src="/images/bgB.png" alt="bgB" />
  <img src="/images/bgC.png" alt="bgC" />
  <img src="/images/bgD.png" alt="bgD" />
  <img src="/images/bgE.png" alt="bgE" />
  <img src="/images/bgF.png" alt="bgF" />
</div>

<style>
  img {
    @apply rounded w-full aspect-[1200/630];
  }
</style>
