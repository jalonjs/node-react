import express from 'express'
import path from 'path'
import React from 'react'
import {match, RouterContext} from 'react-router'
import ReactDOMServer from 'react-dom/server'
import routes from '../public/routes'

let app = express();
app.use(express.static(path.join(__dirname, '../public/static')));
console.log(process.env.NODE_ENV );
const html = (r_html) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      <div id="root">
        <div>
          ${r_html}
        </div>
      </div>
      <script src="bundle.js"></script>
    </body>
    </html>
  `;
};

app.use((req, res) => {

    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            res.status(200).send(html(ReactDOMServer.renderToString(<RouterContext {...renderProps} />)))
        } else {
            res.status(404).send('Not found')
        }
    })

});

app.listen(3000, function () {
    console.log('listening 3000');
});
