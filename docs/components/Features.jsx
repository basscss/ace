<section id='features' className='py3'>
  <LinkHeading href='#features' children='Features' />
  <ul className='list-style-none p0'>
    {props.features.map((f, i) => (
      <li key={i} className='sm-h3 bold mb2'>
        {f}
      </li>
    ))}
  </ul>
</section>
