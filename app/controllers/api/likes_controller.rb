class Api::LikesController < ApplicationController
  def create
    @like = Like.new
    @like.post_id = params[:post_id]
    @like.user_id = current_user.id
    @like.save
    render json: @like
  end

  def destroy
    @like = current_user.likes.find_by(post_id: params[:post_id])
    @like.destroy
    render json: @like
  end
end
