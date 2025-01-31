" Generates a large empty set of map tiles. "
#Side length of square of tiles defined in one init file. put this as a constant somewhere else?
BLOCK_SIDE_LENGTH = 25

task :generate_map => :environment do
  #Empty the tile database before we start
  Tile.destroy_all

  #Check if we're using the empty map (really just for prototyping)
  if ENV['emptyMap'] then
    (0..Tile.MAP_SIDE_LENGTH).each do |i|
      (0..Tile.MAP_SIDE_LENGTH).each do |j|
        Tile.create(x: i, y: j, tile_type: 0)
      end
    end
  else
    #If not using empty map then read map initialization from json files
    init_files = Dir["config/map/init/*"]
    init_files.each do |filename|

      #ignore stupid emacs autosave files
      if filename[filename.length-1] == '~'or 
         filename[filename.length-1] == '#' then next end

      #open and read file
      file = open(filename)
      json = file.read
      map_tiles = JSON.parse(json)["tiles"]


      #this is ugly, but we want to strip the file name of the directory and
      #filename extention, in order to extract the semantic meaning of the 
      #file name (where on the map the contents of the file go)
      #x and y are the coordinates of the block of the map defined in file,
      #i.e. 0-0.json is the file describing a square of tiles in the southwest
      #corner of the map.
      location = filename[16..filename.length-6]
      x = location.split('-')[0].to_i
      y = location.split('-')[1].to_i
      
      #iterate through the tiles in the file
      map_tiles.each do |tile|
        #find the absolute map position of the tile from the coordinates 
	#given in the file and the position of the file's contents relative
	#to other files' contents
	absolute_x = x * BLOCK_SIDE_LENGTH + tile["x"]
	absolute_y = y * BLOCK_SIDE_LENGTH + tile["y"]
	Tile.create(x: absolute_x, y: absolute_y, tile_type: tile["id"], state: tile["state"])
      end
    end
  end
end
