class RemoveFileType < ActiveRecord::Migration[5.0]
  def change
    remove_column :posts, :post_type, :string
  end
end
