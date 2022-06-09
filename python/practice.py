greet = "Hello World!"
print(greet)

with open('readme.txt', 'r') as readme:
    for line in readme:
        print(line)
#with open('readme.txt', 'a') as readme:
   # readme.write('I keep adding more lines to this file')
readme.close()