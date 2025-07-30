import { c as create_ssr_component, v as validate_component, b as add_attribute, d as each, e as escape } from "../../chunks/ssr.js";
import { a as activeListingsStore, s as soldListingsStore, H as Header, F as Footer } from "../../chunks/soldListings.js";
import { w as writable } from "../../chunks/index.js";
const headshot = "/_app/immutable/assets/portraitnormal.DK39bBnI.webp";
const locationStore = writable([
  {
    id: "1",
    city: "Lake Arrowhead"
  },
  {
    id: "2",
    city: "Crestline"
  },
  {
    id: "3",
    city: "Running Springs"
  },
  {
    id: "4",
    city: "Twin Peaks"
  },
  {
    id: "5",
    city: "Redlands"
  },
  {
    id: "6",
    city: "Inland Empire"
  },
  {
    id: "7",
    city: "Rancho Cucamonga"
  },
  {
    id: "8",
    city: "Palm Springs"
  }
]);
const contactCardStore = writable([
  {
    id: 1,
    href: "mailto:vanessavegakarina@gmail.com",
    xmlns: "http://www.w3.org/2000/svg",
    size: 80,
    class: "bi bi-envelope-fill",
    path: "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z",
    path2: "",
    text: "vanessavegakarina@gmail.com",
    text2: "Email"
  },
  {
    id: 2,
    href: "tel:909-746-9872",
    xmlns: "http://www.w3.org/2000/svg",
    size: 80,
    class: "bi bi-telephone-fill",
    path: "M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z",
    path2: "",
    text: "(909)746-9872",
    text2: "Call"
  },
  {
    id: 3,
    href: "https://maps.app.goo.gl/r48CgSrUy6ZZFQbr8",
    xmlns: "http://www.w3.org/2000/svg",
    size: 80,
    class: "bi bi-house-fill",
    path: "M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z",
    path2: "m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z",
    text: "28200 Hwy 189, Bldg G Lake Arrowhead, CA 92352",
    text2: "Address"
  },
  {
    id: 4,
    href: "https://www.instagram.com/vanessavega_re?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
    xmlns: "http://www.w3.org/2000/svg",
    size: 80,
    class: "bi bi-instagram",
    path: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334",
    path2: "",
    text: "@vanessavega_re",
    text2: "Instagram"
  }
]);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let locations;
  locationStore.subscribe((data) => {
    locations = data;
  });
  let contactCard;
  contactCardStore.subscribe((data) => {
    contactCard = data;
  });
  let activeListings;
  activeListingsStore.subscribe((data) => {
    activeListings = data;
  });
  let soldListings;
  soldListingsStore.subscribe((data) => {
    soldListings = data;
  });
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <section id="hero" data-svelte-h="svelte-1cwji1s"><div id="heroDiv"><div id="heroText"><h1>Turning The Key to Your Future</h1> <p>Your CAPRE Real Estate Partner</p> <a href="/#about"><button id="heroBttn">Meet Vanessa</button></a></div> <div id="heroImage"><img${add_attribute("src", headshot, 0)} alt="headshot" id="headshot"></div></div> <div id="heroDiv2"><div id="heroText"><h1>Turning The Key to Your Future</h1></div> <div id="heroImage"><img${add_attribute("src", headshot, 0)} alt="headshot" id="headshot"></div> <div id="heroText"><p>Your CAPRE Real Estate Partner</p> <a href="/#about"><button id="heroBttn">Meet Vanessa</button></a></div></div></section> <section id="about" data-svelte-h="svelte-1ik6igi"><div id="abouth1"><h1>Get to Know Me</h1></div> <div id="aboutDiv"><div id="aboutTB"><div id="aboutText"><p>I am so excited to share with you all the BIG NEWS! I am a Real Estate
          Agent! I have recently joined the amazing team at CAPRE. I thought I
          would take this time to introduce myself! My name is Vanessa Vega. I
          am an alumni from CSUSB where I received my bachelors in Business
          Admin with a concentration in Real Estate. I also love helping people
          making their home the home of their dreams with interior design! I
          pride myself on helping others achieve all their goals! Whether your
          looking to buy, sell, or see where the market is at, I would love to
          help you navigate the current market!</p></div> <div id="aboutBttns"><a href="/#contact"><button id="aboutBttn">Contact Me</button></a> <a href="/#listings"><button id="aboutBttn">View Listings</button></a></div></div> <div id="aboutImage"><img${add_attribute("src", headshot, 0)} alt="headshot" id="aboutheadshot"></div></div> <div id="aboutDiv2"><div id="abouth1-2"><h1>Get to Know Me</h1></div> <div id="aboutImage"><img${add_attribute("src", headshot, 0)} alt="headshot" id="aboutheadshot"></div> <div id="aboutText"><p>I am so excited to share with you all the BIG NEWS! I am a Real Estate
        Agent! I have recently joined the amazing team at CAPRE. I thought I
        would take this time to introduce myself! My name is Vanessa Vega. I am
        an alumni from CSUSB where I received my bachelors in Business Admin
        with a concentration in Real Estate. I also love helping people making
        their home the home of their dreams with interior design! I pride myself
        on helping others achieve all their goals! Whether your looking to buy,
        sell, or see where the market is at, I would love to help you navigate
        the current market!</p></div> <div id="aboutBttns"><a href="/#contact"><button id="aboutBttn">Contact Me</button></a> <a href="/#listings"><button id="aboutBttn">View Listings</button></a></div></div></section> <section id="locations"><div id="locationDiv"><div id="locationTB" data-svelte-h="svelte-1k2ejf9"><div id="locationText"><h1>Need Help in These Areas?</h1></div> <div id="locationButtons"><a href="/#contact"><button id="locationButton">Contact to Sell</button></a> <a href="/#listings"><button id="locationButton">Listings</button></a></div></div> <div id="locationTiles">${each(locations, (location) => {
    return `<div id="locationTile"><p>${escape(location.city)}</p> </div>`;
  })}</div></div> <div id="locationDiv2"><div id="locationText" data-svelte-h="svelte-1d5afc7"><h1>Need Help in These Areas?</h1></div> <div id="locationTiles">${each(locations, (location) => {
    return `<div id="locationTile"><p>${escape(location.city)}</p> </div>`;
  })}</div> <div id="locationButtons" data-svelte-h="svelte-1kkikdq"><a href="/#contact"><button id="locationButton">Contact to Sell</button></a> <a href="/#listings"><button id="locationButton">View Listings</button></a></div></div></section> <section id="listings"><div id="centerDiv"><div id="listingText" data-svelte-h="svelte-bblybp"><h1>Listings</h1></div> <div id="activeListingDiv">${each(activeListings, (aList) => {
    return `<div id="listingCard"><img${add_attribute("src", aList.image, 0)} alt="" id="listingImage"> <p>Price: ${escape(aList.price)}</p> <p>Lot Size: ${escape(aList.lotSize)}</p> <p>House Size: ${escape(aList.houseSize)}</p> <button id="listingButton"><a${add_attribute("href", aList.propertyLink, 0)} target="_blank">View Property</a></button> </div>`;
  })}</div> <div id="listingText" data-svelte-h="svelte-1k1z8os"><h1>Sold</h1></div> <div id="activeListingDiv">${each(soldListings, (sList) => {
    return `<div id="listingCard"><img${add_attribute("src", sList.image, 0)} alt="" id="listingImage"> <p>Price: ${escape(sList.price)}</p> <p>Lost Size: ${escape(sList.lotSize)}</p> <p>House Size: ${escape(sList.houseSize)}</p> <p id="soldText">${escape(sList.sold)}</p> </div>`;
  })}</div></div></section> <section id="contact"><div id="contactDiv"><div id="contactHeading" data-svelte-h="svelte-1az80e1"><h1>Ready to Buy or Sell? Get in Touch Today!</h1></div> <div id="contactText" data-svelte-h="svelte-bm3f3m"><h2>Vanessa Vega</h2></div> <div id="contactCards">${each(contactCard, (contcard) => {
    return `<div id="contactCard"><a${add_attribute("href", contcard.href, 0)} id="contactA" target="_blank"><svg id="svg" xmlns="http://www.w3.org/2000/svg"${add_attribute("width", contcard.size, 0)}${add_attribute("height", contcard.size, 0)} fill="#c49841" viewBox="-4.25 0 24 24"><path${add_attribute("d", contcard.path, 0)}></path><path${add_attribute("d", contcard.path2, 0)}></path></svg> <p>${escape(contcard.text)}</p></a> </div>`;
  })}</div></div> <div id="contactDiv2"><div id="contactHeading" data-svelte-h="svelte-1az80e1"><h1>Ready to Buy or Sell? Get in Touch Today!</h1></div> <div id="contactText" data-svelte-h="svelte-bm3f3m"><h2>Vanessa Vega</h2></div> <div id="contactCards">${each(contactCard, (contcard) => {
    return `<div id="contactCard"><a${add_attribute("href", contcard.href, 0)} id="contactA" target="_blank"><svg id="svg" xmlns="http://www.w3.org/2000/svg"${add_attribute("width", contcard.size, 0)}${add_attribute("height", contcard.size, 0)} fill="#c49841" viewBox="-4.25 0 24 24"><path${add_attribute("d", contcard.path, 0)}></path><path${add_attribute("d", contcard.path2, 0)}></path></svg> <p>${escape(contcard.text2)}</p></a> </div>`;
  })}</div></div></section> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
