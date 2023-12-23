import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery'
@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent implements OnInit {

  works_details = [
    {
      PageName: 'Power Gym',
      details: `power gym improves or maintain your physical health, enhance their strength, build muscle, and achieve various fitness goals.
      power gym equipped with a variety of exercise machines and equipment such as treadmills, elliptical trainers, weight machines, free weights, and more.`,
      indexpage: 'assets/Images/works/mockupworks/power_gym.jpg',
      mobileView: 'assets/Images/works/mockupworks/power_gym_mobile.jpg',
      demolink:'https://deepakvijayan7.github.io/power-gym/',
    },
    {
      PageName: 'Just Dance',
      details: `TO MAKE ELITE DANCE EDUCATION ACCESSIBLE TO EVERYONE
      Dance Masterclass, often referred to as the "Netflix" of the dance world, is an online streaming platform dedicated to the art of dance.
      We produce masterclasses and documentary films for dancers and dance teachers.`,
      indexpage: 'assets/Images/works/mockupworks/Just_Dance.jpg',
      mobileView: 'assets/Images/works/mockupworks/Just_Dance_mobile.jpg',
      demolink:'https://deepakvijayan7.github.io/Just-dance/'
    },
    {
      PageName: 'Luxury-CarWash',
      details: `Luxury Car Wash was born out of a love and passion for providing the highest level of vehicle
    care and protection. Our experts work with state-of-the-art eco-steam washing methods to offer
    the highest quality and cleanliness. Our cleanliness is sustainable!`,
    demolink:'https://deepakvijayan7.github.io/luxury-car-wash/',
      indexpage: 'assets/Images/works/luxury/index.png',
      mobileView: 'assets/Images/works/luxury/mobile-view/index.png',
      otherPages: [{
        page: 'about',
        image: 'assets/Images/works/luxury/about.png',
        imageMobile: 'assets/Images/works/luxury/mobile-view/about.png',
      },
      {
        page: 'contact',
        image: 'assets/Images/works/luxury/Contact.png',
        imageMobile: 'assets/Images/works/luxury/mobile-view/Contact.png',
      },
      {
        page: 'Performance & Prices',
        image: 'assets/Images/works/luxury/Performance & Prices.png',
        imageMobile: 'assets/Images/works/luxury/mobile-view/Performance & Prices.png',
      },
      {
        page: 'referenzen',
        image: 'assets/Images/works/luxury/referenzen.png',
        imageMobile: 'assets/Images/works/luxury/mobile-view/referenzen.png',
      }

      ]
    },
    {
      PageName: 'CARAT-Mobile',
      details: `Your mobile phone shop in Landau and at the same time your contact for all questions relating to
    mobile phones, mobile phone contracts, accessories and repairs. At CARAT Mobile you can expect
    professional service and support. Here with us nobody leaves with unanswered questions!`,
      indexpage: 'assets/Images/works/carat-mobile/index.jpg',
      mobileView: 'assets/Images/works/carat-mobile/index-mobile.png',
    },
    {
      PageName: 'RJ- Hydraulics',
      details: `RJ Hydraulic Pty Ltd is now open for business in Australia and is an expansion of our middle-eastern sister company. Our owner has been working with construction, mining and agricultural industries for several decades now, forging strong relationships with global manufacturers of aftermarket hydraulic pumps, motors and spare parts.`,
      indexpage: 'assets/Images/works/hydraulics/index.jpg',
      mobileView: 'assets/Images/works/hydraulics/index-mobile.jpg',
    },

    {
      PageName: 'Strassenstaub',
      details: `Strassenstaub is an online fashion store.`,
      indexpage: 'assets/Images/works/strassen-staub/index.jpg',
      mobileView: 'assets/Images/works/strassen-staub/index-mobile.jpg',
      demolink:'https://deepakvijayan7.github.io/Strassenstaub/',
      otherPages: [{
        page: 'contact',
        image: 'assets/Images/works/strassen-staub/contact.jpg',
        imageMobile: 'assets/Images/works/strassen-staub/contact-mobile.jpg',
      },
      {
        page: 'community',
        image: 'assets/Images/works/strassen-staub/community-page.jpg',
        imageMobile: 'assets/Images/works/strassen-staub/community-page-mobile.jpg',
      },
      {
        page: 'Product-detail',
        image: 'assets/Images/works/strassen-staub/detail-page.jpg',
        imageMobile: 'assets/Images/works/strassen-staub/detail-mobile.jpg',
      },
      ]
    },
    {
      PageName: 'Autoverschrottung',
      details: `Get professional advice on your questions about car scrapping. The consultation is completely non-binding and of course free of charge. We are waiting for your call.`,
      indexpage: 'assets/Images/works/Autoverschrottung/index.jpg',
      mobileView: 'assets/Images/works/Autoverschrottung/index-mobile.png',
      demolink:'https://deepakvijayan7.github.io/Autoverschrottung/',
      otherPages: [{
        page: 'about',
        image: 'assets/Images/works/Autoverschrottung/about.jpg',
        imageMobile: 'assets/Images/works/Autoverschrottung/about-mobile.png',
      },
      {
        page: 'contact',
        image: 'assets/Images/works/Autoverschrottung/contact.png',
        imageMobile: 'assets/Images/works/Autoverschrottung/contact-mobile.png',
      },
      {
        page: 'Service',
        image: 'assets/Images/works/Autoverschrottung/service.png',
        imageMobile: 'assets/Images/works/Autoverschrottung/service-mobile.png',
      },
      ]
    },


    {
      PageName: 'Security campus',
      details: `The security campus is an excellent training provider, specializing in delivering training service on security system field. Our training service is sustainable, accessible, affordable and innovative training solutions for every single professional to meet the criteria for attending the particular course. `,
      indexpage: 'assets/Images/works/security-campus/index.png',
      mobileView: 'assets/Images/works/security-campus/index-mobile.png',
      demolink:'https://deepakvijayan7.github.io/security-campus/'
    },

    {
      PageName: 'Katja-Coaching',
      details: `Katja Kunze - Certified Parenting Method Certified Coach (CPMCC), RYT, LMT I am a mother of two and currently live with my family in Upper Bavaria. My own childhood was shaped by trauma. It took me years to heal from these experiences and return to my true essence.`,
      indexpage: 'assets/Images/works/katja-coaching/index.png',
      mobileView: 'assets/Images/works/katja-coaching/index-mobile.png',

      otherPages: [{
        page: 'About',
        image: 'assets/Images/works/katja-coaching/about.png',
        imageMobile: 'assets/Images/works/katja-coaching/about-mobile.png',
      },
      {
        page: 'Contact',
        image: 'assets/Images/works/katja-coaching/contact.png',
        imageMobile: 'assets/Images/works/katja-coaching/contact-mobile.png',
      },
      {
        page: 'Coaching',
        image: 'assets/Images/works/katja-coaching/coaching.png',
        imageMobile: 'assets/Images/works/katja-coaching/coaching-mobile.png',
      },
      ]
    },
    {
      PageName:'Key-Montage GMBH',
       tools:['html ', ' css ',  ' javascript ',  ' bootstrap'],
      details:`KSpecialized in
      Assembly service in the
      Industrial sector,Assembly service for the industrial sector.`,
      indexpage:'assets/Images/works/key-montage/index.png',
      mobileView: 'assets/Images/works/key-montage/index-mobile.jpg',
      demolink:'https://deepakvijayan7.github.io/key-montage/',
      otherPages: [{
        page: 'about',
        image: 'assets/Images/works/key-montage/about.png',
        imageMobile: 'assets/Images/works/key-montage/about-mobile.jpg',
      },
      {
        page: 'contact',
        image: 'assets/Images/works/key-montage/contact.png',
        imageMobile: 'assets/Images/works/key-montage/contact-mobile.jpg',
      },
      {
        page: 'services',
        image: 'assets/Images/works/key-montage/services.png',
        imageMobile: 'assets/Images/works/key-montage/services-mobile.jpg',
      },
      {
        page: 'Workbench',
        image: 'assets/Images/works/key-montage/workbench.png',
        imageMobile: 'assets/Images/works/key-montage/workbench-mobile.jpg',
      },
      ]
    },
    {
      PageName: 'Vrakela',
      details: `Would you like to realize a construction project? Would you like to renovate your property? Then come to us, because we will advise you without obligation and show you your options. Our comprehensive service will impress you. Our competent team is available around the clock for personal inquiries! Or simply visit us in the Media Harbor in Düsseldorf!`,
      indexpage: 'assets/Images/works/vrakela/index.png',
      mobileView: 'assets/Images/works/vrakela/index-mobile.png',
      otherPages: [{
        page: 'about',
        image: 'assets/Images/works/vrakela/about.png',
        imageMobile: 'assets/Images/works/vrakela/about-mobile.png',
      },
      {
        page: 'contact',
        image: 'assets/Images/works/vrakela/contact.png',
        imageMobile: 'assets/Images/works/vrakela/contact-mobile.png',
      },
      {
        page: 'Referenzen',
        image: 'assets/Images/works/vrakela/referenzen.png',
        imageMobile: 'assets/Images/works/vrakela/referenzen-mobile.png',
      },
      ]
    },

  ]
  Webpage: any
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    $(document).ready(function () {
      $('.mask1').scroll(function () {
        var scroll = $('.mask1').scrollTop();
        if (scroll >= 80) {
          $(".mask1 .opacity-box").hide();
        }
        else {
          $(".mask1 .opacity-box").show();
        }
      });
      $('.mask2').scroll(function () {
        var scroll = $('.mask2').scrollTop();
        if (scroll >= 80) {
          $(".mask2 .opacity-box").hide();
        }
        else {
          $(".mask2 .opacity-box").show();
        }
      });
    });
    this.Webpage = this.route.snapshot.paramMap.get('Webpage');
    $(document).ready(function () {

      $(".otherpages_list li a").click(function () {
        $(".otherpages_list li a").removeClass("active");
        $(this).addClass("active");
      });

      var maskbgHeight = $('.maskbg').height();
      // var maskbgHeights = (maskbgHeight * 99 / 100)
      //   alert($('.maskbg').height());
      // $('.mask1').height(maskbgHeight + 'px')
      var maskPhoneheight = $('.mask-phone').height();
      // var maskPhoneheights = (maskPhoneheight * 4.85 / 100)
      // $('.mask2').css('height',maskPhoneheight + 'px')
    });
  }
  onlaunch() {


  }
  changePages(imageLink: any, imageLinkMobile: any, e) {
    e.preventDefault()
    $(".previewPage").attr("src", imageLink);
    $(".previewPage-mobile").attr("src", imageLinkMobile);
    $('.mask2').scrollTop(0);
    $('.mask1').scrollTop(0);

    // $('.previewPage-mobile').scrollTop(0);
  }
  changePage(imageLink: any, imageLinkMobile: any, e) {
    e.preventDefault()
    $(".previewPage").attr("src", imageLink);
    $(".previewPage-mobile").attr("src", imageLinkMobile);
    $('.mask2').scrollTop(0);
    $('.mask1').scrollTop(0);

  }

}