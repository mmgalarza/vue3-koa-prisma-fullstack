<script lang="ts">
    import './layout.css';
    import { onMount } from 'svelte';
    import { gestorCocina } from '../modulos/comandas/store.svelte';
    import ListaComandas from '../modulos/comandas/vista.svelte';

    // Svelte 5 requiere recibir los hijos como prop
    let { children } = $props();

    onMount(async () => {
        await gestorCocina.inicializar(true);
    });
</script>

<ListaComandas />

{@render children?.()}