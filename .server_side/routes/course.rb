require 'json'

get '/course/get' do
  user = params["user"]
  content_type :json
  result = {}

  user = CourseProgress.where(username: username).first
  if user.nil?
    result["err"] = true
    result["message"] = "NOT_EXIST"
  else
    result["err"] = false
    result["progress"] = user.progress
    result["reviewList"] = user.review_list
    result["day1"] = {
      "progress" => user.day1["progress"],
      "test" => user.day1["test"]
    }
  end
  return result.to_json
end

get '/course/update' do
  key = params["key"]
  action = params["action"]
  value = params["value"]
  user = params["user"]
  content_type :json
  result = {}

  user = CourseProgress.where(username: username).first
  if user.nil?
    result["err"] = true
    result["message"] = "NOT_EXIST"
  else
    result["err"] = false
    case key
    when "progress"
      user.progress = value.to_i
    when "reviewList"
      case action
      when "add"
        user.review_list.push(value).uniq!
      when "remove"
        user.review_list.delete(value)
      end
    when "day1"
      case action
      when "progress"
        user.day1["progress"] = value.to_i
      when "test"
        user.day1["test"] = value.to_i
      end
    end
    user.save
  end
  return result.to_json
end
