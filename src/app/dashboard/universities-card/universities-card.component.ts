import { Component } from '@angular/core';

@Component({
  selector: 'app-universities-card',
  templateUrl: './universities-card.component.html',
  styleUrls: ['./universities-card.component.css']
})
export class UniversitiesCardComponent {
  influencers = [
    {
      name: 'Enetcom',
      followers: 2890080,
      image: 'https://archive-enetcom.rnu.tn/useruploads/files/logo_face_book.jpg', 
      socialIcons: [
        'https://cdn-icons-png.flaticon.com/512/4494/4494475.png',
        'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        'https://cdn-icons-png.flaticon.com/512/733/733609.png'
      ]
    },
    {
      name: "Sup'Com",
      followers: 2890080,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWxvRKEHDnXo0W9Rl0jEbOHSMXJpaaHIXvlA&s',
      socialIcons: [
        'https://cdn-icons-png.flaticon.com/512/4494/4494475.png',
        'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        'https://cdn-icons-png.flaticon.com/512/733/733609.png'
      ]
    },
    {
      name: 'Ensi',
      followers: 2890080,
      image: 'https://ensi.rnu.tn/stylesheets/intranet/logo.png',
      socialIcons: [
        'https://cdn-icons-png.flaticon.com/512/4494/4494475.png',
        'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        'https://cdn-icons-png.flaticon.com/512/733/733609.png'
      ]
    },
    // Add more influencers here
  ];
}
