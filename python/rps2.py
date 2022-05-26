greet = "Hello World! \nWelcome to Andrew\'s favourite game:\n---ROCK : PAPER : SCISSORS---"
print(greet)

#def names():
play1 = input("Player 1 please enter your name: ")
play2 = input("Player 2 please enter your name: ")
 #   return play1,play2

def addscore():
    score = (0,0)
    playagain = 'y'
    while playagain == 'y':
        print(score) 
        score = check(score)
        playagain = input('Would you like to play again y/n: ')
    print('The final score is : \n' + play1 + ' -',score[0],  '\n' + play2 + ' - ',score[1])

def checkhand(hand):
        if hand not in [1,2,3] or hand == '':
            hand = input("Not an allowable input, please retry:")
            return checkhand(hand)
        else:
            return hand    

def choice(hand):
    if hand == 1:
        choice = "ROCK"
        return choice
    elif hand == 2:
        choice = "PAPER"
        return choice
    elif hand == 3:
        choice = "SCISSORS"
        return choice

def check(score):    
    rps = input(play1 + " please press 1 for ROCK, 2 for PAPER, 3 for SCISSORS: ")
    hand1 = checkhand(int(rps))
    fhand1 = choice(hand1)
    print(play1 + " has chosen: ",fhand1)
    rps = input(play2 + " please press 1 for ROCK, 2 for PAPER, 3 for SCISSORS: ")
    hand2 = checkhand(int(rps))
    fhand2 = choice(hand2)
    print(play2 + " has chosen: ",choice(hand2))
    a = hand1
    b = hand2
    c = fhand1
    d = fhand2
    if a==b:
        print('Both players chose ', c, '. It\'s a tie!!!')
        print(score)
        printscore(score)
        return score
    elif (a==1 and b==3) or (a==2 and b==1) or (a==3 and b==2):
        print(c, ' beats ', d, '. ' + play1 +' wins!')
        print(score)
        score = (score[0] + 1,score[1])
        print(score)
        printscore(score)
        return score
    else:
        print(d, ' beats ', c, '. ' + play2 +' wins!')
        print(score)
        score = (score[0],score[1] + 1)
        print(score)
        printscore(score)
        return score 
    
def printscore(score):
    print ('The score is : \n'+ play1 + ' -',score[0], '\n' + play2 + ' - ',score[1])

addscore()


