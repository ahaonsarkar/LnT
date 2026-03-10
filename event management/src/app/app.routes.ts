import { Routes } from '@angular/router';
import { EventList } from './components/event-list/event-list';
import { EventDetail } from './components/event-detail/event-detail';
import { Bookings } from './components/bookings/bookings';

export const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventList },
  { path: 'event/:id', component: EventDetail },
  { path: 'bookings', component: Bookings },
];
