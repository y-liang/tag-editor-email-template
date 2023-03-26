import { load } from 'cheerio';


const populateMidweek = async ({ source, target, footer }) => {

    /**
    ...
    const footerReader = new FileReader();
    footerReader.readAsText(footer);
    let footerHtml = await(async () => {
        return new Promise((resolve, reject) => {
            footerReader.addEventListener('load', () => {
                // this will then display a text file
                resolve(footerReader.result);
            });
        });
    })();
    */
    const sourceReader = new FileReader();
    const targetReader = new FileReader();
    const footerReader = new FileReader();

    sourceReader.readAsText(source);
    targetReader.readAsText(target);
    footerReader.readAsText(footer);

    const sourcePromise = new Promise((resolve, reject) => {
        sourceReader.addEventListener('load', () => {
            resolve(sourceReader.result); // this will then display a text file
        });
    });

    const targetPromise = new Promise((resolve, reject) => {
        targetReader.addEventListener('load', () => {
            resolve(targetReader.result);
        });
    });

    const footerPromise = new Promise((resolve, reject) => {
        footerReader.addEventListener('load', () => {
            resolve(footerReader.result);
        });
    });

    const [sourceHtml, targetHtml, footerHtml] = await Promise.all([sourcePromise, targetPromise, footerPromise]);

    // source - get a tags' href
    let $src$ = load(sourceHtml);

    // href array
    let href = [];
    $src$('.action-button').children('a').toArray().forEach(el => href.push(el.attribs.href));

    let count = 0;

    // target - wrap button with a tag above
    let $tgt$ = load(targetHtml);
    $tgt$('.image-fit-container').children('img').each((i, el) => {
        let link = `<a href=${ href[count++] }></a>`;
        // console.log(link, 'link');
        const $el = $tgt$(el);
        $el.wrap(link);
    });


    // console.log($tgt$.html());

    // change logo to footer info
    $tgt$('.image-aligncenter').children('div').replaceWith(footerHtml);

    return $tgt$.html();
};


export default populateMidweek;