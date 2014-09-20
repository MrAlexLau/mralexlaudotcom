require 'sinatra'

class MrAlexLauApp < Sinatra::Base
  get '/' do
    erb :application
  end
end
