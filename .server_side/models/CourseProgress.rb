class CourseProgress
  include Mongoid::Document
  store_in collection: "course_progress"

  field :username, type: String
  field :progress, type: Integer
  field :day1, type: Hash
  field :review_list, type: Array
end
