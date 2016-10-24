<section id='modules' className='py3'>
  <h2>Ace.css Modules</h2>
  <p>
    Docs for the additional Ace.css modules included in this package.
  </p>
  {props.modules.map((module, i) => (
    <ModuleDoc key={i} {...module} />
  ))}
</section>
