import { c as create_ssr_component, v as validate_component, d as each, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { a as activeListingsStore, s as soldListingsStore, H as Header, F as Footer } from "../../../chunks/soldListings.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeListings;
  activeListingsStore.subscribe((data) => {
    activeListings = data;
  });
  let soldListings;
  soldListingsStore.subscribe((data) => {
    soldListings = data;
  });
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <section id="active"><div id="centerDiv"><div id="activeListingDiv"><div id="listingText" data-svelte-h="svelte-bvmp6t"><h1>Listings</h1></div> ${each(activeListings, (aList) => {
    return `<div id="listingCard"><img${add_attribute("src", aList.image, 0)} alt="" id="listingImage"> <p>Price: ${escape(aList.price)}</p> <p>Lot Size: ${escape(aList.lotSize)}</p> <p>House Size: ${escape(aList.houseSize)}</p> <button id="listingButton"><a${add_attribute("href", aList.propertyLink, 0)} target="_blank">View Property</a></button> </div>`;
  })}</div></div></section> <section id="sold"><div id="centerDiv"><div id="activeListingDiv"><div id="listingText" data-svelte-h="svelte-2l548s"><h1>Sold</h1></div> ${each(soldListings, (sList) => {
    return `<div id="listingCard"><img${add_attribute("src", sList.image, 0)} alt="" id="listingImage"> <p>Price: ${escape(sList.price)}</p> <p>Lost Size: ${escape(sList.lotSize)}</p> <p>House Size: ${escape(sList.houseSize)}</p> <p id="soldText">${escape(sList.sold)}</p> </div>`;
  })}</div></div></section> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
