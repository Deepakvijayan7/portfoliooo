import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  works=[
    
    {
      PageName:'Power Gym',
       tools:['html ', ' css ',  ' javascript ',  ' bootstrap'],
      details:`power gym improves or maintain your physical health, enhance their strength, build muscle, and achieve various fitness goals.
      power gym equipped with a variety of exercise machines and equipment such as treadmills, elliptical trainers, weight machines, free weights, and more.`,
      indexpage:'assets/Images/works/mockupworks/power_gym.jpg',
      websiteUrl:'https://luxury-carwash.de/'
    },
    {
    PageName:'Luxury-CarWash',
     tools:['html ', ' css ',  ' javascript ',  ' bootstrap'],
    details:`Luxury Car Wash was born out of a love and passion for providing the highest level of vehicle
    care and protection. Our experts work with state-of-the-art eco-steam washing methods to offer
    the highest quality and cleanliness. Our cleanliness is sustainable!`,
    indexpage:'assets/Images/works/luxury/index.png',
    websiteUrl:'https://luxury-carwash.de/'
  },
  {
    PageName:'CARAT-Mobile',
     tools:['html ', ' css ',  ' javascript ',  ' bootstrap'],
    details:`Your mobile phone shop in Landau and at the same time your contact for all questions relating to
    mobile phones, mobile phone contracts, accessories and repairs. At CARAT Mobile you can expect
    professional service and support. Here with us nobody leaves with unanswered questions!`,
    indexpage:'assets/Images/works/carat-mobile/index.jpg',
    websiteUrl:'https://carat-handyshop.de/'
  },
  {
    PageName:'RJ- Hydraulics',
     tools:['html ', ' css ',  ' javascript ',  ' bootstrap'],
    details:`RJ Hydraulic Pty Ltd is now open for business in Australia and is an expansion of our middle-eastern sister company. Our owner has been working with construction, mining and agricultural industries for several decades now, forging strong relationships with global manufacturers of aftermarket hydraulic pumps, motors and spare parts.`,
    indexpage:'assets/Images/works/hydraulics/index.jpg',
    websiteUrl:'https://rjhydraulics.in/'
  },
  {
    PageName:'Just Dance',
     tools:['html ', ' css ',  ' javascript ',  ' bootstrap'],
    details:`TO MAKE ELITE DANCE EDUCATION ACCESSIBLE TO EVERYONE
    Dance Masterclass, often referred to as the "Netflix" of the dance world, is an online streaming platform dedicated to the art of dance.
    We produce masterclasses and documentary films for dancers and dance teachers.
    `,
    indexpage:'assets/Images/works/mockupworks/Just_Dance.jpg',
    websiteUrl:'https://luxury-carwash.de/'
  },
  {
    PageName:'Strassenstaub',
     tools:['html ', ' css ', ' bootstrap'],
    details:`RJ Hydraulic Pty Ltd is now open for business in Australia and is an expansion of our middle-eastern sister company. Our owner has been working with construction, mining and agricultural industries for several decades now, forging strong relationships with global manufacturers of aftermarket hydraulic pumps, motors and spare parts.`,
    indexpage:'assets/Images/works/strassen-staub/index.jpg'
  },
  
  {
    PageName:'Autoverschrottung',
     tools:['html ', ' css ',  ' javascript ',  ' bootstrap'],
    details:`Get professional advice on your questions about car scrapping. The consultation is completely non-binding and of course free of charge. We are waiting for your call.`,
    indexpage:'assets/Images/works/Autoverschrottung/index.jpg',
  },

  {
    PageName:'Security campus',
     tools:['html ', ' css ', ' bootstrap'],
    details:`The security campus is an excellent training provider, specializing in delivering training service on security system field. Our training service is sustainable, accessible, affordable and innovative training solutions for every single professional to meet the criteria for attending the particular course. `,
    indexpage:'assets/Images/works/security-campus/index.png',
    mobileView:'assets/Images/works/security-campus/index-mobile.png',
  },
  {
    PageName:'Key-Montage GMBH',
     tools:['html ', ' css ',  ' javascript ',  ' bootstrap'],
    details:`KSpecialized in
    Assembly service in the
    Industrial sector,Assembly service for the industrial sector.`,
    indexpage:'assets/Images/works/key-montage/index.png',
  },
  {
    PageName:'Vrakela',
     tools:['html ', ' css ',  ' javascript ',  ' bootstrap'],
    details:`Would you like to realize a construction project? Would you like to renovate your property? Then come to us, because we will advise you without obligation and show you your options. Our comprehensive service will impress you. Our competent team is available around the clock for personal inquiries! Or simply visit us in the Media Harbor in Düsseldorf!`,
    indexpage:'assets/Images/works/vrakela/index.png',
  },
  
  // {
  //   PageName:'Katja-Coaching',
  //    tools:['html ', ' css ',  ' javascript ',  ' bootstrap'],
  //   details:`Katja Kunze - Certified Parenting Method Certified Coach (CPMCC), RYT, LMT I am a mother of two and currently live with my family in Upper Bavaria. My own childhood was shaped by trauma. It took me years to heal from these experiences and return to my true essence.`,
  //   indexpage:'assets/Images/works/katja-coaching/index.png',
  // }
]
  constructor() { }

  ngOnInit(): void {
  }

}
