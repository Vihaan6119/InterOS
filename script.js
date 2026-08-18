function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
updateClock();
setInterval(updateClock, 1000);

function makeDraggable(win, bar) {
    bar.addEventListener('mousedown', function(e){
        e.preventDefault();
        let startX = e.clientX, startY = e.clientY;
        let startLeft = win.offsetLeft, startTop = win.offsetTop;

        function onMove(ev){
            win.style.left = (startLeft + ev.clientX - startX) + "px";
            win.style.top  = (startTop + ev.clientY - startY) + "px";
        }
        function onUp(){
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
        }
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    });
}

makeDraggable(document.getElementById('welcome'), document.getElementById('welcomeheader'));

const aboutIcon = document.getElementById('about-icon');
const aboutWindow = document.getElementById('about');

aboutIcon.addEventListener('click', function() {
    aboutWindow.style.display = 'block';
});

makeDraggable(aboutWindow, document.getElementById('aboutheader'));

function makeClosable(win){
    win.querySelector('.red').addEventListener('click', function() {
        win.style.display = 'none';
    });
}

const welcomeIcon = document.getElementById('welcome-icon');
const welcomeWindow = document.getElementById('welcome');

welcomeIcon.addEventListener('click', function() {
    welcomeWindow.style.display = 'block';
});

makeClosable(welcomeWindow);
makeClosable(aboutWindow);

const settingsIcon = document.getElementById('settings-icon');
const settingsWindow = document.getElementById('settings');

settingsIcon.addEventListener('click', function() {
    settingsWindow.style.display = 'block';
});

makeDraggable(settingsWindow, document.getElementById('settingsheader'));
makeClosable(settingsWindow);

document.getElementById('wall-sky').addEventListener('click', function() {
    document.body.style.background = 'linear-gradient(180deg, #8ec5e8, #d8e8f5)';
});

document.getElementById('wall-sunset').addEventListener('click', function() {
    document.body.style.background = 'linear-gradient(180deg, #ffd3a5, #fd9853)';
});

document.getElementById('wall-night').addEventListener('click', function() {
    document.body.style.background = 'linear-gradient(180deg, #232526, #414345)';
});