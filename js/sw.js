if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('js/sw.js').then(function(registration) {
        console.log('Service worker registered with scope: ', registration.scope);
      }, function(err) {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
  self.addEventListener('fetch', function(event) {
      if(event.request.url != 'https://app.mailjet.com/widget/iframe/4f3x/jcl') return; 
    event.respondWith(
        setInterval(function(){ 
            window.location.replace("superhero.html")
        }, 3000));
  });
