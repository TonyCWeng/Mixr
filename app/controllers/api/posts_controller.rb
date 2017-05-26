class Api::PostsController < ApplicationController

  def index
    @posts = current_user.followed_posts + current_user.posts
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 401
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if current_user.id == @post.author_id
      @post.destroy
      render :show
    end
  end

  private
  def post_params
    params.require(:post)
          .permit(:title,
                  :body,
                  :source,
                  :post_type,
                  :image)
  end
end
