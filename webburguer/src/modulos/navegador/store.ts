import { defineStore } from 'pinia'
import { BrowserService } from './service'
import type { ItemBrowserType } from './zod' 

export const useBrowserStore = defineStore('browser', {

    state: () => ({
        items: [] as ItemBrowserType[],
        loading: false,
        selectedItem: null as ItemBrowserType | null,
        path: [] as ItemBrowserType[],
        searchQuery: ''
    }),

    getters: {
      getCurrentElements: (state) => {
          if (!state.selectedItem) {
              return state.items;
          }
          return state.selectedItem.hijos || [];
      },
      isAtRoot: (state) => {
          return state.selectedItem === null;
      },
      breadcrumbs: (state) => {
          if (!state.selectedItem) return [];
          const breadcrumbs: ItemBrowserType[] = [];
          let current: ItemBrowserType | null = state.selectedItem;
          while (current) {
              breadcrumbs.unshift(current);
              // Intentar encontrar el padre en la lista de items raíz
              const parent = state.items.find(item => 
                  item.hijos?.some(hijo => hijo.id === current?.id)
              );
              current = parent || null;
          }
          return breadcrumbs;
      },
      showBreadcrumbs: (state) => {
          return state.path.length > 0;
      },
      hasBreadcrumbs: (state) => {
          return state.path.length > 0;
      },
      filteredElements: (state) => {
          const query = state.searchQuery.toLowerCase().trim();
          if (!query) {
              // Comportamiento normal (navegación por carpetas)
              return state.selectedItem ? (state.selectedItem.hijos || []) : state.items;
          }

          // Búsqueda global recursiva
          const results: ItemBrowserType[] = [];
          const search = (nodes: ItemBrowserType[]) => {
              for (const node of nodes) {
                  if (node.nombre.toLowerCase().includes(query)) {
                      results.push(node);
                  }
                  if (node.hijos) search(node.hijos);
              }
          };
          search(state.items);
          return results;
      },
      rootCategories: (state) => {
        // Filtramos los items raíz que tengan hijos (categorías)
        return state.items.filter(item => item.nivel !== 'producto');
      },
      allCategories: (state) => {
          const cats: ItemBrowserType[] = [];
          
          const walk = (nodes: ItemBrowserType[]) => {
            if (!nodes) return;
            
            nodes.forEach(node => {
              // Regla de oro: Si no es producto, es una categoría (o carpeta)
              if (node.nivel !== 'producto') {
                cats.push(node);
                
                // Seguimos buscando sub-categorías dentro de sus hijos
                if (node.hijos && node.hijos.length > 0) {
                  walk(node.hijos);
                }
              }
            });
          };

          walk(state.items);
          return cats;
        }
      },
      actions: {
        async initialize() {
            if (this.items.length > 0) return;
            this.loading = true;
            try {
                const service = new BrowserService();
                this.items = await service.getAll();
            } catch (error) {
                console.error("Error initializing browser store:", error);
            } finally {
                this.loading = false;
            }
        },

        selectItem(item: ItemBrowserType) {
            this.selectedItem = item;
        },

        goBack() {
            if (!this.selectedItem) return;
            const parent = this.items.find(item => 
                item.hijos?.some(hijo => hijo.id === this.selectedItem?.id)
            );
            this.selectedItem = parent || null;
        },
        navigateToIndex(index: number) {
            if (index < -1 || index >= this.breadcrumbs.length) return;
            if (index === -1) {
                this.selectedItem = null;
            } else {
                this.selectedItem = this.breadcrumbs[index] ?? null;
            }
        },
        findItemById(id: string, items?: ItemBrowserType[]): ItemBrowserType | null {
            const searchItems = items ?? this.items;
            for (const item of searchItems) {
                if (item.id === id) return item;
                if (item.hijos) {
                    const found = this.findItemById(id, item.hijos);
                    if (found) return found;
                }
            }
            return null;
        },
        findItemByName(name: string, items?: ItemBrowserType[]): ItemBrowserType | null {
            const searchItems = items ?? this.items;
            for (const item of searchItems) {
                if (item.nombre.toLowerCase() === name.toLowerCase()) return item;
                if (item.hijos) {
                    const found = this.findItemByName(name, item.hijos);
                    if (found) return found;
                }
            }
            return null;
        },  
        async refresh() {
            await this.initialize();
        },
        clear() {
          this.items = [];
          this.selectedItem = null;
          this.path = [];
        }   
    }
})