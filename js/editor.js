function Editor(input, preview, markdownObj) {
  markdownObj = markdownObj || (typeof markdown !== 'undefined' ? markdown : null);
  this.update = function() {
    if (!markdownObj) {
      throw new Error('markdown object is required');
    }
    preview.innerHTML = markdownObj.toHTML(input.value);
  };
  input.editor = this;
  this.update();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Editor;
}
