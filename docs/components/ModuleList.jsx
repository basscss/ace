<section id='modules' className='py3'>
  {props.modules.map((module, i) => (
    <ModuleDoc key={i} {...module} />
  ))}
</section>
