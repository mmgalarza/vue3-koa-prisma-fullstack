import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { tree } from './tree.routes';

export const router = createBrowserRouter(tree);

// En tu App.tsx o main.tsx simplemente envuelves el RouterProvider
// <Suspense fallback={<LinearProgress />}>
//    <RouterProvider router={router} />
// </Suspense>