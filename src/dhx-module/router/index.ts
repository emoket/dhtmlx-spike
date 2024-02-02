import DhxLayout from '@/dhx-module/layout/DhxLayout.vue';

export default {
  component: DhxLayout,
  redirect: { path: '/dhx/gantt' },
  children: [
    {
      path: '/dhx/gantt',
      name: 'dhx-gantt',
      meta: { requiresAuth: true },
      component: () => import('@/dhx-module/pages/Gantt.vue'),
    },
    {
      path: '/dhx/event-calendar',
      name: 'dhx-event-calendar',
      meta: { requiresAuth: true },
      component: () => import('@/dhx-module/pages/EventCalendar.vue'),
    },
    {
      path: '/dhx/scheduler',
      name: 'dhx-scheduler',
      meta: { requiresAuth: true },
      component: () => import('@/dhx-module/pages/Scheduler.vue'),
    },
    {
      path: '/dhx/richtexteditor',
      name: 'dhx-richtexteditor',
      meta: { requiresAuth: true },
      component: () => import('@/dhx-module/pages/RichTextEditor.vue'),
    },
    {
      path: '/dhx/suite',
      name: 'dhx-suite',
      meta: { requiresAuth: true },
      component: () => import('@/dhx-module/pages/Suite.vue'),
    },
    {
      path: '/dhx/spreadsheet',
      name: 'dhx-spreadsheet',
      meta: { requiresAuth: true },
      component: () => import('@/dhx-module/pages/SpreadSheet.vue'),
    },
    {
      path: '/dhx/todolist',
      name: 'dhx-todolist',
      meta: { requiresAuth: true },
      component: () => import('@/dhx-module/pages/ToDoList.vue'),
    },
    {
      path: '/dhx/diagram',
      name: 'dhx-diagram',
      meta: { requiresAuth: true },
      component: () => import('@/dhx-module/pages/Diagram.vue'),
    },
    {
      path: '/dhx/vault',
      name: 'dhx-vault',
      meta: { requiresAuth: true },
      component: () => import('@/dhx-module/pages/VaultParent.vue'),
    },
    {
      path: '/dhx/pivot',
      name: 'dhx-pivot',
      meta: { requiresAuth: true },
      component: () => import('@/dhx-module/pages/PivotEvents.vue'),
    },
    {
      path: '/dhx/kanban',
      name: 'dhx-kanban',
      meta: { requiresAuth: true },
      component: () => import('@/dhx-module/pages/Kanban.vue'),
    },
  ],
};
