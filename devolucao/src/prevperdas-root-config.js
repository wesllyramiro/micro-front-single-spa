import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@prevperdas/cadastro-indisponivel",
  app: () => System.import("@prevperdas/cadastro-indisponivel"),
  activeWhen: (location) => location.pathname === "/cadastro-indisponivel",
});

start({
  urlRerouteOnly: true,
});
