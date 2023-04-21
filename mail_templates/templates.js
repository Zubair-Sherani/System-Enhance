// templates.js

module.exports = {
    signUp: {
        subject: 'Welcome to our app!',
        html: `
          <html>
            <head>
              <style>
                /* Add your custom styles here */
              </style>
            </head>
            <body>
              <h1>Thank you for signing up!</h1>
              <p>Welcome to our app. We are excited to have you as a new user and look forward to helping you get the most out of our platform.</p>
              <p>To get started, please complete your profile by filling out the necessary information. This will help us personalize your experience and connect you with the right resources.</p>
              <p>If you have any questions or feedback, please don't hesitate to contact our support team. We're here to help!</p>
              <p>Thank you again for joining our community. We're thrilled to have you on board!</p>
              <p>Best regards,<br>The [App Name] Team</p>
            </body>
          </html>
        `
      },
      signIn: {
        subject: 'You have successfully signed in',
        html: `
          <html>
            <head>
              <style>
                /* Add your custom styles here */
              </style>
            </head>
            <body>
              <h1>You have successfully signed in</h1>
              <p>Dear {{username}},</p>
              <p>We are pleased to inform you that you have successfully signed in to your account on our app.</p>
              <p>If you have any questions or feedback, please don't hesitate to contact our support team. We're here to help!</p>
              <p>Best regards,<br>The [App Name] Team</p>
            </body>
          </html>
        `
      },
      signInToAccount: {
        subject: 'Sign in to your account',
        html: `
          <html>
            <head>
              <style>
                /* Add your custom styles here */
              </style>
            </head>
            <body>
              <h1>Sign in to your account</h1>
              <p>Thank you for using our app. Please click on the link below to sign in to your account.</p>
              <p><a href="{{signInLink}}">Sign in now</a></p>
              <p>If you did not request this sign-in link, please ignore this message.</p>
              <p>If you have any questions or feedback, please don't hesitate to contact our support team. We're here to help!</p>
              <p>Best regards,<br>The [App Name] Team</p>
            </body>
          </html>
        `
      },
      feedback: {
        subject: 'Thank you for your feedback',
        html: `
          <html>
            <head>
              <style>
                /* Add your custom styles here */
              </style>
            </head>
            <body>
              <h1>Thank you for your feedback</h1>
              <p>Dear {{username}},</p>
              <p>Thank you for taking the time to provide feedback on our app. Your feedback is extremely valuable to us and will help us improve our app for all of our users.</p>
              <p>If you have any further feedback or suggestions, please don't hesitate to contact us. We'd love to hear from you!</p>
              <p>Best regards,<br>The [App Name] Team</p>
            </body>
          </html>
        `
      },
      forgotPassword: {
        subject: 'Reset your password',
        html: `
          <html>
            <head>
              <style>
                /* Add your custom styles here */
              </style>
            </head>
            <body>
              <h1>Reset your password</h1>
              <p>Dear {{username}},</p>
              <p>We received a request to reset your password on our app. If you did not make this request, please ignore this message.</p>
              <p>To reset your password, please click the link below:</p>
              <p><a href="{{resetPasswordLink}}">Reset Password</a></p>
              <p>If you have any questions or need further assistance, please don't hesitate to contact our support team. We're here to help!</p>
              <p>Best regards,<br>The [App Name] Team</p>
            </body>
          </html>
        `
      },
    accountActivated: {
      subject: 'Your account is now active!',
      html: '<h1>Congratulations, your account is now active!</h1><p>You can now log in and start using our app.</p>'
    }
  };
  