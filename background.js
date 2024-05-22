chrome.userScripts.register([{
    id: 'test',
    matches: ['*://*/*'],
    js: [{code: 'alert("Hi!")'}]
  }]);