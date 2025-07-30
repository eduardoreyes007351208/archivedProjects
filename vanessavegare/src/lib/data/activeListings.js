import { writable } from "svelte/store";

const activeListingsStore = writable([
  {
    id: "1",
    image: "/images/2-2.webp",
    price: "$323,000",
    lotSize: "3,420.00 sqft",
    houseSize: "623 sqft",
    propertyLink: "https://portal.onehome.com/en-US/property/aotf~1079121010~CRMLSM?token=eyJPU04iOiJDUk1MU00iLCJ0eXBlIjoiMCIsInNldGlkIjoiODU5ODM3NjU4Iiwic2V0a2V5IjoiMzk4IiwiZW1haWwiOiJsYWxvc29jY2VyMzA3QGdtYWlsLmNvbSIsInJlc291cmNlaWQiOjAsImFnZW50aWQiOjIyMDYyMTYsIlZpZXdNb2RlIjoiMSJ9&searchId=90cc7b05-6616-34e8-85eb-b6e172ca83ef"
  },
  {
    id: "2",
    image: "/images/3-1.webp",
    price: "$19,000",
    lotSize: "3,400.00 sqft",
    houseSize: "N/A",
    propertyLink: "https://portal.onehome.com/en-US/property/aotf~1079446955~CRMLSM?token=eyJPU04iOiJDUk1MU00iLCJ0eXBlIjoiMCIsInNldGlkIjoiODU5ODM3NjY5Iiwic2V0a2V5IjoiMzM0IiwiZW1haWwiOiJsYWxvc29jY2VyMzA3QGdtYWlsLmNvbSIsInJlc291cmNlaWQiOjAsImFnZW50aWQiOjIyMDYyMTYsImxpc3RpbmdpZCI6IjQyMTAwMzYwMyIsIlZpZXdNb2RlIjoiMSJ9&searchId=e645d2e1-6fb3-383e-ab3d-168da2d8d11c"
  },
  {
    id: "3",
    image: "/images/4-1.webp",
    price: "$3,000",
    lotSize: "3,440.00 sqft",
    houseSize: "N/A",
    propertyLink: "https://portal.onehome.com/en-US/property/aotf~1077521619~CRMLSM?token=eyJPU04iOiJDUk1MU00iLCJ0eXBlIjoiMCIsInNldGlkIjoiODU5ODM3NjY5Iiwic2V0a2V5IjoiMzM0IiwiZW1haWwiOiJsYWxvc29jY2VyMzA3QGdtYWlsLmNvbSIsInJlc291cmNlaWQiOjAsImFnZW50aWQiOjIyMDYyMTYsImxpc3RpbmdpZCI6IjQxOTAxNTk4NSIsIlZpZXdNb2RlIjoiMSJ9&searchId=e645d2e1-6fb3-383e-ab3d-168da2d8d11c"
  },
  {
    id: "4",
    image: "/images/5-1.webp",
    price: "$3,000",
    lotSize: "3,480.00 sqft",
    houseSize: "N/A",
    propertyLink: "https://portal.onehome.com/en-US/property/aotf~1077521512~CRMLSM?token=eyJPU04iOiJDUk1MU00iLCJ0eXBlIjoiMCIsInNldGlkIjoiODU5ODM3NjY5Iiwic2V0a2V5IjoiMzM0IiwiZW1haWwiOiJsYWxvc29jY2VyMzA3QGdtYWlsLmNvbSIsInJlc291cmNlaWQiOjAsImFnZW50aWQiOjIyMDYyMTYsImxpc3RpbmdpZCI6IjQxOTAxNTc4MCIsIlZpZXdNb2RlIjoiMSJ9&searchId=e645d2e1-6fb3-383e-ab3d-168da2d8d11c"
  },
  {
    id: "5",
    image: "/images/6-1.webp",
    price: "$3,400",
    lotSize: "3,720.00 sqft",
    houseSize: "N/A",
    propertyLink: "https://portal.onehome.com/en-US/property/aotf~1077521409~CRMLSM?token=eyJPU04iOiJDUk1MU00iLCJ0eXBlIjoiMCIsInNldGlkIjoiODU5ODM3NjY5Iiwic2V0a2V5IjoiMzM0IiwiZW1haWwiOiJsYWxvc29jY2VyMzA3QGdtYWlsLmNvbSIsInJlc291cmNlaWQiOjAsImFnZW50aWQiOjIyMDYyMTYsImxpc3RpbmdpZCI6IjQxOTAxNTM1NCIsIlZpZXdNb2RlIjoiMSJ9&searchId=e645d2e1-6fb3-383e-ab3d-168da2d8d11c"
  },
  {
    id: "6",
    image: "/images/7-1.webp",
    price: "$449,000",
    lotSize: "12,744.00 sqft",
    houseSize: "N/A",
    propertyLink: "https://portal.onehome.com/en-US/property/aotf~1028382504~CRMLSM?token=eyJPU04iOiJDUk1MU00iLCJ0eXBlIjoiMCIsInNldGlkIjoiODU5ODM3NjY5Iiwic2V0a2V5IjoiMzM0IiwiZW1haWwiOiJsYWxvc29jY2VyMzA3QGdtYWlsLmNvbSIsInJlc291cmNlaWQiOjAsImFnZW50aWQiOjIyMDYyMTYsImxpc3RpbmdpZCI6IjM4Njk5MjkyNyIsIlZpZXdNb2RlIjoiMSJ9&searchId=e645d2e1-6fb3-383e-ab3d-168da2d8d11c"
  },
  {
    id: "7",
    image: "/images/8-1.webp",
    price: "$5,500",
    lotSize: "3,450.00 sqft",
    houseSize: "N/A",
    propertyLink: "https://portal.onehome.com/en-US/property/aotf~1088972651~CRMLSM?token=eyJPU04iOiJDUk1MU00iLCJ0eXBlIjoiMCIsInNldGlkIjoiODY1MTA3OTIzIiwic2V0a2V5IjoiMTA1IiwiZW1haWwiOiJlZHVhcmRvLnJleWVzLjE0NTI5N0BnbWFpbC5jb20iLCJyZXNvdXJjZWlkIjowLCJhZ2VudGlkIjoyMjA2MjE2LCJsaXN0aW5naWQiOiI0MjQxMDQyMTkiLCJWaWV3TW9kZSI6IjEifQ%3D%3D&searchId=4d68070b-9506-3bf2-92b1-9f68803a65c3"
  }
]);


export default activeListingsStore;
