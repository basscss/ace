<div
  {...props}
  className='inline-block mr1'>
  <a
    className='twitter-share-button'
    href={`https://twitter.com/intent/tweet?text=${encodeURI(props.text)}`}
    data-via='jxnblk'>
    Tweet
  </a>
  <script
    id='twitter-wjs'
    src='//platform.twitter.com/widgets.js'
    async
  />
</div>
