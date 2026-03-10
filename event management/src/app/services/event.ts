import { Injectable, signal } from '@angular/core';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events = signal<Event[]>([
    {
      id: 1,
      name: 'Grand Diwali Mela 2026',
      category: 'Festival',
      date: '2026-11-05',
      location: 'New Delhi, India',
      price: 500,
      seatsAvailable: 1000,
      description: 'Experience the festival of lights with traditional food, handicrafts, and a spectacular firework display at the heart of the capital.'
    },
    {
      id: 2,
      name: 'Holi Color Fest',
      category: 'Festival',
      date: '2026-03-15',
      location: 'Mathura, UP',
      price: 350,
      seatsAvailable: 500,
      description: 'Join the world-famous Holi celebration with organic colors, traditional Thandai, and live folk music in the birth city of Lord Krishna.'
    },
    {
      id: 3,
      name: 'Jaipur Literature Festival',
      category: 'Culture',
      date: '2026-01-22',
      location: 'Jaipur, Rajasthan',
      price: 1200,
      seatsAvailable: 250,
      description: 'The world\'s largest free literary festival, bringing together the greatest writers and thinkers in the pink city.'
    },
    {
      id: 4,
      name: 'Classical Music Night',
      category: 'Music',
      date: '2026-04-10',
      location: 'Pune, Maharashtra',
      price: 800,
      seatsAvailable: 150,
      description: 'An evening of soulful Hindustani classical music featuring world-renowned maestros and soulful ragas.'
    },
    {
      id: 5,
      name: 'Mumbai Street Food Tour',
      category: 'Food',
      date: '2026-02-28',
      location: 'Mumbai, Maharashtra',
      price: 600,
      seatsAvailable: 30,
      description: 'Explore the flavors of Mumbai from Vada Pav to Pav Bhaji in this guided culinary journey through Khau Gallis.'
    },
    {
      id: 6,
      name: 'Rann Utsav: Desert Festival',
      category: 'Festival',
      date: '2026-12-15',
      location: 'Kutch, Gujarat',
      price: 4500,
      seatsAvailable: 100,
      description: 'Witness the beauty of the White Rann under the full moon with traditional dance, music, and Kutchi hospitality.'
    },
    {
      id: 7,
      name: 'South Indian Carnatic Concert',
      category: 'Music',
      date: '2026-07-08',
      location: 'Chennai, Tamil Nadu',
      price: 750,
      seatsAvailable: 200,
      description: 'Experience the intricate rhythms and melodies of Carnatic music in the cultural capital of South India.'
    },
    {
      id: 8,
      name: 'Varanasi Ganga Aarti Experience',
      category: 'Spiritual',
      date: '2026-05-20',
      location: 'Varanasi, UP',
      price: 0,
      seatsAvailable: 500,
      description: 'A divine spiritual experience watching the evening Ganga Aarti at Dashashwamedh Ghat.'
    },
    {
      id: 9,
      name: 'Goa Carnival 2026',
      category: 'Festival',
      date: '2026-02-14',
      location: 'Panaji, Goa',
      price: 1500,
      seatsAvailable: 300,
      description: 'Four days of music, dance, and colorful parades celebrating the vibrant culture of Goa.'
    },
    {
      id: 10,
      name: 'Bollywood Dance Workshop',
      category: 'Workshop',
      date: '2026-06-12',
      location: 'Mumbai, Maharashtra',
      price: 2000,
      seatsAvailable: 50,
      description: 'Learn the high-energy moves of Bollywood from professional industry choreographers.'
    },
    {
      id: 11,
      name: 'Kerala Houseboat Retreat',
      category: 'Travel',
      date: '2026-09-05',
      location: 'Alleppey, Kerala',
      price: 8000,
      seatsAvailable: 20,
      description: 'A tranquil journey through the backwaters of Kerala in a traditional Kettuvallam.'
    },
    {
      id: 12,
      name: 'Yoga & Meditation Retreat',
      category: 'Wellness',
      date: '2026-10-10',
      location: 'Rishikesh, Uttarakhand',
      price: 3000,
      seatsAvailable: 40,
      description: 'Find inner peace in the Yoga capital of the world, nestled in the Himalayan foothills.'
    },
    {
      id: 13,
      name: 'Mysore Dasara Procession',
      category: 'Festival',
      date: '2026-10-21',
      location: 'Mysore, Karnataka',
      price: 1200,
      seatsAvailable: 1000,
      description: 'The royal celebration of Nada Habba with a majestic elephant parade and illuminated Mysore Palace.'
    },
    {
      id: 14,
      name: 'Lumbini Buddhist Tour',
      category: 'Spiritual',
      date: '2026-04-05',
      location: 'Lumbini/Bodh Gaya',
      price: 5500,
      seatsAvailable: 30,
      description: 'A pilgrimage to the sacred sites associated with the life and enlightenment of Lord Buddha.'
    },
    {
      id: 15,
      name: 'Tandoori Cooking Masterclass',
      category: 'Food',
      date: '2026-08-18',
      location: 'Amritsar, Punjab',
      price: 1800,
      seatsAvailable: 15,
      description: 'Learn the secrets of authentic Punjabi tandoori cuisine from expert chefs in Amritsar.'
    },
    {
      id: 16,
      name: 'Pushkar Camel Fair',
      category: 'Culture',
      date: '2026-11-20',
      location: 'Pushkar, Rajasthan',
      price: 1000,
      seatsAvailable: 500,
      description: 'One of the world\'s largest camel fairs, featuring livestock trade, folk performances, and competitions.'
    }
  ]);

  getEvents() {
    return this.events.asReadonly();
  }

  getEventById(id: number) {
    return this.events().find(event => event.id === id);
  }

  updateSeats(eventId: number, count: number) {
    this.events.update(prev => prev.map(e => {
      if (e.id === eventId) {
        return { ...e, seatsAvailable: e.seatsAvailable - count };
      }
      return e;
    }));
  }
}
