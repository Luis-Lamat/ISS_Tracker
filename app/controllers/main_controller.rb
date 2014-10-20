require 'rubygems'
require 'HTTParty'
require 'Geocoder'

class MainController < ApplicationController

  def index
    info  = HTTParty.get('http://api.open-notify.org/iss-now.json')
    @lat  = info['iss_position']['latitude'].round(6)
    @lon  = info['iss_position']['longitude'].round(6)
    @data = Geocoder.address("#{@lat}, #{@lon}")
  end

end
