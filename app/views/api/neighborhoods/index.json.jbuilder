@neighborhoods.each do |neighborhood|
  json.set! neighborhood.id do
    json.partial! 'neighborhood', neighborhood: neighborhood
  end
end
