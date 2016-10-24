<footer className='py4 border-top border-silver'>
  <ul className='list-style-none p0'>
    {[
      {
        href: 'http://basscss.com',
        text: 'Basscss'
      },
      {
        href: 'https://github.com/basscss/ace',
        text: 'GitHub'
      },
      {
        href: 'https://npmjs.com/package/ace-css',
        text: 'npm'
      },
      {
        href: 'http://jxnblk.com',
        text: 'Made by Jxnblk'
      },
    ].map(({ href, text }, i) => (
      <li key={i} className='inline-block mr2 mb2'>
        <a href={href} className='h5 bold text-decoration-none color-inherit'>{text}</a>
      </li>
    ))}
  </ul>
</footer>
