let nock = require('nock');

module.exports.hash = "e86b72b972365694cbfb2a0fdf479744";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post(`/indexes('hotel-live-test1')/docs/search.index`, {"value":[{"@search.action":"mergeOrUpload","hotelId":"8","description":"Modified Description"},{"@search.action":"mergeOrUpload","hotelId":"11","description":"New Hotel Description","lastRenovationDate":null}]})
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1479759b9ce3f7af4bd5ffcd1dbfcfaa3471f1d7c34faa869b376dd7cf4a8add7f9e8a3bcaeabfa8bbc69b20b6ab85c97a5697152cde893bd9d9d5f3232afefee7e8df7777fc9f77fc9ff03dc317a548a000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; odata.metadata=none',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'request-id',
  '370065a6-f113-49de-97e5-040424793292',
  'elapsed-time',
  '45',
  'OData-Version',
  '4.0',
  'Preference-Applied',
  'odata.include-annotations="*"',
  'Strict-Transport-Security',
  'max-age=15724800; includeSubDomains',
  'Date',
  'Fri, 07 Jan 2022 23:44:08 GMT',
  'Content-Length',
  '194'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get(`/indexes('hotel-live-test1')/docs('8')`)
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147f3aacdcbb3d9478f3e3af868247fbdc816f9478f96ebb21c7d34cb9b695dacdaa25a52932faa59715ee4b3f4a9f771d0e8594dcdcecaf43acdd2d93a9dd4eba24d67795a66695daddb3ccddbb4c9d396feb8ccd3df77bdb393efa453fc3cdf6ff1237fa8cd9b360340fcb5aaca629a8fd3e77993365959d20ffa749215cb34bbcc8a7c892e9ab4ce2f1942d6e60bfa8c1b2daabac00b6342734a5f5c54f5b5195b9b5d341f3dfadef7471fadb2fa6db1bc385b4ecbf52c276248836651e1e3e3b2acaedca765d6b4aff26575c9f83d25a0e69b9a3e595e98bfca8a3aa416e6ef6c36abf3867a943febaa5ad01fdffbfe2ff97f0015ab79db85010000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; odata.metadata=none',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'request-id',
  'c3fdce1a-e509-436b-be1c-3ce023dfb230',
  'elapsed-time',
  '9',
  'OData-Version',
  '4.0',
  'Preference-Applied',
  'odata.include-annotations="*"',
  'Strict-Transport-Security',
  'max-age=15724800; includeSubDomains',
  'Date',
  'Fri, 07 Jan 2022 23:44:12 GMT',
  'Content-Length',
  '364'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get(`/indexes('hotel-live-test1')/docs/$count`)
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f22fec7bff71fdcddfd7f002dd054ff05000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'text/plain',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'request-id',
  '233109be-d3d2-48e0-aeac-38d000fdb903',
  'elapsed-time',
  '4',
  'OData-Version',
  '4.0',
  'Preference-Applied',
  'odata.include-annotations="*"',
  'Strict-Transport-Security',
  'max-age=15724800; includeSubDomains',
  'Date',
  'Fri, 07 Jan 2022 23:44:12 GMT',
  'Content-Length',
  '127'
]);
