<html>
  <Head {...props} />
  <div className='sm-ml256 px2 '>
    <div className='max-width-3 mx-auto'>
      <Header {...props} />
      <Features {...props} />
      <Quote {...props} />
      <GettingStarted {...props} />
      <Sidebar
        {...props}
        className='sm-fixed top-0 left-0 bottom-0 sm-w256 overflow-auto order-1' />
      <ModuleList {...props} />
      <Footer {...props} />
    </div>
  </div>
</html>
