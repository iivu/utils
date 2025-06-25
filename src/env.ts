export function isWechatBrowser() {
  const ua = window.navigator.userAgent.toLowerCase();
  return /micromessenger/.test(ua);
}

export function isWechatMiniProgram() {
  const ua = window.navigator.userAgent.toLowerCase();
  return /miniProgram/i.test(ua);
}

export function isIOS() {
  const ua = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(ua);
}

export function isAndroid() {
  const ua = window.navigator.userAgent.toLowerCase();
  return /android/.test(ua);
}