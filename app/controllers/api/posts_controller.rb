class Api::PostsController < ApplicationController

  def index
    @posts = current_user.posts.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :index
    else
      render json: @post.errors.full_messages, status: 401
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if current_user.id == @post.author_id
      @post.destroy
    end
  end

  private
  def post_params
    params.require(:post)
          .permit(:author_id,
                  :title,
                  :body,
                  :source,
                  :file_type)
  end
end
