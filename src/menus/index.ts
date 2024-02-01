import {
  symRoundedTable,
  symRoundedNewspaper,
  symRoundedCalendarMonth,
  symRoundedClearAll,
  symRoundedToday,
  symRoundedFormatAlignJustify,
  symRoundedChecklist,
  symRoundedFamilyHistory,
  symRoundedHardDrive,
  symRoundedPivotTableChart,
  symRoundedViewKanban,
} from '@quasar/extras/material-symbols-rounded';

// https://dhtmlx.com/docs/products/
// 1. Gantt (o)
// 2. Scheduler (o)
// 3. Suite - (esp. Grid) (o)
// 4. Diagram (o)
// 5. Spreadsheet (o)
// 6. Kanban (x)
// 7. To Do List (x)
// 8. Event Calendar (x)
// 9. Rich Text Editor (o)
// 10. Vault (o)
// 11. Pivot (o)
const dhxMenus = [
  {
    title: 'dhtmlx-gantt',
    icon: symRoundedClearAll,
    to: '/dhx/gantt',
  },
  {
    title: 'dhtmlx-scheduler',
    icon: symRoundedCalendarMonth,
    to: '/dhx/scheduler',
  },
  {
    title: 'cdn-richtext',
    icon: symRoundedNewspaper,
    to: '/dhx/richtexteditor',
  },
  {
    title: 'dhx-suite-grid',
    icon: symRoundedFormatAlignJustify,
    to: '/dhx/suite',
  },
  {
    title: '@dhx/trial-spreadsheet',
    icon: symRoundedTable,
    to: '/dhx/spreadsheet',
  },

  {
    title: 'cdn-diagram',
    icon: symRoundedFamilyHistory,
    to: '/dhx/diagram',
  },
  {
    title: 'cdn-vault',
    icon: symRoundedHardDrive,
    to: '/dhx/vault',
  },
  {
    title: 'cdn-pivot',
    icon: symRoundedPivotTableChart,
    to: '/dhx/pivot',
  },
  {
    title: 'public/event-calendar',
    icon: symRoundedToday,
    to: '/dhx/event-calendar',
  },
  {
    title: 'public/kanban',
    icon: symRoundedViewKanban,
    to: '/dhx/kanban',
  },
  {
    title: 'public/todo',
    icon: symRoundedChecklist,
    to: '/dhx/todolist',
  },
];

export { dhxMenus };
