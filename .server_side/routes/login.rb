require 'json'

get '/login' do
  username = params["username"]
  password = params["password"]
  content_type :json
  result = {}

  user = User.where(username: username).first
  if user.nil?
    result["err"] = true
    result["message"] = "NOT_EXIST"
  elsif user.password != password
    result["err"] = true
    result["message"] = "AUTH_FAIL"
  else
    result["err"] = false
  end
  return result.to_json
end

get '/reg' do
  username = params["username"]
  password = params["password"]
  content_type :json
  result = {}

  user = User.where(username: username).first
  if user.nil?
    result["err"] = false
    User.where(username: username, password: password).create
  else
    result["err"] = true
    result["message"] = "EXIST"
  end
  return result.to_json
end
