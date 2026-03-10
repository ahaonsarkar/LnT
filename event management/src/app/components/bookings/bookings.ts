import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../services/booking';
import { EventService } from '../../services/event';

@Component({
  selector: 'app-bookings',
  imports: [CommonModule],
  templateUrl: './bookings.html',
  styleUrl: './bookings.css',
})
export class Bookings {
  private bookingService = inject(BookingService);
  private eventService = inject(EventService);

  bookings = this.bookingService.getBookings();

  getEventName(eventId: number) {
    return this.eventService.getEventById(eventId)?.name || 'Unknown Event';
  }
}
