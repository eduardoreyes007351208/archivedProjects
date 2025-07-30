<script>
  import Footer from "../lib/footer.svelte";
  import Header from "../lib/header.svelte";
  import headshot from "$lib/assets/portraitnormal.webp";
  import locationStore from "../lib/data/locations.js";
  import contactCardStore from "../lib/data/contactCards.js";
  import activeListingsStore from "../lib/data/activeListings.js";
  import soldListingsStore from "../lib/data/soldListings.js";

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

  function handleAnchorClick(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace("#", "");
    const anchor = document.getElementById(anchorId);
    window.scrollTo({
      top: anchor.offsetTop,
      behavior: "smooth",
    });
  }
</script>

<Header />

<section id="hero">
  <div id="heroDiv">
    <div id="heroText">
      <h1>Turning The Key to Your Future</h1>
      <p>Your CAPRE Real Estate Partner</p>
      <a href="/#about">
        <button id="heroBttn">Meet Vanessa</button>
      </a>
    </div>
    <div id="heroImage">
      <img src={headshot} alt="headshot" id="headshot" />
    </div>
  </div>
  <div id="heroDiv2">
    <div id="heroText">
      <h1>Turning The Key to Your Future</h1>
    </div>
    <div id="heroImage">
      <img src={headshot} alt="headshot" id="headshot" />
    </div>
    <div id="heroText">
      <p>Your CAPRE Real Estate Partner</p>
      <a href="/#about">
        <button id="heroBttn">Meet Vanessa</button>
      </a>
    </div>
  </div>
</section>

<section id="about">
  <div id="abouth1">
    <h1>Get to Know Me</h1>
  </div>

  <div id="aboutDiv">
    <div id="aboutTB">
      <div id="aboutText">
        <p>
          I am so excited to share with you all the BIG NEWS! I am a Real Estate
          Agent! I have recently joined the amazing team at CAPRE. I thought I
          would take this time to introduce myself! My name is Vanessa Vega. I
          am an alumni from CSUSB where I received my bachelors in Business
          Admin with a concentration in Real Estate. I also love helping people
          making their home the home of their dreams with interior design! I
          pride myself on helping others achieve all their goals! Whether your
          looking to buy, sell, or see where the market is at, I would love to
          help you navigate the current market!
        </p>
      </div>
      <div id="aboutBttns">
        <a href="/#contact">
          <button id="aboutBttn">Contact Me</button>
        </a>
        <a href="/#listings">
          <button id="aboutBttn">View Listings</button>
        </a>
      </div>
    </div>
    <div id="aboutImage">
      <img src={headshot} alt="headshot" id="aboutheadshot" />
    </div>
  </div>

  <div id="aboutDiv2">
    <div id="abouth1-2">
      <h1>Get to Know Me</h1>
    </div>
    <div id="aboutImage">
      <img src={headshot} alt="headshot" id="aboutheadshot" />
    </div>

    <div id="aboutText">
      <p>
        I am so excited to share with you all the BIG NEWS! I am a Real Estate
        Agent! I have recently joined the amazing team at CAPRE. I thought I
        would take this time to introduce myself! My name is Vanessa Vega. I am
        an alumni from CSUSB where I received my bachelors in Business Admin
        with a concentration in Real Estate. I also love helping people making
        their home the home of their dreams with interior design! I pride myself
        on helping others achieve all their goals! Whether your looking to buy,
        sell, or see where the market is at, I would love to help you navigate
        the current market!
      </p>
    </div>
    <div id="aboutBttns">
      <a href="/#contact">
        <button id="aboutBttn">Contact Me</button>
      </a>
      <a href="/#listings">
        <button id="aboutBttn">View Listings</button>
      </a>
    </div>
  </div>
</section>

<section id="locations">
  <div id="locationDiv">
    <div id="locationTB">
      <div id="locationText">
        <h1>Need Help in These Areas?</h1>
      </div>
      <div id="locationButtons">
        <a href="/#contact">
          <button id="locationButton">Contact to Sell</button>
        </a>
        <a href="/#listings">
          <button id="locationButton">Listings</button>
        </a>
      </div>
    </div>
    <div id="locationTiles">
      {#each locations as location}
        <div id="locationTile">
          <p>{location.city}</p>
        </div>
      {/each}
    </div>
  </div>
  <div id="locationDiv2">
    <div id="locationText">
      <h1>Need Help in These Areas?</h1>
    </div>

    <div id="locationTiles">
      {#each locations as location}
        <div id="locationTile">
          <p>{location.city}</p>
        </div>
      {/each}
    </div>
    <div id="locationButtons">
      <a href="/#contact">
        <button id="locationButton">Contact to Sell</button>
      </a>
      <a href="/#listings">
        <button id="locationButton">View Listings</button>
      </a>
    </div>
  </div>
</section>

<section id="listings">
  <div id="centerDiv">
    <div id="listingText">
      <h1>Listings</h1>
    </div>
    <div id="activeListingDiv">
      {#each activeListings as aList}
        <div id="listingCard">
          <img src={aList.image} alt="" id="listingImage" />
          <p>Price: {aList.price}</p>
          <p>Lot Size: {aList.lotSize}</p>
          <p>House Size: {aList.houseSize}</p>
          <button id="listingButton">
            <a href={aList.propertyLink} target="_blank">View Property</a>
          </button>
        </div>
      {/each}
    </div>
    <div id="listingText">
      <h1>Sold</h1>
    </div>
    <div id="activeListingDiv">
      {#each soldListings as sList}
        <div id="listingCard">
          <img src={sList.image} alt="" id="listingImage" />
          <p>Price: {sList.price}</p>
          <p>Lost Size: {sList.lotSize}</p>
          <p>House Size: {sList.houseSize}</p>
          <p id="soldText">{sList.sold}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section id="contact">
  <div id="contactDiv">
    <div id="contactHeading">
      <h1>Ready to Buy or Sell? Get in Touch Today!</h1>
    </div>
    <div id="contactText">
      <h2>Vanessa Vega</h2>
    </div>
    <div id="contactCards">
      {#each contactCard as contcard}
        <div id="contactCard">
          <a href={contcard.href} id="contactA" target="_blank">
            <svg
              id="svg"
              xmlns="http://www.w3.org/2000/svg"
              width={contcard.size}
              height={contcard.size}
              fill="#c49841"
              viewBox="-4.25 0 24 24"
            >
              <path d={contcard.path} />
              <path d={contcard.path2} />
            </svg>
            <p>{contcard.text}</p>
          </a>
        </div>
      {/each}
    </div>
  </div>
  <div id="contactDiv2">
    <div id="contactHeading">
      <h1>Ready to Buy or Sell? Get in Touch Today!</h1>
    </div>
    <div id="contactText">
      <h2>Vanessa Vega</h2>
    </div>
    <div id="contactCards">
      {#each contactCard as contcard}
        <div id="contactCard">
          <a href={contcard.href} id="contactA" target="_blank">
            <svg
              id="svg"
              xmlns="http://www.w3.org/2000/svg"
              width={contcard.size}
              height={contcard.size}
              fill="#c49841"
              viewBox="-4.25 0 24 24"
            >
              <path d={contcard.path} />
              <path d={contcard.path2} />
            </svg>
            <p>{contcard.text2}</p>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>

<Footer />
