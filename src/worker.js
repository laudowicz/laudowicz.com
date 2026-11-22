// One canonical address: https://laudowicz.com
// Everything else (www, http, trailing oddities) redirects here, so that
// twenty years of old backlinks pointing at http://www.laudowicz.com/ land
// in the right place and search engines see one site instead of four.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let moved = false;

    if (url.hostname === "www.laudowicz.com") {
      url.hostname = "laudowicz.com";
      moved = true;
    }
    if (url.protocol === "http:") {
      url.protocol = "https:";
      moved = true;
    }
    if (moved) {
      return new Response(null, {
        status: 301,
        headers: { Location: url.toString(), "Cache-Control": "max-age=3600" }
      });
    }
    return env.ASSETS.fetch(request);
  }
};
