import {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Inventario Jerárquico')
    .items([
      // Nivel 1: Listamos solo las Familias
      S.listItem()
        .title('Explorar por Categoría')
        .child(
          S.documentList()
            .title('Familias (Nivel 1)')
            .filter('_type == "categoria" && tipo == "FAMILIA"')
            .child((familiaId) =>
              // Nivel 2: Al clicar una Familia, buscamos sus Madres
              S.documentList()
                .title('Categorías Madre')
                .filter('_type == "categoria" && categoriaPadre._ref == $familiaId')
                .params({familiaId})
                .child((madreId) =>
                  // Nivel 3: Al clicar una Madre, buscamos sus Hijas
                  S.documentList()
                    .title('Categorías Hija')
                    .filter('_type == "categoria" && categoriaPadre._ref == $madreId')
                    .params({madreId})
                    .child((hijaId) =>
                      // Nivel Final: Al clicar una Hija, vemos sus Productos
                      S.documentList()
                        .title('Productos')
                        .filter('_type == "producto" && categoria._ref == $hijaId')
                        .params({hijaId})
                    )
                )
            )
        ),
      S.divider(),
      // Mantenemos acceso directo a Productos para edición rápida
      S.documentTypeListItem('producto').title('Todos los Productos'),
      S.documentTypeListItem('categoria').title('Configuración de Categorías (Admin)'),
    ])