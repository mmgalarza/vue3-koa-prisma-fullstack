<script lang="ts">
    import { fade } from 'svelte/transition';
    let { comandas } = $props();
</script>

<section class="flex flex-col gap-4 overflow-y-auto card p-4 bg-surface-800/50 border border-success-500/20 h-full">
    <header class="flex justify-between items-center border-b border-success-500/30 pb-2">
        <h3 class="h3 text-success-500 font-bold uppercase tracking-widest">✅ Listas</h3>
        <span class="badge variant-filled-success">{comandas.length}</span>
    </header>

    {#each comandas as comanda (comanda.idComanda)}
        <div in:fade class="card p-4 bg-success-500/10 border border-success-500/30 flex justify-between items-center">
            <span class="text-2xl font-black italic">#{comanda.idComanda}</span>
            <div class="bg-success-500 p-2 rounded-full text-surface-900 shadow-lg">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
            </div>
        </div>
    {/each}
</section>