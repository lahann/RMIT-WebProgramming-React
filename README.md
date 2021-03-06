"# AssessmentRMIT" 

Link to the Assignment:
https://docs.google.com/document/d/1B2SIzPNUkjPoetV7X-vfSoh1_KDtdR815Nu2j3Cmz_s/edit


Useful for Twitter-bootstrap:
https://react-bootstrap.github.io/

Project Structure:

/src => contains our source code

/components => Our basic components, 'What do we want to display?'

/containers => Functionality, 'How do we want to display?'


We should also provide the link to this repo, so the prof can see that we created a work environment similiar to a real one.


How to use our Product-Component:

//<Product {...p} mode='PRODUCT_OVERVIEW' />

Where p contains all the data, the mode is for determining what should be displayed, there is a new Constants.jsx-file which contains possible values.


React-Tooltip:
https://www.npmjs.com/package/react-tooltip



Use Webpack to build a deployable project: https://webpack.js.org/guides/getting-started/

Run following npm command to build the app: 'npm run build'
Output will be in dist directory.

Amazon Deployment:

http://ec2-34-227-110-10.compute-1.amazonaws.com/



A way to avoid the CORS-Extension:

Add the following to your node application which handles the requests:

app.use(function(req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

            // intercept OPTIONS method
            if ('OPTIONS' == req.method) {
              res.send(200);
            } else {
              req.db = db;
              next();
            }
        }
);
