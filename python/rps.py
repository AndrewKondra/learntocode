greet = "Hello World!"
print(greet)


def checkhand(hand):
    while True:
        if hand==0:
            exit('Thank you for playing.')
        elif hand < 1 or hand > 3:
            hand = int(input("Not an allowable input, please retry:"))
            return checkhand(hand)
        else:
            return hand

def choice(hand):
    choice=''
    if hand == 1:
        choice = "ROCK"
        return choice
    elif hand == 2:
        choice = "PAPER"
        return choice
    elif hand == 3:
        choice = "SCISSORS"
        return choice

def score(wins1, wins2):
    print('The score is : \nPlayer 1 -', wins1,  '\nPlayer 2 - ', wins2)

hand = int(input("Player 1 press 1 for ROCK, 2 for PAPER, 3 for SCISSORS, or 0 to finish: "))
fhand1=choice(checkhand(hand)) 
print("Player 1 has chosen: ", fhand1)
a = hand

hand = int(input('Player 2 press 1 for ROCK, 2 for PAPER, 3 for SCISSORS:  '))
fhand2=choice(checkhand(hand)) 
print("Player 2 has chosen: ",fhand2)
b = hand

wins1 = 0
wins2 = 0

if a==b:
    print('Both players chose ',fhand1, '. It\'s a tie!!!')
elif (a==1 and b==3) or (a==2 and b==1) or (a==3 and b==2):
    print(fhand1, ' beats ', fhand2, '. Plaver 1 wins!')
    wins1 = wins1 + 1
else:
    print(fhand2, ' beats ', fhand1, '. Plaver 2 wins!')
    wins2 = wins2 + 1
score(wins1, wins2)