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
    title: 'dhx-suite-grid',
    icon: symRoundedFormatAlignJustify,
    to: '/dhx/suite',
  },
  {
    title: 'public/richtext',
    icon: symRoundedNewspaper,
    to: '/dhx/richtexteditor',
  },
  {
    title: 'public/diagram',
    icon: symRoundedFamilyHistory,
    to: '/dhx/diagram',
  },
  {
    title: 'public/vault',
    icon: symRoundedHardDrive,
    to: '/dhx/vault',
  },
  {
    title: 'public/pivot',
    icon: symRoundedPivotTableChart,
    to: '/dhx/pivot',
  },
  {
    title: 'public/spreadsheet',
    icon: symRoundedTable,
    to: '/dhx/spreadsheet',
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
