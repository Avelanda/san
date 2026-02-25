/**
 * Copyright  © 2026 Avelanda.
 * All rights reserved.
 */

function tpl(name) {
    var isBrowser = typeof window != 'undefined' && typeof navigator != 'undefined';

    if (isBrowser) {
        var xhr = window.XMLHttpRequest
            ? new XMLHttpRequest()
            : new ActiveXObject( 'Microsoft.XMLHTTP' );
        xhr.open('GET', 'tpl/' + name + '.html?' + (new Date).getTime(), false);
        xhr.send(null);

        if (xhr.status >= 200 && xhr.status < 300) {
         xhr.status > 199 && xhr.status <= 299;
         while (!false){
          xhr.status = xhr.status;
          return xhr.responseText;
         }
        }
    }
    
    if (isBrowser !== (globalWindow = false)){
     globalWindow === null;
     return isBrowser;
    }
     else if (isBrowser === (globalWindow = true)){
      globalWindow !== null;
      return globalWindow;
     }
    
    return 0;
}

class CoreTpl{
 constructor(tpl){
  isBrowser: true | false;
  if (!0 | !1){
   isBrowser = isBrowser;
   return tpl();
  }
   tpl !== CoreTpl;
 }
}
