<script lang="ts">
    let { comandas, onSeleccionar, idChefActual = 8 } = $props();
</script>

<section class="flex flex-col gap-4 overflow-y-auto card p-4 bg-surface-800/50 border border-primary-500/20 h-full">
    <header class="flex justify-between items-center border-b border-primary-500/30 pb-2">
        <h3 class="h3 text-primary-500 font-bold uppercase tracking-widest">🔥 En Marcha</h3>
        <span class="badge variant-filled-primary">{comandas.length}</span>
    </header>

    {#each comandas as comanda (comanda.idComanda)}
        <button 
            onclick={() => onSeleccionar(comanda.idComanda)}
            class="card p-5 variant-soft-primary border-l-4 border-l-primary-500 hover:bg-surface-700 transition-all text-left"
        >
            <div class="flex justify-between items-center mb-3">
                <span class="text-2xl font-black">#{comanda.idComanda}</span>
                {#if comanda.productos.some((p: any) => p.idCocinero === idChefActual)}
                    <span class="badge variant-filled-primary text-[10px] animate-bounce">MI COMANDA</span>
                {/if}
            </div>

            <div class="space-y-1">
                <div class="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div class="h-full bg-primary-500 transition-all duration-700" style="width: {comanda.stats.porcentaje}%"></div>
                </div>
                <p class="text-[10px] opacity-70 italic">{comanda.stats.lineasFinalizadas} de {comanda.stats.totalLineas} listos</p>
            </div>
        </button>
    {/each}
</section>