import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@prevperdas/notas-fiscais",
  app: () => System.import("prevperdas-notas-fiscais.js"),
  activeWhen: ["/notas"],
});

// registerApplication({
//   name: "@prevperdas/navbar",
//   app: () => System.import("@prevperdas/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
