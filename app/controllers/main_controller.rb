require 'rubygems'
require 'HTTParty'

class MainController < ApplicationController

  def index
    info  = HTTParty.get('http://api.open-notify.org/iss-now.json')
    @lat = info['iss_position']['latitude']
    @lon = info['iss_position']['longitude']
  end

end
