const https = require('https');
const fs = require('fs');
const path = require('path');

const photoUrls = [
  'https://lh3.googleusercontent.com/pw/AP1GczMCktWBk9cNkbPnqUvp3bXyAwPvniTrK_M9v6wYjT78F5VeCKdIGs-l8uR2T0wPx_oNpR8y2qchAbDH_ka_FagUv3SSBPOAT8styAJWYfvaDQe7Kw5t=w900',
  'https://lh3.googleusercontent.com/pw/AP1GczMvzyK6H2BRDU9dJ_OHrBMRQNC0DUGnagbdUYKpEMOBJ29NTOGBJsGT0qcxOPBpILHBGvBFB-Pyf1IO2ozw8YeLF6iW7kWYynPAekA2tA0fCFBX76WZ=w900',
  'https://lh3.googleusercontent.com/pw/AP1GczMLfWqq2wEqgIVVz-ZCKmRMHgFBS59pSMqkar5KsycWNW5Y7lJ8jmD9GeOvzZeD5kwt41TGFjqiC0MzMdFeo7r2NldNI0iihP2LduUib6fhydXllHqo=w900',
  'https://lh3.googleusercontent.com/pw/AP1GczM0Iz-Z351aIDJo1Ijm434lCRbgb0796JV3wTNGXFYvX_xscfSyoor9YTw03dvEbwl2YVbZXdsRzyiMCd5ZKAFkzqU7HetayDZP_y5sOnFmgkNK9uj7=w900',
  'https://lh3.googleusercontent.com/pw/AP1GczND0Uw0NGxc6t7AX3iB2SCWWL_TwAucsSUj-GcRxN9TVZVD1tJRbkwVW2Dx4xdhnI7juhpEiF_qf4uo0LV6huZ-y_t1Nf7GbQhDLpe4BNfI06dk24WT=w900',
  'https://lh3.googleusercontent.com/pw/AP1GczMANSGwC3x_NXBZlgglFIS4WyPgoc4sBDkolfl02K2vlqHfP_ASrH2SECfD33oPYmgm0ghthCuktcZHx2QV1uH8mlrMncIzpwSwc4gDfxLMyDdkb-by=w900',
  'https://lh3.googleusercontent.com/pw/AP1GczNdLDo1L5m_yqKpAJOoNntNQIXfYAwKfyAvcfd0nkA_1wPRoIHu0RmxpNJfufQc3MTiZyjSUPJXSMSi5GYUnleB859FoWQ79wnsuFjoVWec6FngMtp0=w900',
  'https://lh3.googleusercontent.com/pw/AP1GczMHw34YZ1HPW7n46l58vRj845Nn2GMaxY74lJFmhiEaOXB0ZS5npGrfRyO6_8utpchclfpSVyjXKJAffjq7MBTCSdGCbraIhkQERbpuixFV6R4hxa1i=w900',
  'https://lh3.googleusercontent.com/pw/AP1GczO6XkZf2xqwb71FA_lg1Zny6Gwd9FBz6CykaqsdkuOhh5kXqayGa_6A0M0iLImZcVBwjHxrKjRAOKcY1GzAn71SXu7OE_thkaIDOaS2m_cqlJVQPloW=w900',
  'https://lh3.googleusercontent.com/pw/AP1GczPy2FuPaGViuRmcOOX6BH_ie2c3tGHV2SuUxmAxVFeTo7e7l7YWRn91Oo_3R3UE0XaTdFOvL9_JFxoQxpirLYOl_Trvk7qDBTLKBkQY3eqhircAJm3c=w900',
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Status ' + res.statusCode));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log('Saved:', dest, fs.statSync(dest).size, 'bytes');
          resolve();
        });
      });
    }).on('error', reject);
  });
}

async function run() {
  for (let i = 0; i < photoUrls.length; i++) {
    const dest = path.join('assets', `thrift-product-${i}.jpg`);
    try {
      await download(photoUrls[i], dest);
    } catch (e) {
      console.error('Failed to download', i, e.message);
    }
  }
  console.log('All downloads completed!');
}

run();
