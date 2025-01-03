const monitor = document.getElementById('monitor');
let text = '';
let capsLockOn = false;

function updateMonitor() {
    monitor.textContent = text;
    monitor.scrollTop = monitor.scrollHeight;
}

function toggleCapsLock() {
    capsLockOn = !capsLockOn;
    updateKeyboardDisplay();
}

function updateKeyboardDisplay() {
    const keys = document.querySelectorAll('.keyboard input[type="button"]:not(.backspace):not(.spacebar)');
    keys.forEach(key => {
        key.value = capsLockOn ? key.value.toUpperCase() : key.value.toLowerCase();
    });
}

function copyText() {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(monitor);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
}

async function pasteText() {
    try {
        const clipboardText = await navigator.clipboard.readText();
        text += clipboardText;
        updateMonitor();
    } catch (err) {
        console.error('Failed to read clipboard contents: ', err);
    }
}

document.getElementById('keyboard').addEventListener('click', function (e) {
    if (e.target.tagName === 'INPUT' && e.target.type === 'button') {
        if (e.target.classList.contains('backspace')) {
            text = text.slice(0, -1);
        } else if (e.target.classList.contains('spacebar')) {
            text += " ";
        } else {
            text += e.target.value;
        }
        updateMonitor();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.getModifierState('CapsLock') !== capsLockOn) {
        toggleCapsLock();
    }

    if (e.ctrlKey) {
        if (e.key === 'c') {
            e.preventDefault();
            copyText();
            return;
        } else if (e.key === 'v') {
            e.preventDefault();
            pasteText();
            return;
        }
    }

    const key = e.key;
    if (key === 'Backspace') {
        text = text.slice(0, -1);
    } else if (key === ' ') {
        text += ' ';
    } else if (key.length === 1) {
        text += capsLockOn ? key.toUpperCase() : key.toLowerCase();
    }
    updateMonitor();
});

monitor.addEventListener('copy', function (e) {
    e.preventDefault();
    if (e.clipboardData) {
        e.clipboardData.setData('text/plain', window.getSelection().toString());
    }
});

monitor.addEventListener('paste', function (e) {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text/plain');
    text += pastedText;
    updateMonitor();
});

// Initialize keyboard display
updateKeyboardDisplay();