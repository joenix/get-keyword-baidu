/**
 * Get Keyword Baidu
 * ======== ======== ========
 */
function getKeywordBaidu(referrer) {
  // Set Referrer
  referrer = referrer || document.referrer;

  // Match Query
  referrer = referrer.match(/\?\S+/);

  // No Query
  if (!referrer) {
    return {};
  }

  // Get First
  referrer = referrer[0].substr(1);

  // Set Cache
  var cache = referrer.split("&");

  // Processing
  for (var i = cache.length; i--; ) {
    var target = cache[i].split(/\=/);
    var key = target[0];
    var value = target[1];
    cache[key] = decodeURI(value);
  }

  // Result
  return cache;
}

// Export
export { getKeywordBaidu };
