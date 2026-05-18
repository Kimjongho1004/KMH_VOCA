self.addEventListener('install', (e) => {
  console.log('[Service Worker] 설치 완료');
});

self.addEventListener('fetch', (e) => {
  // 오프라인 기능은 생략하고, 앱 설치 팝업을 띄우기 위한 최소한의 코드입니다.
});