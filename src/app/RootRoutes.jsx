import React from "react";
import { Redirect } from "react-router-dom";
import dashboardRoutes from "./views/dashboard/dashboardRoutes";
import sessionsRoutes from "./views/sessions/sessionsRoutes";
import AuthGuard from "./auth/AuthGuard";
import widgetsRoute from "./views/widgets/widgetsRoute";
import invoiceRoutes from "./views/app/invoice/invoiceRoutes";
import calendarRoutes from "./views/app/calendar/calendarRoutes";
import taskManagerRoutes from "./views/app/task-manager/taskManagerRoutes";
import contactRoutes from "./views/app/contact/contactRoutes";
import roomsRoutes from "./views/rooms/roomRoutes";
import membershipsRoutes from "./views/memberships/membershipRoutes";

import MembershipList from "./views/memberships";
import AddMembership from "./views/memberships/add";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard/v1" />
  }
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />
  }
];

const routes = [
  ...sessionsRoutes,
  {
    path: "/",
    component: AuthGuard,
    routes: [
      ...dashboardRoutes,
      ...widgetsRoute,
      ...invoiceRoutes,
      ...taskManagerRoutes,
      ...calendarRoutes,
      ...contactRoutes,
      ...roomsRoutes,
      ...membershipsRoutes,
      ...redirectRoute,
      ...errorRoute,
    ]
  },
  {
    path: "/memberships",
    component: MembershipList,
    children: [
      {
        path: "new",
        component: AddMembership,
      }
    ],
    routes: [
      ...membershipsRoutes,
      ...redirectRoute,
      ...errorRoute,
    ]
  },
  {
    path: "/memberships/new",
    component: AddMembership,
    // children: [
    //   {
    //     action: "/new",
    //     component: AddMembership,
    //   }
    // ],
    routes: [
      // ...membershipsRoutes,
      ...redirectRoute,
      ...errorRoute,
    ]
  }
];

export default routes;
