import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-universities-card',
  templateUrl: './universities-card.component.html',
  styleUrls: ['./universities-card.component.css']
})
export class UniversitiesCardComponent {
deleteItem(_t22: any,arg1: any,arg2: any,arg3: any,arg4: any) {
throw new Error('Method not implemented.');
}
startEdit() {
throw new Error('Method not implemented.');
}

  @Input() canEdit : boolean = false;

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
    },{
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
      name: 'Sesame',
      followers: 150000,
      image: 'https://universitesesame.com/wp-content/uploads/2024/07/Logo-SESAME-png.png',
      socialIcons: [
        'https://cdn-icons-png.flaticon.com/512/733/733547.png', // Facebook
        'https://cdn-icons-png.flaticon.com/512/174/174857.png', // LinkedIn
        'https://cdn-icons-png.flaticon.com/512/733/733579.png'  // Twitter
      ]
    },
    
   
    {
      name: 'Université de Carthage',
      followers: 120000,
      image: 'https://www.ucar.rnu.tn/images/logo.png',
      socialIcons: [
        'https://cdn-icons-png.flaticon.com/512/733/733547.png',
        'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        'https://cdn-icons-png.flaticon.com/512/733/733579.png'
      ]
    },
    {
      name: 'Université de la Manouba',
      followers: 110000,
      image: 'https://www.uma.rnu.tn/images/logo.png',
      socialIcons: [
        'https://cdn-icons-png.flaticon.com/512/733/733547.png',
        'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        'https://cdn-icons-png.flaticon.com/512/733/733579.png'
      ]
    },
    {
      name: 'Université de Sousse',
      followers: 100000,
      image: 'https://www.uc.rnu.tn/images/logo.png',
      socialIcons: [
        'https://cdn-icons-png.flaticon.com/512/733/733547.png',
        'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        'https://cdn-icons-png.flaticon.com/512/733/733579.png'
      ]
    },
    {
      name: 'Université de Gabès',
      followers: 90000,
      image: 'https://www.univgb.rnu.tn/images/logo.png',
      socialIcons: [
        'https://cdn-icons-png.flaticon.com/512/733/733547.png',
        'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        'https://cdn-icons-png.flaticon.com/512/733/733579.png'
      ]
    } ,
    {
      name: 'Université de Jendouba',
      followers: 60000,
      image: 'https://www.uj.rnu.tn/images/logo.png',
      socialIcons: [
        'https://cdn-icons-png.flaticon.com/512/733/733547.png',
        'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        'https://cdn-icons-png.flaticon.com/512/733/733579.png'
      ]
    },
    {
      name: 'Université de Tunis',
      followers: 50000,
      image: 'https://www.utunis.rnu.tn/images/logo.png',
      socialIcons: [
        'https://cdn-icons-png.flaticon.com/512/733/733547.png',
        'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        'https://cdn-icons-png.flaticon.com/512/733/733579.png'
      ]
    },
    {
      name: 'Université Ez-Zitouna',
      followers: 40000,
      image: 'https://www.uz.rnu.tn/images/logo.png',
      socialIcons: [
        'https://cdn-icons-png.flaticon.com/512/733/733547.png',
        'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        'https://cdn-icons-png.flaticon.com/512/733/733579.png'
      ]
    },
    
    // Add more influencers here
  ];
}
