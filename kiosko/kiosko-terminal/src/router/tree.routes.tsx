import { lazy, Suspense } from 'react';
import { PageLoader } from '@modulos/tpv/components/loader';
import { Error404 } from '@modulos/tpv/components/error404';

/**
 * 📦 CARGA PEREZOSA (Lazy Loading)
 */
// Cargamos la página principal (que ya gestiona Publicidad -> Catálogo -> Ticket)
const KioskoPage = lazy(() => import('@modulos/tpv/page.4'));


/**
 * 🌳 ÁRBOL DE RUTAS
 */
export const tree = [
  {
    path: '/',
    element: (
      <Suspense fallback={<PageLoader />}>
        <KioskoPage />
      </Suspense>
    ),
    index: true
  },
  {
    path: '/auth',
    element: <Error404 />
  }
];

export default tree;