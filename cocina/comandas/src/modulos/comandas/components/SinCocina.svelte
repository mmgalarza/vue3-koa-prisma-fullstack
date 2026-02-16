<script lang="ts">
    import { fade } from 'svelte/transition';
    let { comandas, onSeleccionar } = $props();
</script>

<section class="flex flex-col gap-4 overflow-y-auto card p-4 bg-error-900/10 border border-error-500/30 h-full">
    <header class="flex justify-between items-center border-b border-error-500/30 pb-2">
        <h3 class="h3 text-error-500 font-black uppercase tracking-tighter">🚨 Sin Cocina</h3>
        <span class="badge variant-filled-error animate-pulse text-lg">{comandas.length}</span>
    </header>

    {#each comandas as comanda (comanda.idComanda)}
        <button 
            onclick={() => onSeleccionar(comanda.idComanda)}
            class="card p-4 variant-filled-error border-2 border-white/20 hover:scale-[1.02] transition-all text-left relative overflow-hidden"
        >
            <div class="flex justify-between items-start relative z-10">
                <span class="text-3xl font-black italic">#{comanda.idComanda}</span>
                <span class="text-[10px] font-bold bg-black/40 px-2 py-1 rounded">ESPERANDO</span>
            </div>
            <div class="mt-4">
                <p class="text-xs uppercase font-bold opacity-80">Items desatendidos</p>
                <p class="text-xl font-black">{comanda.stats.lineasSinCocinero} / {comanda.stats.totalLineas}</p>
            </div>
        </button>
    {/each}
</section>