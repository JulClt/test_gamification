class Comment < ActiveRecord::Base
  has_merit
  
  attr_accessible :content, :title
  belongs_to :user
end
