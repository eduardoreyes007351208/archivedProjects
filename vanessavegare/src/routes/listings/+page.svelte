<script>
  import Header from "../../lib/header.svelte";
  import Footer from "../../lib/footer.svelte";
  import activeListingsStore from "../../lib/data/activeListings.js";
  import soldListingsStore from "../../lib/data/soldListings";
  

  let activeListings;
  activeListingsStore.subscribe((data) => {
    activeListings = data;
  });

  let soldListings;
  soldListingsStore.subscribe((data) => {
    soldListings = data;
  });

</script>

<Header />

<section id="active">
  <div id="centerDiv">
    <div id="activeListingDiv">
      <div id="listingText">
        <h1>Listings</h1>
      </div>
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
  </div>
</section>

<section id="sold">
 <div id="centerDiv">
    <div id="activeListingDiv">
      <div id="listingText">
        <h1>Sold</h1>
      </div>
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

<Footer />
