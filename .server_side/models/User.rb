class User
  include Mongoid::Document
  store_in collection: "users"

  field :username, type: String
  field :password, type: String
end
