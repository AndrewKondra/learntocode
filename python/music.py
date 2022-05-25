greet = "Hello World!"
print(greet)

#from distutils.filelist import findall
import urllib.request, urllib.parse, urllib.error
fhand = urllib.request.urlopen('https://www.rollingstone.com/music/music-lists/50-best-songs-of-2021-list-1260934/')
for line in fhand:
    print(line.decode().strip())
#print(page.read())
#for line in page:
 #   for word in line.split():
  #      print(type(word))
#for row in page:
#    print(row)

import re
titles = re.findall('^title',line)
print(titles)




#"positionDisplay":50
#"title":"MO3 and Morray, 'In My Blood'",