require 'json'

get '/package/get' do
  user = params["user"]
  content_type :json
  result = {}

  user = Package.where(username: username).first
  if user.nil?
    result["err"] = true
    result["message"] = "NOT_EXIST"
  else
    result["err"] = false
    result["coin"] = user.coin
    result["items"] = user.items
  end
  return result.to_json
end

get '/package/update' do
  key = params["key"]
  item = params["item"]
  value = params["value"]
  user = params["user"]
  content_type :json
  result = {}

  user = Package.where(username: username).first
  if user.nil?
    result["err"] = true
    result["message"] = "NOT_EXIST"
  else
    result["err"] = false
    case key
    when "coin"
      user.coin = value.to_i
    when "item"
      user.items[item.to_i] = value.to_i
    end
    user.save
  end
  return result.to_json
end
