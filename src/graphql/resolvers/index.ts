import merge from "lodash.merge";
import { bookingResolvers } from "./Booking";
import { listingResolvers } from "./Listing";
import { userResolver } from "./User";
import { viewerResolvers } from "./Viewer";

export const resolvers = merge(
  bookingResolvers,
  listingResolvers,
  viewerResolvers,
  userResolver
);
