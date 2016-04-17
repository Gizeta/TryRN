class Package
  include Mongoid::Document
  store_in collection: "packages"

  field :username, type: String
  field :coin, type: Integer
  field :items, type: Array
end
