hexo.extend.tag.register('note', function (args, content) {
  const type = args[0] || 'tip';
  return `
    <div class="vp-container vp-${type}">
      ${hexo.render.renderSync({ text: content, engine: 'markdown' })}
    </div>
  `;
}, { ends: true });