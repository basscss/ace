<style
  dangerouslySetInnerHTML={{
    __html: `
${props.css}

/* Sidebar rwd styles */
@media screen and (min-width:40em) {
  .sm-w256 { width: 256px }
  .sm-ml256 { margin-left: 256px }
}

.Prose code {
  font-family: Menlo, monospace;
  font-size: .875rem;
  color: #0074d9;
  background-color: #eee;
}
.Prose pre {
  font-family: Menlo, monospace;
  font-size: .875rem;
  padding: 1rem;
  background-color: #eee;
}

.Prose table {
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
}
.Prose th {
  text-align: left;
  font-weight: bold;
}
.Prose th, .Prose td {
  padding: .5rem 0;
  line-height: inherit
}
.Prose th { vertical-align: bottom }
.Prose td { vertical-align: top }

.bg-gray { background-color: #eee }

iframe.twitter-share-button {
  float: left;
  margin: 0;
}

#carbonads {
  display: inline-block;
  font-size: 14px;
  line-height: 1.25;
  text-align: left;
  max-width: 320px;
}
#carbonads a,
#carbonads a:hover {
  text-decoration: none;
  color: inherit;
}
#carbonads span { display: block }
#carbonads > span::before,
#carbonads > span::after {
  content: '';
  display: table;
}
#carbonads > span::after {
  clear: both;
}
.carbon-img {
  float: left;
  margin-right: .5em;
}
.carbon-img > img { display: block }
.carbon-text { overflow: hidden }
.carbon-poweredby {
  float: left;
  margin-top: .25em;
  opacity: 0.5;
}`.replace(/\n/g, '')
}} />
