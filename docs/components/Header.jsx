<header className='lg-flex items-center mt4 mb4 py4'>
  <div className='flex-auto'>
    <div className='h1 line-height-1 mb2'>
      ♠
    </div>
    <h1 className='lg-h00 line-height-1 m0'>
      {props.title}
      <span className='h4 ml1'>v{props.version}</span>
    </h1>
    <p className='sm-h3'>
      {props.description}
    </p>
    <div className='flex mb2 items-center'>
      {/*
      <TravisBadge
        user='basscss'
        repo='ace'
      />
      */}
      <TweetButton
        text={`${props.title}: ${props.description}`}
      />
      <GithubButton
        user='basscss'
        repo='ace'
      />
    </div>
  </div>
  <div>
    <CarbonAd />
  </div>
</header>
