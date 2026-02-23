import type {
  SandpackFiles,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react';

export const template: SandpackPredefinedTemplate = 'vanilla';

export const files: SandpackFiles = {
  '/index.html': `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Typewriter Effect</title>
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <div class="text">
      <span id="typewriter"></span>
      <span class="cursor-blinking">|</span>
    </div>
    <script src="/index.js"></script>
  </body>
</html>
`.trim(),
  '/styles.css': `
.text {
  font-size: 3rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  color: #e5e7eb;
}

body {
  background-color: #020617;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

@keyframes blinking {
  0% {
    color: transparent;
  }
  50% {
    color: inherit;
  }
  100% {
    color: transparent;
  }
}

.cursor-blinking {
  animation: 1s blinking step-end infinite;
}
`.trim(),
  '/index.js': `
class TypeWriter {
  constructor(words, element) {
    this.words = words;
    this.element = element;
    this.wordIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullText = this.words[current];

    if (this.isDeleting) {
      this.charIndex -= 1;
    } else {
      this.charIndex += 1;
    }

    const text = fullText.substring(0, this.charIndex);
    this.element.textContent = text;

    let typeSpeed = 150;

    if (!this.isDeleting && this.charIndex === fullText.length) {
      this.isDeleting = true;
      typeSpeed = 800;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex += 1;
      typeSpeed = 400;
    }

    setTimeout(() => this.type(), typeSpeed);
  }

  init() {
    this.type();
  }
}

const words = ['Bananas', 'Apples', 'Lorem Ipsum Dolor Sit Amet'];
const typewriterElement = document.getElementById('typewriter');
const writer = new TypeWriter(words, typewriterElement);
writer.init();
`.trim(),
};

export const activeFile = '/index.js';
