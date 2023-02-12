import { lazy } from "react";

const RoomsList = lazy(() => import("./index"));

// const InvoiceDetails = lazy(() => import("./InvoiceDetails"));

const roomsRoutes = [
  {
    path: "/rooms",
    component: RoomsList
  },
//   {
//     path: "/invoice/:id",
//     component: InvoiceDetails
//   }
];

export default roomsRoutes;