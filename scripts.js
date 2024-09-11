let serverUrl = '';

fetch('/CNAME')
    .then(response => response.text())
    .then(data => {
        serverUrl = data.trim();
        document.getElementById('link2048').href = `${serverUrl}/2048`;
        document.getElementById('link3dtetris').href = `${serverUrl}/3dtetris`;
        document.getElementById('linkAlienAttack').href = `${serverUrl}/alienattack`;
        document.getElementById('linkBalanceBall').href = `${serverUrl}/balanceball`;
    })
    .catch(error => console.error('Error fetching CNAME file:', error));
