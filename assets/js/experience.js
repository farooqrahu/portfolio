AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
    {
        title: "Sr. Backend Developer (Remote)",
        cardImage: "assets/images/experience-page/i2f.jpg",
        place: "IdeaToLife (Pvt) Ltd.",
        time: "Nov 2021 – Present",
        desp: "<li>PURPL (Wallet Application)</li>" +
            "http://purplme.com/",
    },
    {
        title: "Sr. Software Engineer",
        cardImage: "assets/images/experience-page/vrg.jpg",
        place: "VRG (Pvt) Ltd.",
        time: "Jun 2019 – Nov 2021",
        desp: "<li>Meezan Bank (Branchless Banking) </li>" +
            "- Branchless Banking used to deliver the financial services without relying on bank branches.\n" +
            "Received Appreciation award for timely completion for project Assan Mobile Account (AMA).\n",
    },

    {
        title: "Sr. Software Engineer",
        cardImage: "assets/images/experience-page/access.jpg",
        place: "Access Group (Pvt) Ltd.",
        time: "April 2018 – Jun-2019",
        desp: "<li>MCB Lite </li>" +
            "- Branchless Banking used to deliver the financial services without relying on bank branches.\n" +
            "<li>MCB HRA </li>" +
            "- Branchless Banking Portal for Home Remittances account an unmatched service for overseas Pakistanis to send money straight to their account.\n" +
            "<li>UBANK Internet Banking Portal </li>" +
            "- Internet Banking Portal for bank's customers to use their account online for internal fund transfers, IBFT, mobile top ups, bill payment, beneficiary management and more likewise features. \n",
    },
    {
        title: "Software Engineer",
        cardImage: "assets/images/experience-page/binary.jpg",
        place: "Binary Vibes (Pvt) Ltd.",
        time: "Jan 2016 - March 2018",
        desp: "<li>IFG - Information Management System</li>" +
            "<li>Weapon Management System (WMS) </li>" +
            "- This project developed for police department for tracing end-to-end weapon history buyers to sellers." +
            "<li>Catalyst (Airline Ticketing System) </li>" +
            "- This project developed for travel agents to reserve passengers airline tickets and generate there sale invoices." +
            "<li>TIMS (Travel Insurance Management System) </li>" +
            "- This project developed for purchasing travle inusrance.",
    },
    {
        title: "Consultant / (Software Engineer)",
        cardImage: "assets/images/experience-page/abacus.png",
        place: "Abacus Consulting",
        time: "June 2013 - Dec 2015",
        desp: "<li>UPAISA (Branchless Banking)</li>" +
            "<li>HBL (Branchless Banking)</li>" +
            "- Wallet Application for corporate companies used to deliver the financial services for thier employees." +
            "<li>Internet Banking (Fusion)</li>" +
            "- SAP project for bank's end customers to perform online transactions fund transfers, bill payments, beneficiary management, salary disbursements etc.",
    },
    {
        title: "Software Developer",
        cardImage: "assets/images/experience-page/Best-logo.png",
        place: "Bahria Enterprise Systems & Technologies (BEST)",
        time: "(Jun 2012 -  Jun 2013)",
        desp: "<li>ERP project developed for KDLB (Karachi dock labor board). </li>",
    }


];

const showCards2 = () => {
    let output = "";
    exp.forEach(
        ({title, cardImage, place, time, desp}) =>
            (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
    );
    experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards
//
// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//     {
//         title: "GirlScript Summer Of Code 2020",
//         cardImage: "assets/images/experience-page/1.jpg",
//         description:
//             "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
//     },
//     {
//         title: "StudentCode-in 2020",
//         cardImage: "assets/images/experience-page/2.jpg",
//         description:
//             "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
//     },
//     {
//         title: "PClub Summer Of Code 2020",
//         cardImage: "assets/images/experience-page/3.jpg",
//         description:
//             "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
//     },
//     {
//         title: "Hakin-Codes",
//         cardImage: "assets/images/experience-page/4.jpg",
//         description:
//             "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
//     },
// ];
//
// const showCards = () => {
//     let output = "";
//     volunteershipcards.forEach(
//         ({title, cardImage, description}) =>
//             (output += `
//       <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
//
//       <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
//       <div class="content">
//           <h2 class="volunteerTitle">${title}</h2><br>
//           <p class="copy">${description}</p></div>
//
//       </div>
//       `)
//     );
//     volunteership.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section
//
// const hackathonsection = document.querySelector(".hackathon-section");
// const mentor = [
//     {
//         title: "The Uplift Project",
//         subtitle: "Mentor",
//         image: "assets/images/experience-page/uplift.png",
//         desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
//     },
//     {
//         title: "ULHacks",
//         subtitle: "Judge",
//         image: "assets/images/experience-page/ulhacks.png",
//         desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
//     },
//     {
//         title: "WaffleHacks",
//         subtitle: "Judge",
//         image: "assets/images/experience-page/wafflehacks.png",
//         desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
//     },
//     {
//         title: "Elevate Tech",
//         subtitle: "Judge",
//         image: "assets/images/experience-page/elevate.png",
//         desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
//     },
//     {
//         title: "PitchTeen",
//         subtitle: "Judge",
//         image: "assets/images/experience-page/pitchteen.png",
//         desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
//     },
//     {
//         title: "Hack-A-Solution",
//         subtitle: "Judge",
//         image: "assets/images/experience-page/hackasolution.png",
//         desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
//     },
//     {
//         title: "UniGlobe Hacks",
//         subtitle: "Judge",
//         image: "assets/images/experience-page/uniglobe.png",
//         desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
//     },
//     {
//         title: "AtlasHacks",
//         subtitle: "Mentor",
//         image: "assets/images/experience-page/atlas.png",
//         desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
//     },
//     {
//         title: "NeoHacks",
//         subtitle: "Judge",
//         image: "assets/images/experience-page/neo.png",
//         desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
//     },
//     {
//         title: "Mission Inspired",
//         subtitle: "Judge",
//         image: "assets/images/experience-page/mission.png",
//         desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
//     },
//     {
//         title: "Hack3",
//         subtitle: "Judge",
//         image: "assets/images/experience-page/hack3.png",
//         desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
//     },
//     {
//         title: "JITHack",
//         subtitle: "Mentor",
//         image: "assets/images/experience-page/jithack.png",
//         desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
//     },
//     {
//         title: "Recess Hacks",
//         subtitle: "Mentor",
//         image: "assets/images/experience-page/recess.png",
//         desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
//     },
//     {
//         title: "Citro Tech",
//         subtitle: "Mentor",
//         image: "assets/images/experience-page/citro.png",
//         desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
//     },
//     {
//         title: "NHacks",
//         subtitle: "Judge",
//         image: "assets/images/experience-page/nhacks.png",
//         desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
//     },
// ];
//
// const showCards3 = () => {
//     let output = "";
//     mentor.forEach(
//         ({title, image, subtitle, desp}) =>
//             (output += `
//       <div class="blog-slider__item swiper-slide">
//         <div class="blog-slider__img">
//             <img src="${image}" alt="">
//         </div>
//         <div class="blog-slider__content">
//           <div class="blog-slider__title">${title}</div>
//           <span class="blog-slider__code">${subtitle}</span>
//           <div class="blog-slider__text">${desp}</div>
//           <a href="#" class="blog-slider__button">Read More</a>
//         </div>
//       </div>
//       `)
//     );
//     hackathonsection.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards3);
