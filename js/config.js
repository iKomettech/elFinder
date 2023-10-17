function getConfig() {
    const getURL = window.location.href.split('.');

    let environmentValue = '';
    if (getURL[0].indexOf('flowdev') >= 0) {
        environmentValue = 'Flowskoler';
    }else if (getURL[0].indexOf('ikomet') >= 0) {
        environmentValue = 'Pubskoler';
    }
  
    switch (environmentValue) {
      //Linux Environment 
      case 'Pubskoler':
          return {
            port:8000,
            corsAllowedOrigin: '*',
            nodeconnectorpath: "http://localhost:8000/connector",
            fileserverpath: "/var/www/html/CobeFileServer/Prod",
            protocol: "https"
      };
      default:
        return {
          port:8000,
          corsAllowedOrigin: '*',
          nodeconnectorpath: "http://localhost:8000/connector",
          fileserverpath: "/var/www/html/CobeFileServer/FlowskolerDev",
          protocol: "http"
        }; 
    }
};
