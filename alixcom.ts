//     Firefox add-on which replaces all wrong language links on the `aliexpress.com`.
//     Copyright (C) 2020  Alexander Logger
//
//     This program is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.

//     This program is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.

//     You should have received a copy of the GNU General Public License
//     along with this program.  If not, see <https://www.gnu.org/licenses/>.

console.log("alixcom: loaded.");

function replaceLinks(links: HTMLCollectionOf<HTMLAnchorElement>) {
    let replacedLinksCount = 0;
    for (const link of links) {
        var href = link.href;
        var xcomhref = href.replace("aliexpress.ru", "aliexpress.com");
        if (xcomhref != href) {
            link.href = xcomhref;
            replacedLinksCount++;
            console.debug("alixcom: replaced `" + href + "` with `" + xcomhref + "`");
        }
    }
    if (replacedLinksCount > 0)
        console.log(`alixcom: replaced ${replacedLinksCount} links.`);
};

// Initial replacing.
replaceLinks(document.getElementsByTagName("a"));

// Replacing on document changes.
const observer = new MutationObserver(function (mutationsList: any, observer: any) {
    let links = document.getElementsByTagName("a");
    replaceLinks(links);
});
observer.observe(document, { attributes: true, childList: true, subtree: true });
