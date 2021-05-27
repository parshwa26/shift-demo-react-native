import client from "./client";

const endpoint = "/listings";
const endpoint1 = "/appliedlistings";

const getListings = () => client.get(endpoint);

export const deleteListing = (listing) => {
  return client.post(endpoint, { id: listing.id });
};

export const addToListing = (listing, onUploadProgress) => {
  return client.post(
    endpoint1,
    {
      title: listing.title,
      time: listing.time,
      place: listing.place,
      department: listing.department,
    },
    {
      onUploadProgress: (progress) =>
        onUploadProgress(progress.loaded / progress.total),
    }
  );
};
export default {
  deleteListing,
  getListings,
  addToListing,
};
