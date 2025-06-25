import {
  setToastDefaultOptions,
  showDialog,
  showLoadingToast,
  closeToast,
  showToast as showVantToast,
  showConfirmDialog,
} from 'vant';

let hideLoadingTimer: number | null = null;
setToastDefaultOptions('loading', { forbidClick: true, duration: 0 });

export function showLoading(message = '加载中...') {
  clearTimeout(hideLoadingTimer as number);
  showLoadingToast({ message });
}

export function hideLoading() {
  hideLoadingTimer = window.setTimeout(() => closeToast(), 100);
}

export function showToast(message: string) {
  showVantToast({ message, forbidClick: false });
}

export function showModal(message: string, cb?: () => void) {
  showDialog({ title: '提示', message }).then(() => {
    cb && cb();
  });
}

export function confirm(message: string, title = '提示') {
  return showConfirmDialog({
    title,
    message,
  }).then(() => true).catch(() => false);
}


