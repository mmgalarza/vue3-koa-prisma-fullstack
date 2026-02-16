import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = () => {
  // Comprobamos si hay JWT en localStorage o en tu Store de auth
  const hasToken = !!localStorage.getItem('jwt_kiosko');

  // Si no hay identidad, lo mandamos al login
  if (!hasToken) {
    return <Navigate to="/auth/login" replace />;
  }

  // Si hay token, renderizamos el hijo (Kiosko o Admin)
  return <Outlet />;
};