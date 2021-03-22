import csv from 'csvtojson';
import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream';

const CSV_FILE_PATH = 'csv/task1.csv';
const OUTPUT_STREAM_PATH = 'output_stream.txt';

pipeline(
  createReadStream(CSV_FILE_PATH),
  csv({
    headers: ['book', 'author', 'amount', 'price'],
    colParser: {
      amount: 'omit',
      price: 'number',
    },
  }),
  createWriteStream(OUTPUT_STREAM_PATH),
  (err) => {
    if (err) {
      console.error('[STREAM] Task failed.', err);
    } else {
      console.log('[STREAM] Task succeeded.');
    }
  }
);