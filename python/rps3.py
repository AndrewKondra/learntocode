greet = "Hello World! \nWelcome to Andrew\'s favourite game:\n---ROCK : PAPER : SCISSORS---"
print(greet)

play1 = input("Player 1 please enter your name: ")
play2 = input("Player 2 please enter your name: ")

def addscore():
    score = (0,0)
    playagain = 'y'
    while playagain == 'y':
        score = play(score)
        playagain = input('Would you like to play again y/n: ')
    print('The final score is : \n' + play1 + ' -',score[0],  '\n' + play2 + ' - ',score[1])

def checkhand(player,hand):
    if hand  > 0 and hand < 4:
        return hand
    else:
        hand = input(player + " please press 1 for ROCK, 2 for PAPER, 3 for SCISSORS: ")
        if not hand:
            return checkhand(player,0)
        else:
            newhand = int(hand)
            return checkhand(player,newhand)

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

def play(score):
    hand1 = checkhand(play1,0)
    fhand1 = hand1
    fhand1 = choice(hand1)
    print(play1 + " has chosen: ",fhand1)
    hand2 = checkhand(play2,0)
    fhand2 = hand2
    fhand2 = choice(hand2)
    print(play2 + " has chosen: ",choice(hand2))
    a = hand1
    b = hand2
    c = fhand1
    d = fhand2
    if a==b:
        print('Both players chose ', c, '. It\'s a tie!!!')
        printscore(score)
        return score
    elif (a==1 and b==3) or (a==2 and b==1) or (a==3 and b==2):
        print(c, ' beats ', d, '. ' + play1 +' wins!')
        score = (score[0] + 1,score[1])
        printscore(score)
        return score
    else:
        print(d, ' beats ', c, '. ' + play2 +' wins!')
        score = (score[0],score[1] + 1)
        printscore(score)
        return score 
    
def printscore(score):
    print ('The score is : \n'+ play1 + ' -',score[0], '\n' + play2 + ' - ',score[1])

addscore()


