import { lazy } from "react";

const MembershipList = lazy(() => import("./index"));
const AddMembership = lazy(() => import("./add"));

// const InvoiceDetails = lazy(() => import("./InvoiceDetails"));

const membershipsRoutes = [
  {
    path: "/memberships",
    component: MembershipList
  },
  {
    path: "/memberships/new",
    component: AddMembership
  }
];

export default membershipsRoutes;