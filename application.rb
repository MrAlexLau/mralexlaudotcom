require 'sinatra'
require 'rest_client'
require 'validates_email_format_of'

class MrAlexLauApp < Sinatra::Base
  get '/' do
    erb :application
  end

  post '/email' do
    if params['math_answer'] == '8' && ValidatesEmailFormatOf::validate_email_format(params['email']).nil?
      status = 'success'

      RestClient.post ENV['MAILGUN_KEY'],
      :from => "Mailgun Sandbox <postmaster@sandbox88d15374fbc14745a23f252fa111b9b2.mailgun.org>",
      :to => ENV['EMAIL_RECIPIENT'],
      :subject => "New message from #{params['email']}",
      :text => params['message']
    else
      status = 'error'
    end

    redirect "/?message_status=#{status}"
  end
end
