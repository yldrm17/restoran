import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer NPQidacmXxeMMYL7b-yz0Pfhzyd9LjD3xQ5SwW5C4eunLH_CirGk0fVLOR43a_VR31PXba1da84qzVemdWHw8OWTzoSJtfJnHCaDvb--FblSg9FAK5b5ZRIFnYgDZXYx",
  },
});
