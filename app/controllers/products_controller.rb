# frozen_string_literal: true

class ProductsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    if @user.present? && @user == session_user
      @products = @user.products
      render json: ProductSerializer.new(@products).serialized_json
    else
      render json: { message: 'No products found' }
    end
  end

  def show
    @user = User.find(params[:user_id])
    if @user.present? && @user == session_user
      @product = @user.products.where(id: params[:id])
      render json: ProductSerializer.new(@product).serialized_json
    else
      render json: { message: 'No products found' }
    end
  end

  def create
    @user = User.find(params[:user_id])
    @product = Product.create(product_params)

    if @user.present? && @user == session_user && @product.save
      render json: ProductSerializer.new(@product).serialized_json
    else
      render json: { message: 'No product created' }
    end
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :user_id)
  end
end
