import Router from '@koa/router'
import { login, register, activateAccount, resendActivation, requestResetPassword, resetPassword } from './controller'

const router = new Router()

router.post('/login', login)
router.post('/register', register)
router.get('/activate', activateAccount);
router.post('/resend-activation', resendActivation);
router.post('/reset-password/request', requestResetPassword);
router.post('/reset-password', resetPassword);

export default router
