import { Router } from 'express';
import { universalRoute } from '../modules/univarsal/univarsal.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/universal',
    route: universalRoute,
  },
];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
