<script lang="ts">
    import { fade, fly, slide } from 'svelte/transition';
    import { gestorCocina } from '../store.svelte';
    // Corregido: Importamos ComandaProducto según tu esquema Zod
    import type { Comanda, ComandaProducto } from '../schema.zod.2';

    // Props en Svelte 5
    let { comanda, onClose } = $props<{
        comanda: Comanda;
        onClose: () => void;
    }>();

    const productosSorted = $derived(
        [...comanda.productos].sort((a, b) => a.id - b.id)
    );

    const ID_CHEF_ACTUAL = 8; 

    // Helpers con tipado explícito para evitar "implicit any"
    const esMio = (p: ComandaProducto) => p.idCocinero === ID_CHEF_ACTUAL;
    const estaOcupado = (p: ComandaProducto) => p.idCocinero !== null && p.idCocinero !== ID_CHEF_ACTUAL;
    const estaCompletado = (p: ComandaProducto) => p.servido >= p.pedido;

    async function manejarCoger(idDetalleComanda: number) {
        await gestorCocina.cogerProducto(idDetalleComanda);
    }

    async function manejarLiberar(idDetalleComanda: number) {
        await gestorCocina.liberarProducto(idDetalleComanda);
    }

    async function manejarServir(idDetalleComanda: number, cantidad: number) {
        const prod = comanda.productos.find((p: ComandaProducto) => p.id === idDetalleComanda);
        if (!prod) return;
        
        const nuevaCantidad = Math.max(0, Math.min(cantidad, prod.pedido));
        await gestorCocina.servirProducto(idDetalleComanda, nuevaCantidad);
    }
</script>

<div class="flex flex-col h-full bg-surface-800 p-1">
    <header class="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
        <div>
            <div class="flex items-center gap-3">
                <span class="badge variant-filled-primary text-xl font-bold">#{comanda.idComanda}</span>
                <h2 class="h2 font-black text-white uppercase tracking-tighter">Detalle Comanda</h2>
            </div>
            <p class="text-surface-400 text-sm mt-1 uppercase tracking-widest font-bold">
                Estado: <span class={comanda.estado === 'SINCOCINA' ? 'text-error-500' : 'text-primary-500'}>{comanda.estado}</span>
            </p>
        </div>
        <button class="btn-icon variant-soft-hover" onclick={onClose}>✕</button>
    </header>

    <div class="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
        {#each productosSorted as producto (producto.id)}
            <div 
                class="card p-4 border-l-[12px] transition-all duration-300 relative overflow-hidden
                {esMio(producto) ? 'variant-soft-primary border-primary-500 bg-primary-500/10' : 'bg-surface-700 border-surface-500'}
                {estaOcupado(producto) ? 'opacity-40 pointer-events-none' : ''}
                {estaCompletado(producto) ? 'border-success-500 opacity-80' : ''}"
            >
                <div class="flex justify-between items-start gap-4">
                    <div class="flex-1">
                        <div class="flex items-center gap-2">
                            <h3 class="h3 font-black uppercase leading-tight">{producto.nombre || 'Item ' + producto.id}</h3>
                            {#if estaCompletado(producto)}
                                <span class="text-success-500" in:fade>✔</span>
                            {/if}
                        </div>
                        
                        <div class="flex items-center gap-3 mt-2">
                            <div class="flex flex-col">
                                <span class="text-[10px] uppercase opacity-50 font-bold">Progreso</span>
                                <span class="text-2xl font-mono font-black">
                                    {producto.servido}<span class="text-sm opacity-30">/{producto.pedido}</span>
                                </span>
                            </div>
                            
                            {#if estaOcupado(producto)}
                                <span class="badge variant-filled-error text-[10px] animate-pulse">OCUPADO: CHEF #{producto.idCocinero}</span>
                            {/if}
                        </div>
                    </div>

                    <div class="flex flex-col items-end gap-2">
                        {#if !estaCompletado(producto) && !producto.idCocinero}
                            <button 
                                class="btn variant-filled-warning font-bold shadow-lg hover:scale-105 transition-transform"
                                onclick={() => manejarCoger(producto.id)}
                            >
                                SERVIR
                            </button>
                        {:else if !estaCompletado(producto) && esMio(producto)}
                            <div class="flex flex-col gap-2" in:slide={{ axis: 'y' }}>
                                <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] variant-filled-surface scale-90 origin-right">
                                    <button class="px-4 text-xl font-bold" onclick={() => manejarServir(producto.id, producto.servido - 1)}>-</button>
                                    <div class="flex justify-center items-center font-black text-lg">{producto.servido}</div>
                                    <button class="px-4 text-xl font-bold" onclick={() => manejarServir(producto.id, producto.servido + 1)}>+</button>
                                </div>
                                
                                <div class="flex gap-1 justify-end">
                                    <button 
                                        class="btn btn-sm variant-filled-success font-bold"
                                        onclick={() => manejarServir(producto.id, producto.pedido)}
                                    >
                                        LISTO
                                    </button>
                                    <button 
                                        class="btn btn-sm variant-soft-error text-[10px]"
                                        onclick={() => manejarLiberar(producto.id)}
                                    >
                                        SOLTAR
                                    </button>
                                </div>
                            </div>
                        {:else if !estaCompletado(producto) && !esMio(producto)}
                            <span class="text-[10px] italic opacity-40 uppercase font-bold">En manos de otro</span>
                        {/if}
                    </div>
                </div>

                <div class="w-full bg-black/40 h-1.5 mt-4 rounded-full overflow-hidden">
                    <div 
                        class="h-full transition-all duration-700 ease-out
                        {estaCompletado(producto) ? 'bg-success-500' : 'bg-primary-500'}" 
                        style="width: {(producto.servido / producto.pedido) * 100}%"
                    ></div>
                </div>
            </div>
        {/each}
    </div>

    <footer class="pt-6 border-t border-white/10 mt-4 grid grid-cols-2 gap-4">
        <button 
            class="btn variant-soft-error text-xs uppercase font-bold"
            onclick={() => { if(confirm('¿Anular toda la comanda?')) gestorCocina.anularComanda(comanda.idComanda); onClose(); }}
        >
            Anular Comanda
        </button>
        
        {#if comanda.productos.every((p: ComandaProducto) => p.servido === p.pedido)}
            <button 
                class="btn variant-filled-success font-black shadow-xl animate-bounce"
                onclick={onClose}
                in:fly={{ y: 20 }}
            >
                CERRAR MONITOR
            </button>
        {:else}
            <button class="btn variant-filled-surface opacity-50" disabled>
                PENDIENTE...
            </button>
        {/if}
    </footer>
</div>

<style>
    .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(255,255,255,0.1);
        border-radius: 10px;
    }
</style>