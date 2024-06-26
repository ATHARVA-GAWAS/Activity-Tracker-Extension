class Api::V1::ActivitiesController < ApplicationController
  def index
    @activities = current_user.activities
    render json: @activities
  end

  def create
    @activity = current_user.activities.build(activity_params)
    if @activity.save
      render json: @activity, status: :created
    else
      render json: @activity.errors, status: :unprocessable_entity
    end
  end

  private

  def activity_params
    params.require(:activity).permit(:url)
  end
end
