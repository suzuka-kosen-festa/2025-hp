import type { EventData } from "@/data/events";
import { eventsData } from "@/data/events";

const eventsByType = eventsData.reduce((acc, event) => {
  if (!acc[event.type]) {
    acc[event.type] = [];
  }
  acc[event.type].push(event);
  return acc;
}, {} as Record<string, EventData[]>);

export default eventsByType;
