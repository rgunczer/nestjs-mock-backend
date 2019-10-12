console.log('hello');

document.addEventListener('click', (event) => {
    console.log('click')
    if (event.target.tagName === 'BUTTON') {
        switch (event.target.id) {
            case 'btnToggleThrowError':
                console.log('toggle button click');

                fetch('http://localhost:3000/settings', {
                    method: 'post'
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    document.getElementById('root').innerHTML = `<pre>${JSON.stringify(data)}</pre>`;
                });

                break;
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/settings', {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        document.getElementById('root').innerHTML = `<pre>${JSON.stringify(data)}</pre>`;
    });
}, false);
