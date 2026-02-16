<script lang="ts">
    import "./layout.css"; // Tus estilos de Tailwind/Skeleton
    let { children } = $props(); // Svelte 5
</script>

<div class="flex flex-col h-[100dvh] w-full bg-surface-900 text-white overflow-hidden">
    
    <nav class="flex-none bg-surface-800 border-b border-white/10 px-4 py-2 flex justify-between items-center shadow-md z-20">
        <div class="flex items-center gap-8">
            <a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div class="bg-warning-500 p-1.5 rounded-lg text-surface-900">
                    <i class="fa-solid fa-utensils text-lg"></i>
                </div>
                <span class="font-black tracking-tighter uppercase italic hidden sm:inline">PosSystem</span>
            </a>

            <div class="flex gap-4 text-xs font-bold uppercase tracking-widest">
                <a href="/cocina" class="text-warning-500 border-b-2 border-warning-500 pb-1">Monitor</a>
                <a href="/historial" class="opacity-50 hover:opacity-100 transition-opacity pb-1">Historial</a>
            </div>
        </div>

        <div class="flex items-center gap-4">
            <div class="hidden xs:flex flex-col items-end leading-none">
                <span class="text-[10px] opacity-40 uppercase">Terminal</span>
                <span class="text-xs font-mono text-success-500">.109</span>
            </div>
            <button class="btn-icon variant-soft-surface w-8 h-8" aria-label="Settings">
                <i class="fa-solid fa-gear text-sm"></i>
            </button>
        </div>
    </nav>

    <main class="flex-1 min-h-0 overflow-hidden relative">
        {@render children()}
    </main>
</div>

<style>
    /* Bloqueo extra para móviles para evitar el scroll elástico de la página entera */
    :global(html, body) {
        overflow: hidden;
        height: 100%;
        position: fixed;
        width: 100%;
    }
</style>