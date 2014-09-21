require 'rubygems'
require 'sinatra'
require 'rack-livereload'
require File.expand_path('../application.rb', __FILE__)
use Rack::ShowExceptions
run MrAlexLauApp.new

use Rack::LiveReload
