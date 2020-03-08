class CreateKeyTerms < ActiveRecord::Migration[5.2]
  def change
    create_table :key_terms do |t|
      t.string :value
      t.references :product, foreign_key: true

      t.timestamps
    end
  end
end
