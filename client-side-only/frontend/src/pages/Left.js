import { useState } from 'react';
import populateInventory from '../modifiers/inventory';
import populateMidweek from '../modifiers/midweek';
import populateNewsletter from '../modifiers/newsletter';
import populatePreview from '../modifiers/preview';
import { INVENTORY_FIELDS, INVENTORY_FILES, DEMAND_FIELDS, DEMAND_FILES, KEYWORD_INVENTORY, KEYWORD_DEMAND, KEYWORD_MIDWEEK, KEYWORD_SUPPLY, MIDWEEK_FIELDS, MIDWEEK_FILES, SUPPLY_FIELDS, SUPPLY_FILES, KEYWORD_PREVIEW, PREVIEW_FIELDS } from '../utils/constant';

const Left = ({ type }) => {
    let fileNames, fieldNames;

    switch (type) {
        case KEYWORD_INVENTORY:
            fileNames = INVENTORY_FILES;
            fieldNames = INVENTORY_FIELDS;
            break;
        case KEYWORD_MIDWEEK:
            fileNames = MIDWEEK_FILES;
            fieldNames = MIDWEEK_FIELDS;
            break;
        case KEYWORD_DEMAND:
            fileNames = DEMAND_FILES;
            fieldNames = DEMAND_FIELDS;
            break;
        case KEYWORD_SUPPLY:
            fileNames = SUPPLY_FILES;
            fieldNames = SUPPLY_FIELDS;
            break;
        case KEYWORD_PREVIEW:
            fileNames = SUPPLY_FILES;
            fieldNames = PREVIEW_FIELDS;
            break;

        default:
            break;
    }


    // files to upload
    const [files, setFiles] = useState();
    const [fields, setFields] = useState();

    // url to download the resulted file
    const [url, setUrl] = useState();


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // console.log('size', file.size);

        if (file.size > 1024 * 1000) {
            alert('File size cannot exceed more than 1MB');
        } else {
            setFiles({ ...files, [e.target.name]: file });
        }
    };

    // input typing
    const handleFieldChange = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value.trim() });
    };




    const handleSubmit = async (e) => {
        e.preventDefault();
        let contentString; // html string


        switch (type) {
            case 'inventory':
                contentString = await populateInventory({ ...files, ...fields });
                break;
            case KEYWORD_MIDWEEK:
                contentString = await populateMidweek({ ...files, ...fields });
                break;
            case KEYWORD_DEMAND:
                contentString = await populateNewsletter({ type: KEYWORD_DEMAND, ...files, fields }); // one file only
                break;
            case KEYWORD_SUPPLY:
                contentString = await populateNewsletter({ type: KEYWORD_SUPPLY, ...files, fields }); // one file only
                break;
            case KEYWORD_PREVIEW:
                contentString = await populatePreview({ type: KEYWORD_PREVIEW, ...files, fields }); // one file only
                break;

            default:
                break;
        }

        let blob = new Blob([contentString], { type: 'text/html' });

        const url = window.URL.createObjectURL(blob);

        setUrl(url);
    };

    const handleDownload = () => {
        // clean up after download
        setTimeout(() => {
            window.URL.revokeObjectURL(url);
            setUrl(null);
        }, 9000);

    };


    return (
        <>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <h1>{type} template</h1>
                <ul>
                    {fileNames.map((file, index) => (
                        <li key={index}>
                            <label>
                                Upload {file}:
                                <input type='file' name={file} onChange={handleFileChange} />
                            </label>
                        </li>
                    ))}
                </ul>



                <h3>...</h3>
                <ul>
                    {
                        fieldNames.map((field, index) => (field !== 'break' ?
                            <li key={index}>
                                <label htmlFor={field}>
                                    {field.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </label>
                                <textarea name={field} onChange={handleFieldChange} />
                            </li>
                            : <h3 key={index}> ... </h3>))
                    }
                </ul>

                <input type='submit' value='Submit' />

            </form>

            {
                url ? <a href={url} download onClick={handleDownload}>
                    Download the file here
                </a> : null
            }
        </>
    );
};


export default Left;