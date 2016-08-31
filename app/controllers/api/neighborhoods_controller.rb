class Api::NeighborhoodsController < ApplicationController
  def create
    # @neighborhood = Neighborhood.new()
  end

  def index
    @neighborhoods = Neighborhood.all

    if @neighborhoods
      render "api/neighborhoods/index"
    else
      render json: @neighborhoods.errors
    end
  end


end
