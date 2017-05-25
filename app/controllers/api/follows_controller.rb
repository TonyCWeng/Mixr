class Api::FollowsController < ApplicationController

  def index
    @follows = current_user.follows
    render json: @follows
  end

  def create
    @follow = Follow.new
    @follow.follower_id = current_user.id
    @follow.followee_id = params[:followee_id]
    @follow.save
    render json: @follow
  end

  def destroy
    @follow = current_user.follows.find_by(followee_id: params[:followee_id])
    @follow.destroy
    render json: @follow
  end
end
