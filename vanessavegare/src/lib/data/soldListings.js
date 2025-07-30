import { writable } from "svelte/store";

const soldListingsStore = writable([
    {
        id: "1",
        image: "/images/1-1.webp",
        price: "$102,000",
        lotSize: "39,204.00 sqft",
        houseSize: "N/A",
        propertyLink: "https://portal.onehome.com/en-US/property/aotf~1062063365~CRMLSM?token=eyJPU04iOiJDUk1MU00iLCJ0eXBlIjoiMCIsInNldGlkIjoiODI5NzQ2OTg0Iiwic2V0a2V5IjoiMzk5IiwiZW1haWwiOiJlZHVhcmRvLnJleWVzLjE0NTI5N0BnbWFpbC5jb20iLCJyZXNvdXJjZWlkIjowLCJhZ2VudGlkIjoyMjA2MjE2LCJsaXN0aW5naWQiOiI0MTA0MDEyMTEiLCJWaWV3TW9kZSI6IjEifQ%3D%3D&searchId=2bbea256-1896-3795-b5d2-96cd91fffb95",
        sold: "Sold"
      },
]);

export default soldListingsStore;