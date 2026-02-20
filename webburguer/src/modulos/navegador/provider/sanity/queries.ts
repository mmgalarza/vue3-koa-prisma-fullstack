export const QUERY_ARBOL_NAVEGACION = `
  *[_type == "categoria" && tipo == "FAMILIA"] {
    _id,
    nombre,
    "slug": slug.current,
    "imagen": icono, // <--- Mapeamos el campo 'icono' de Sanity a 'imagen'
    "hijos": *[_type == "categoria" && categoriaPadre._ref == ^._id] {
      _id,
      nombre,
      "slug": slug.current,
      "imagen": icono,
      "hijos": *[_type == "categoria" && categoriaPadre._ref == ^._id] {
        _id,
        nombre,
        "slug": slug.current,
        "imagen": icono,
        "productos": *[_type == "producto" && categoria._ref == ^._id] {
          _id,
          nombre,
          precio,
          "slug": slug.current,
          "imagen": imagenes[principal == true][0]
        }
      }
    }
  }
`;