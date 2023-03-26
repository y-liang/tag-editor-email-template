import { load } from 'cheerio';
import { templateContentString } from '../template/template.js';
import { PREVIEW_FIELDS } from '../utils/constant.js';


const renderPreview = async ({ isExample, hasJson, files, fields }) => {

    /* template */
    let templateHtml;
    if (isExample) {
        templateHtml = templateContentString;
    } else {
        const reader = new FileReader();
        reader.readAsText(files['template']);
        templateHtml = await (async () => {
            return new Promise((resolve, reject) => {
                reader.addEventListener('load', () => {
                    resolve(reader.result); // this will then display a text file
                });
            });
        })();
    }

    /* cheerio */
    let $tpl$ = load(templateHtml);


    /* table content */
    if (hasJson) {
        const reader = new FileReader();
        reader.readAsText(files['json']);
        const jsonString = await (async () => {
            return new Promise((resolve, reject) => {
                reader.addEventListener('load', () => {
                    resolve(reader.result); // this will then display a text file
                });
            });
        })();
        const tableContent = arrayToTable(jsonString); // pass in json string

        // add table content
        $tpl$('.table_content').append(tableContent);
    }


    /* field content */
    let fieldNames = PREVIEW_FIELDS;

    // field - class name - pass in data
    fieldNames.forEach(name => {
        let type = name.substring(name.lastIndexOf('_') + 1);

        if (fields[name]) {
            switch (type) {
                case 'link':
                    // link could be on image and button
                    $tpl$(`.${ name }`).each((i, el) => {
                        const $el = $tpl$(el);
                        $el.attr('href', fields[name]);
                    });
                    break;
                case 'image':
                    $tpl$(`.${ name }`).attr('src', fields[name]);
                    break;
                case 'title':
                    $tpl$(`.${ name }`).replaceWith(`<span>${ fields[name] }</span>`);
                    break;
                case 'text':
                    $tpl$(`.${ name }`).replaceWith(`<span>${ fields[name] }</span>`);
                    break;

                default:
                    break;
            }
        }


    });

    return $tpl$.html();

};






const priceFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

const arrayToTable = (jsonArrayString) => (
    '' + JSON.parse(jsonArrayString).map(unit => `
        <tr class="data-row" data-name="${ unit[1] }"
        style="color: #808080; font-size: 14px; font-family: Helvetica, Arial, sans-serif;">
        <td align="center" style="border-right: 1px solid #D3D3D3">&nbsp;&nbsp;&nbsp;&nbsp; <a href="
        ${ unit[4] }
        " style="color: #2E8DDD;"><span style="color: #2E8DDD;display: block;"> ${ unit[0] }
            </span> </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </td>
        <td align="center" style="border-right: 1px solid #D3D3D3">&nbsp;&nbsp;&nbsp;&nbsp; <span>
            ${ unit[1] }
        </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </td>
        <td align="center" style="border-right: 1px solid #D3D3D3">&nbsp;&nbsp;&nbsp;&nbsp; <span>  ${ unit[2] }
        </span> &nbsp;&nbsp;&nbsp;&nbsp;</td>
        <td align="center">&nbsp;&nbsp;&nbsp;&nbsp; <span> ${ priceFormat.format(unit[3]) } </span> &nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr >
            <tr>
                <td class="data-spacer" style="border-right: 1px solid #D3D3D3">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td class="data-spacer" style="border-right: 1px solid #D3D3D3">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td class="data-spacer" style="border-right: 1px solid #D3D3D3">&nbsp;&nbsp;&nbsp;&nbsp;</td>
            </tr>
        `).join('')
);



export default renderPreview;