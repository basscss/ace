<section id={props.shortname} className='py3'>
  <LinkHeading
    href={'#' + props.shortname}
    children={props.name}
  />
  <p className=''>
    {props.description}
    {' '}
    <code>v{props.version}</code>
    {' '}
    <a href={props.npm} className=''>npm</a>
  </p>
  <Prose html={props.html} />
</section>
