<nav {...props}>
  <div className='sm-px2 pt2 pb4 sm-border-right border-silver'>
    <h2 className='h3 xs-hide'>
      <a href='#' className='color-inherit text-decoration-none'>
        Ace.css
      </a>
    </h2>
    <ul className='p0 list-style-none mxn1'>
      {props.modules.map((m, i) => (
        <li key={i} className='inline-block align-top col-6 sm-block sm-col-12 mb1'>
          <NavItem href={'#' + m.shortname}>
            {m.shortname}
          </NavItem>
        </li>
      ))}
    </ul>
    <hr className='my2 border-bottom border-silver' />
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
