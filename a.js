var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://127.0.0.1:7777', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = xhr.responseText;
    console.log(response);
  }
};
xhr.send();