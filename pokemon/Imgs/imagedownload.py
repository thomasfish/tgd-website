import urllib.request

for x in range(1025):
  y = x + 1
  y = str(y).zfill(3)
  urllib.request.urlretrieve("https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/" + y + ".png", y + ".png")