import fs from 'fs';
import { parse } from 'csv-parse';

// Function to read and parse the database CSV file
export const readDatabase = (filePath) => {
    return new Promise((resolve, reject) => {
        const data = { CS: [], SWE: [] };

        fs.readFile(filePath, 'utf8', (err, content) => {
            if (err) {
                return reject(err);
            }

            parse(content, { columns: true, trim: true }, (parseErr, records) => {
                if (parseErr) {
                    return reject(parseErr);
                }

                records.forEach((record) => {
                    if (record.field && record.firstname) {
                        if (data[record.field]) {
                            data[record.field].push(record.firstname);
                        }
                    }
                });

                resolve(data);
            });
        });
    });
};

