<script lang="ts">
    import { slide } from 'svelte/transition';
    import { gestorCocina } from './store.svelte'; 
    import ComandaDetalle from './components/Productos.svelte';
    
    // Importamos los nuevos componentes
    import ColumnaSinCocina from './components/SinCocina.svelte';
    import ColumnaEnMarcha from './components/EnMarcha.svelte';
    import ColumnaListas from './components/Listas.svelte';

    let idComandaSeleccionada = $state<number | null>(null);

    const comandaActiva = $derived(
        gestorCocina.todas.find(c => c.idComanda === idComandaSeleccionada) || null
    );

    const abrirComanda = (id: number) => idComandaSeleccionada = id;
    const cerrarDetalle = () => idComandaSeleccionada = null;
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 h-full bg-gradient-to-b from-surface-900 to-black overflow-hidden">
    
    <ColumnaSinCocina 
        comandas={gestorCocina.criticas} 
        onSeleccionar={abrirComanda} 
    />

    <ColumnaEnMarcha 
        comandas={gestorCocina.enMarcha} 
        onSeleccionar={abrirComanda} 
    />

    <ColumnaListas 
        comandas={gestorCocina.finalizadas} 
    />

</div>

{#if comandaActiva}
    <div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onclick={cerrarDetalle} onkeydown={(e) => e.key === 'Escape' && cerrarDetalle()} role="button" tabindex="0"></div>
    <div transition:slide={{ axis: 'x', duration: 300 }} class="fixed inset-y-0 right-0 w-full lg:w-2/5 bg-surface-800 z-50 shadow-2xl">
        <ComandaDetalle comanda={comandaActiva} onClose={cerrarDetalle} />
    </div>
{/if}