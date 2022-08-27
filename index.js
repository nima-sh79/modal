const theRunner = document.getElementById('activator');
const toustify = document.getElementById('bang');
const body = document.getElementById('my-body');
toustify.style.display = 'none';
const createNewModal = () => {
    toustify.style.display = 'flex';
    toustify.children[1].addEventListener('click', () => {toustify.style.display = 'none';}); 
}
body.addEventListener('click', (e) => {e.preventDefault;
    if (e.target != toustify && e.target != theRunner) {toustify.style.display = 'none';}
});
theRunner.addEventListener('click', createNewModal);


