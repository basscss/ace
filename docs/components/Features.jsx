<section id='features' className='py3'>
  <LinkHeading href='#features' children='What is Ace.css?' />
  <p className='h3'>Ace.css is <a href='http://basscss.com'>Basscss</a> with all the <a href='https://github.com/basscss/addons'>addons</a> plus a few more things.</p>
  <LinkHeading href='#features' children='Features' />
  <ul className='list-style-none p0'>
    {props.features.map((f, i) => (
      <li key={i} className='mb2'>
        {f}
      </li>
    ))}
  </ul>
</section>
