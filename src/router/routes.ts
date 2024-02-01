import { RouteRecordRaw } from 'vue-router';
import dhxRouter from '@/dhx-module/router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    ...dhxRouter,
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/NotFoundPage.vue'),
  },
];
