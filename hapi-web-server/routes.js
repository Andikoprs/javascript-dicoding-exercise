const routes = [
  {
    method: "GET",
    path: "/",
    handler: (req, h) => {
      return "Homapage";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (req, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (req, h) => {
      return "About page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (req, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (req, h) => {
      const { name = "Stranger" } = req.params;
      const { lang } = req.query;

      if (lang === "id") {
        return `Hai, ${name}!`;
      }

      return `Hello, ${name}!`;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (req, h) => {
      return "Halaman tidak ditemukan";
    },
  },
];

module.exports = routes;
