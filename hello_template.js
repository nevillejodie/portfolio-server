const Hello = data => {
    return `
    <!DOCTYPE html>
    <html style="margin: 0; padding: 0;">

    <head>
    <title>Hello</title>
    </head>

    <body style="margin: 0; padding: 0;">
    <br />
    <div>Hello</div>
    <p>${data.name}</p>
    </body>
    </html>`;
};

module.exports = {Hello}