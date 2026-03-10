import { Injectable, signal } from '@angular/core';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private bookings = signal<Booking[]>([]);

  getBookings() {
    return this.bookings.asReadonly();
  }

  addBooking(booking: Booking) {
    this.bookings.update(prev => [...prev, { ...booking, id: Date.now() }]);
  }
}
