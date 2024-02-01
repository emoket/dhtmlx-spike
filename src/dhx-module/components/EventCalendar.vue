<script lang="js">
import { events, date } from './event-calendar-data';

export default {
  mounted() {
    new eventCalendar.EventCalendar(this.$refs.cont, {
      events: events,
      date: date,
    });
  },
};
</script>

<template>
  <div ref="cont" style="width: 100%; height: 100%"></div>
</template>
