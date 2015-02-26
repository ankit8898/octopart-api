module Api
  class SearchController < ApplicationController


    def index
      @search = Search.get(params)
      render json: [@search]
    end
  end

end
