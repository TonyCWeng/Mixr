class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.save
    @post = Post.find(params[:id])
    render 'api/posts/show'
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    @post = Post.find(params[:id])
    render 'api/posts/show'
  end

  def like_params
    params.require(:like).permit(:user_id, :post_id)
  end
end
