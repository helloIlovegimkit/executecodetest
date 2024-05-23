document.getElementById('execute').addEventListener('click', async () => {
  const code = document.getElementById('code').value;
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (tab) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: executeCode,
      args: [code]
    });
  }
});

function executeCode(code) {
  try {
    eval(code);
  } catch (e) {
    console.error(e);
  }
}
