import { Router } from 'express';

import bodyParser from 'body-parser';
import multer from 'multer';

import { ABSOLUTE_UNLOAD_PATH, INVENTORY_FILE_PATH, MIDWEEK_FILE_PATH, NEWSLETTER_FILE_PATH, WORD_INVENTORY, WORD_MIDWEEK, WORD_WEST, WORD_EAST } from '../utils/constant.js';
import modInventory from '../modifiers/inventory.js';
import modMidweek from '../modifiers/midweek.js';
import modNewsletter from '../modifiers/newsletter.js';

const router = Router();

// parse req body
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// process file
const upload = multer({ dest: 'uploads/' });

router.get('/', (req, res) => {
    res.send('combine home page');
});

/**
 * { templateFilePath, informationFilePath, link, image, clock }
 * req.files and req.body
 * 
 */


// inventory, midweek, west, east
router.post('/:type', upload.any(), (req, res) => {

    const { type } = req.params;
    const fields = req.body; // an object with all fields key and value

    // console.log(fields);
    switch (type) {
        case WORD_INVENTORY:
            const templateFilePath = req.files[0].path;
            const informationFilePath = req.files[1].path;
            const filePaths = { templateFilePath, informationFilePath };
            modInventory({ ...filePaths, ...fields });
            res.sendFile(ABSOLUTE_UNLOAD_PATH + INVENTORY_FILE_PATH);
            break;

        case WORD_MIDWEEK:
            const sourcePath = req.files[0].path;
            const targetPath = req.files[1].path;
            const footerPath = req.files[2].path;
            modMidweek({ sourcePath, targetPath, footerPath });
            res.sendFile(ABSOLUTE_UNLOAD_PATH + MIDWEEK_FILE_PATH);
            break;

        case WORD_WEST:
        case WORD_EAST:
            const otherFilePath = req.files[0].path;
            modNewsletter({ type, otherFilePath, fields });
            res.sendFile(ABSOLUTE_UNLOAD_PATH + NEWSLETTER_FILE_PATH);
            break;

        default:
            break;
    }
});

export default router;