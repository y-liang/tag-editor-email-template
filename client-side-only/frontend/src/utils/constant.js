
export const PRESET_FILES = ['template'];
export const PRESET_FIELDS = [
    'preview_link', 'preview_title',
    'break',

    'logo_link', 'logo_image',
    'break',

    'menu_a_link', 'menu_a_title',
    'menu_b_link', 'menu_b_title',
    'menu_c_link', 'menu_c_title',
    'break',

    'main_link', 'main_image', 'main_title', 'main_text',
    'break',

    'icon_a_link', 'icon_a_image', 'icon_a_title',
    'icon_b_link', 'icon_b_image', 'icon_b_title',
    'icon_c_link', 'icon_c_image', 'icon_c_title',
    'icon_d_link', 'icon_d_image', 'icon_d_title',
    'break',

    'action_link', 'action_title',
    'break',

    'term_text',
    'break',

    'copyright_text',
    'email_link',
];


export const OPTIONS = [
    {
        id: 0,
        title: 'Customize the template',
        description: 'To customize your template with different images, links and texts, you have to fill in the corresponding fields with the new values.',
        status: 'Recommended'
    },
    {
        id: 1,
        title: 'Import a template from file',
        description: 'To edit your own template, you need to upload it, specify the classes of the tags you want to change, and enter the relevant information.',
        status: 'Experimental'
    },
    {
        id: 2,
        title: 'Create and add a table',
        description: 'To generate a table in your template, provide the array json and make sure there is a tag with the "table_content" class where the table will appear.',
        status: 'Only support five attributes, including one link, per data entry'
    },
];




export function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}















// output files
export const KEYWORD_INVENTORY = 'inventory';
export const KEYWORD_MIDWEEK = 'midweek';

export const KEYWORD_PREVIEW = 'preview';

export const INVENTORY_FILE_PATH = '/inventory_2022.html';
export const MIDWEEK_FILE_PATH = '/midweek_2022.html';
export const NEWSLETTER_FILE_PATH = '/newsletter_2022.html';

export const INVENTORY_FILES = ['template', 'information'];
export const INVENTORY_FIELDS = ['link', 'image', 'clock'];

export const MIDWEEK_FILES = ['source', 'target', 'footer'];
export const MIDWEEK_FIELDS = []; // none
