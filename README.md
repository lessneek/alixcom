### alixcom

_The problem: aliexpress.com has a random redirection to the russian version of the site when browsing from Russia, but if a user changes lang to english, on pages there are still links to the russian version of the site. I have sent a feedback to aliexpress support about this problem, and while they fixing it, I have made this:_

The solvation: Firefox add-on which replaces all `aliexpress.ru` links with `aliexpress.com` on pages of aliexpress.com (the english version) when browsing from Russia.

### Building on GNU/Linux

Prerequisites: `web-ext` (`# npm install --global web-ext`).

Run `$ ./build-add-on` to build the add-on. All artifacts will be at the `build` dir.
