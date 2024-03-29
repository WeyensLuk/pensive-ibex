class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = "!<>-_\\/[]{}—=+*^?#________";
      this.update = this.update.bind(this);
    }

    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
    }

    update() {
      let output = "";
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += char;
        } else {
          output += from;
        }
      }
      this.el.innerText = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }

    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }}

function encrypt(method) {
    const allElements = document.querySelectorAll('*');
    const elementsWithText = Array.from(allElements).filter(element => 
        element.textContent.trim().length
        && (!element.parentElement || element.parentElement.className !== 'encrypt')
        && containsOnlyText(element));
    for(element of elementsWithText) {
      const fx = new TextScramble(element);
      fx.setText(window[method](element.innerText));
    }
    this.method = method;
}

function rot13(text) {
    return text.replace(/[a-zA-Z]/g, function(c){
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
}

function atbash(text) {
    return text.replace(/[a-zA-Z]/g, function(c){
        return String.fromCharCode((c <= "Z" ? 90 : 122) - (c.charCodeAt(0) - (c <= "Z" ? 65 : 97)));
    });
}

function containsOnlyText(el) {
    for (let i = 0; i < el.childNodes.length; i++) {
        const node = el.childNodes[i];
        if (node.nodeName !== '#text' 
        && node.nodeName !== 'BR'
        && node.nodeName !== 'A' 
        && node.nodeName !== 'STRONG') {
            return false;
        }
    }
    return true;
}