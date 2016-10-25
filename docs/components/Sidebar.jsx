<nav {...props}>
  <div className='sm-px3 pt2 sm-pt4 pb4'>
    <h2 className='h3 xs-hide mb3'>
      <a href='#' className='color-inherit text-decoration-none'>
        Ace.css
      </a>
    </h2>
    <ul className='p0 list-style-none mxn1'>
      {props.modules.map((m, i) => (
        <li key={i} className='inline-block align-top col-6 sm-block sm-col-12 mb1'>
          <NavItem href={'#' + m.shortname}>
            {m.shortname.charAt(0).toUpperCase() + m.shortname.replace(/-/g, ' ').slice(1)}
          </NavItem>
        </li>
      ))}
    </ul>
    <hr className='my3 border-bottom border-silver' />
    <ul className='p0 list-style-none mxn1 xs-hide'>
      <li className='mb1'>
        <NavItem href='http://basscss.com'>
          Basscss
        </NavItem>
      </li>
      <li className='mb1'>
        <NavItem href='https://github.com/basscss/ace'>
          GitHub
        </NavItem>
      </li>
      <li className='mb1'>
        <NavItem href='https://npmjs.com/package/ace-css'>
          npm
        </NavItem>
      </li>
      <li className='mb1'>
        <NavItem href='http://jxnblk.com'>
          Made by Jxnblk
        </NavItem>
      </li>
    </ul>
  </div>
</nav>
