import client from "./client";

const endpoint = "/appliedlistings";

const getAppliedListings = () => client.get(endpoint);

export const addAppliedListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("time", listing.time);
  data.append("place", listing.place);
  data.append("department", listing.department);

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addAppliedListing,
  getAppliedListings,
};
