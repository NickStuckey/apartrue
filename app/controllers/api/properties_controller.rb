class Api::PropertiesController < ApplicationController
  def index
    @properties = bounds ? Property.in_bounds?(bounds) : {}
    if @properties
      render "api/properties/index"
    else
      render json: ["No properties found"], status: 422
    end
  end

  def create

  end

  def bounds
    params[:bounds]
  end
end
