require 'spec_helper'

# The :tiles factory defined in /spec/factories/tile.rb generates tiles in
# successive rows of length Tile.MAP_SIDE_LENGTH, e.g.
# (0, 0), (1, 0), (2, 0), (3, 0), (4, 0), ... (Tile.MAP_SIDE_LENGTH, 0),
# (0, 1), (1, 1), (2, 1), (3, 1), ...
# ... (Tile.MAP_SIDE_LENGTH, Tile.MAP_SIDE_LENGTH)

describe Tile do

  describe ".tiles_at" do

    it "fetches the right number of tiles" do
      returned_tiles = Tile.tiles_at(0, 0, @side_length, @side_length)
      returned_tiles.count.should eq (@side_length * @side_length)
    end

    it "returns a single tile as a collection" do
      single_tile = Tile.tiles_at(0, 0, 0, 0)
      single_tile.respond_to?("count").should eql true
    end
  end

  describe ".tile_at" do
    it "returns a single tile as a record" do
      single_tile = Tile.tile_at(0, 0)
      single_tile.respond_to?("count").should eql false
    end

    it "returns the correct tile" do
      (0..@side_length - 2).each do |i|
        (0..@side_length - 2).each do |j|
          t = Tile.tile_at(i, j)
          t.x.should eq i
          t.y.should eq j
        end
      end
    end
  end

  describe ".item_at" do
    it "returns a valid item id when there is one" do
      tile = Tile.first
      tile.item = Item.create
      item_at = Tile.item_at(tile.x, tile.y)
      item_at.should be_valid
    end

    it "returns nil when there's no item" do
      tile = Tile.first
      tile.item = nil
      tile.save # Make sure u save kiddos or u will stupidly debug for 30 min
      Tile.item_at(tile.x, tile.y).should eql nil
    end
  end

  describe ".character_at" do
    it "returns a valid character when there is one" do
      tile = Tile.first
      tile.character = Character.create
      char_at = Tile.character_at(tile.x, tile.y)
      char_at.should be_valid
    end

    it "returns nil when there's no character" do
      tile = Tile.first
      tile.character = nil
      tile.save
      Tile.character_at(tile.x, tile.y).should eql nil
    end
  end
end
