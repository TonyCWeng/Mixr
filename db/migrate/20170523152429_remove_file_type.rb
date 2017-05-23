class RemoveFileType < ActiveRecord::Migration[5.0]
  def change
    remove_column :posts, :file_type, :string
  end
end
