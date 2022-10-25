import axios from "axios";

// Code goes here!
const form = document.getElementById("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;
const GOOGLE_API_KEY = "aIDJAYDHDE438SS3HFY4JID";
type GooogleCodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<GooogleCodingResponse>(
      `https://www.googleapiadreess?address=${encodeURI(
        enteredAddress
      )}&${GOOGLE_API_KEY}`
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("could not fetch location");
      }
      const coordinates = response.data.results[0].geometry.location;
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}
form.addEventListener("submit", searchAddressHandler);
