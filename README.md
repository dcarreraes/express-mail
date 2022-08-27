Basic example of how to send an email with express and nodemailer

install dependencies:
    $ npm install

watch
    $ npm run watch

run the app:
    $ DEBUG=foo:* npm start


basic use send mail http method:

    send post to http://localhost:3000/api/mail
    
    body json, replace with your email access:
    {
        "to": "xx@gmail.com",
        "host": "smtp.zoho.com",
        "port": 465,
        "title": "Diego C. ",
        "from": "xx@gmail.cl",
        "pass": "xxxxxxx",
        "subject": "Subject",
        "message": "Body message"
    }

test get method, add data .env

    http://localhost:3000/api/mail/test
