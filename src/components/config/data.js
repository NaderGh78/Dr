// service data imgs
import serImg1 from "../../assets/service/serviceImg1.jpg";
import serImg2 from "../../assets/service/serviceImg2.jpg";
import serImg3 from "../../assets/service/serviceImg3.jpg";
import serImg4 from "../../assets/service/serviceImg4.jpg";

// gellery data imgs
import gallery1 from "../../assets/gallery/gallery1.jpg";
import gallery2 from "../../assets/gallery/gallery2.jpg";
import gallery3 from "../../assets/gallery/gallery3.jpg";
import gallery4 from "../../assets/gallery/gallery4.jpg";
import gallery5 from "../../assets/gallery/gallery5.jpg";
import gallery6 from "../../assets/gallery/gallery6.jpg";


// testimonials data imgs
import TestiImg1 from "../../assets/testimonials/testi_1.jpg";
import TestiImg2 from "../../assets/testimonials/testi_2.jpg";
import TestiImg3 from "../../assets/testimonials/testi_3.jpg";
import TestiImg4 from "../../assets/testimonials/testi_4.jpg";


// contact data 
// import Icon1 from "../../assets/contact/location.jpg";
// import Icon2 from "../../assets/contact/contactus.jpg";
// import Icon3 from "../../assets/contact/phone.jpg";
// import Icon4 from "../../assets/contact/timing.jpg";
import { LiaClock, LiaMapMarkerSolid, LiaEnvelopeSolid, LiaPhoneSolid } from "react-icons/lia";

/*===================================*/
/*===================================*/
/*===================================*/

export const ServiceData = [
    {
        id: 1,
        serviceImg: serImg1,
        serviceHeading: "Chronic/cyclic depression",
        serviceDesc: "Characterised by a persistent feeling of sadness, depression has become a common illness today."
    },
    {
        id: 2,
        serviceImg: serImg2,
        serviceHeading: "Bipolar disorder/schizophrenia",
        serviceDesc: "While split personality disorders can be treated today, they require immediate medical attention!"
    },
    {
        id: 3,
        serviceImg: serImg3,
        serviceHeading: "Child & adolescent problems",
        serviceDesc: "It is important to detect psychological problems in children as early as possible in all cases."
    },
    {
        id: 4,
        serviceImg: serImg4,
        serviceHeading: "Violent behaviour in kids & adults",
        serviceDesc: "Anger can transform itself into an extreme form of emotion, leading to violent behaviour."
    }
]

export const GalleryData = [
    {
        id: 1,
        galleryImg: gallery1,
    },
    {
        id: 2,
        galleryImg: gallery2,
    },
    {
        id: 3,
        galleryImg: gallery3,
    },
    {
        id: 4,
        galleryImg: gallery4,
    },
    {
        id: 5,
        galleryImg: gallery5,
    },
    {
        id: 6,
        galleryImg: gallery6,
    },
]

export const VideoData = [
    {
        id: 1,
        videoUrl: "https://www.youtube.com/embed/vcOm9V5tJz0",
        videoDesc: "What Happens During the First Visit with a Psychiatrist"
    },
    {
        id: 2,
        videoUrl: "https://www.youtube.com/embed/AqnGLiWt_34",
        videoDesc: "5 Signs That You Need Therapy"
    },
    {
        id: 3,
        videoUrl: "https://www.youtube.com/embed/DhlRgwdDc-E",
        videoDesc: "Debunking the Myths of OCD"
    },
    {
        id: 4,
        videoUrl: "https://www.youtube.com/embed/FZBa1wXmGGM",
        videoDesc: "10 Common Mental Illnesses"
    },
]

export const TestimonialData = [
    {
        id: 1,
        testiImg: TestiImg1,
        testiName: "faten ahmad",
        testiDesc: "Great first experience! They helped and guided me through everything and I am completely fine now.",
    },
    {
        id: 2,
        testiImg: TestiImg2,
        testiName: "nour sharif",
        testiDesc: "Just loved their work. I would recommend everyone to just go for them without even wasting a single day.",
    },
    {
        id: 3,
        testiImg: TestiImg3,
        testiName: "samia jamil",
        testiDesc: "Great work! I loved their counselling session and the way they answered all my queries.",
    },
    {
        id: 4,
        testiImg: TestiImg4,
        testiName: "ezzat samir",
        testiDesc: "Just loved their work. I would recommend everyone to just go for them without even wasting a single day.",
    }
]

export const ContactData = [
    {
        id: 1,
        icon: LiaMapMarkerSolid,
        title: "Our Office Address",
        contactDesc: "Egypt - Cairo Main Street"
    },
    {
        id: 2,
        icon: LiaEnvelopeSolid,
        title: "General Enquires",
        contactDesc: "example77@gmailcom"
    },
    {
        id: 3,
        icon: LiaPhoneSolid,
        title: "Call Us",
        contactDesc: "+20-123456789"
    },
    {
        id: 4,
        icon: LiaClock,
        title: "Our Timing",
        contactDesc: "Mon - Sun :10:00 AM - 07:00 PM"
    }
] 