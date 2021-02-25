const externals = {
  downloads: [
    {
      source: "/download-doc/f/git-github",
      destination:
        "https://onedrive.live.com/redir?resid=CBAB2E757555316E%216000&authkey=%21AAKj4hEZAM4fH_s&page=Download",
    },

    {
      source: "/download-doc/f/powerpoint",
      destination:
        "https://onedrive.live.com/redir?resid=CBAB2E757555316E%214460&authkey=%21AO3ln9rSyWchAaM&page=Download",
    },
  ],
  read: [
    {
      source: "/read-doc/f/git-github",
      destination: "https://1drv.ms/p/s!Am4xVXV1LqvLrnACo-IRGQDOHx_7?e=4AVfID",
    },
    {
      source: "/read-doc/f/powerpoint",
      destination: "https://1drv.ms/p/s!Am4xVXV1LqvLomzt5Z_a0slnIQGj?e=2t5mOZ",
    },
    {
      source: "/download-pdf/f/git-github",
      destination: "https://1drv.ms/b/s!Am4xVXV1LqvLrnOe1Ut82yMGxmAp",
    },
    {
      source: "/video/f/git-github",
      destination:
        "https://drive.google.com/file/d/1txZ-4mPxUJfdMz4HMRvOmksDCkpCmOIW/view",
    },
  ],
};

const internals = {
  links: [
    {
      source: "/home",
      destination: "/",
    },
    {
      source: "/formation",
      destination: "/formations",
    },
  ],
};
module.exports = {
  externals,
  internals,
};
