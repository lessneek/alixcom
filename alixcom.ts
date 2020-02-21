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
