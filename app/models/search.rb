require 'rubygems'
#require 'json'
#require 'net/http'

class Search


  def self.find(opts = {})
    url = "http://octopart.com/api/v3/parts/search"

    # NOTE: Use your API key here (https://octopart.com/api/register)
    url += "?apikey=11b3fd4e"

    def to_query(hsh)
      hsh.map {|k, v| "#{k}=#{URI.encode(v.to_s)}"}.join("&")
    end


    params = {
      :q => "texas",
      :start => 0,
      :limit => 10
    }

    url += "&" + to_query(params)
    Rails.logger.info url
    resp = Net::HTTP.get_response(URI.parse(url))
    search_response = JSON.parse(resp.body)

    # print number of hits
    # puts search_response['hits']

    # print results
    # search_response['results'].each do |result|
    #   part = result['item']

    #   # print matched part
    #   puts part['brand']['name'] + ' - ' + part['mpn']
    # end
  end


  def self.get(opts = {})
    opts[:start] = 0
    opts[:limit] = 10
    response = HTTParty.get("http://octopart.com/api/v3/parts/search?apikey=11b3fd4e&q=#{opts[:q]}&limit=#{opts[:limit]}&start=#{opts[:start]}")
    JSON.parse(response.body)
  end
end
