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
    @property = Property.new(property_params)
    @property.owner_id = current_user.id if is_owner?
    @property.neighborhood_id = neighborhood

    if @property.save
      render "api/properties/show"
    else
      render json: @property.errors
    end
  end

  def bounds
    params[:bounds]
  end

  def is_owner?
    params[:is_owner]
  end

  def neighborhood
    Neighborhood.find_by_name(params[:city])
  end

  def property_params
    params.require(:property).permit(
      :address,
      :is_owner,
      :neighborhood,
      :price,
      :num_bedrooms,
      :available,
      :lat,
      :lng,
      :zipcode,
      :city
    )
  end
end
